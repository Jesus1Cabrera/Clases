fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    renderMenu(data.menu);
  })
  .catch(error => console.error('Error al cargar el menú:', error));

function renderMenu(menuData) {
  const menuContainer = document.getElementById('menu');
  menuContainer.innerHTML = '';

  menuData.forEach(option => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const menuLink = document.createElement('a');
    menuLink.href = option.enlace;
    menuLink.innerHTML = option.icono ? `<i class="fas fa-${option.icono}"></i> ${option.nombre}` : option.nombre;

    menuItem.appendChild(menuLink);

    if (option.subMenu && option.subMenu.length > 0) {
      const subMenu = document.createElement('div');
      subMenu.classList.add('sub-menu');

      option.subMenu.forEach(subOption => {
        const subLink = document.createElement('a');
        subLink.href = subOption.enlace;
        subLink.textContent = subOption.nombre;
        subMenu.appendChild(subLink);
      });

      menuItem.appendChild(subMenu);
    }

    menuContainer.appendChild(menuItem);
  });
}


document.getElementById('form-add-option').addEventListener('submit', function (e) {
  e.preventDefault();

  const newOption = {
    id: Date.now(),  
    nombre: document.getElementById('menu-nombre').value,
    enlace: document.getElementById('menu-enlace').value,
    icono: document.getElementById('menu-icono').value || null
  };

  fetch('menu.json')
    .then(response => response.json())
    .then(data => {
      data.menu.push(newOption);
      renderMenu(data.menu);
    })
    .catch(error => console.error('Error al agregar nueva opción:', error));
});
