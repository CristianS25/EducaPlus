// Lista de cursos
let cursos = [
  {
    id: 1,
    nombre: "Desarrollo Web Full Stack",
    descripcion: "Aprende a crear aplicaciones web modernas con React y Node.js",
    imagen: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8"
  },
  {
    id: 2,
    nombre: "Diseño UX/UI",
    descripcion: "Aprende diseño de interfaces atractivas",
    imagen: "https://images.unsplash.com/photo-1758612214917-81d7956c09de"
  },
  {
    id: 3,
    nombre: "Marketing Digital",
    descripcion: "Estrategias para crecer en redes sociales",
    imagen: "https://images.unsplash.com/photo-1758687126499-9ff30d1c5762"
  },
  {
    id: 4,
    nombre: "Ciencia de Datos",
    descripcion: "Aprende análisis y machine learning con Python",
    imagen: "https://images.unsplash.com/photo-1762330910399-95caa55acf04"
  }
];

// Función para mostrar cursos
function mostrarCursos() {
  let contenedor = document.getElementById("contenedor-cursos");

  // limpiar contenedor
  contenedor.innerHTML = "";

  // recorrer cursos
  cursos.forEach(curso => {
    contenedor.innerHTML += `
      <div class="course-card">
        <div class="course-card-image">
          <img src="${curso.imagen}" alt="${curso.nombre}">
        </div>
        <div class="course-card-body">
          <h3>${curso.nombre}</h3>
          <p>${curso.descripcion}</p>
          <a href="#" class="btn-card">Ver más</a>
        </div>
      </div>
    `;
  });
}

// Ejecutar función
mostrarCursos();