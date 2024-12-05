// Opciones del menú dinámico
const menuOptions = [
    { title: 'Acceso BD', link: 'proyectos/Acceso_BD.html' },
    { title: 'Biografia', link: 'proyectos/Biografia.html' },
    { title: 'CodigoQR', link: 'proyectos/codigoqr.html' },
    { title: 'Etiquetas', link: 'proyectos/Etiquetas.html' },
    { title: 'Formulario', link: 'proyectos/Formulario.html' },
    { title: 'FormularioGrafico', link: 'proyectos/FormularioGrafico.html' },
    { title: 'Pagina', link: 'proyectos/JCpagina.html' },
    { title: 'Coming Soon', link: '#', disabled: true }
  ];
  
  // Referencias a los elementos del DOM
  const sideMenu = document.getElementById('side-menu');
  const menuOptionsContainer = document.getElementById('menu-options');
  
  // Función para alternar el menú lateral
  function toggleMenu() {
    if (sideMenu.style.right === '0px') {
      sideMenu.style.right = '-300px';
    } else {
      sideMenu.style.right = '0px';
    }
  }
  
  // Generar opciones dinámicamente
  menuOptions.forEach(option => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
  
    link.textContent = option.title;
    link.href = option.link;
  
    if (option.disabled) {
      link.style.pointerEvents = 'none';
      link.style.opacity = '0.5';
    }
  
    listItem.appendChild(link);
    menuOptionsContainer.appendChild(listItem);
  });
  