console.log("admin cargado");

// FUNCIONES DEL MODAL
function openCourseDialog() {
  document.getElementById("courseModal").style.display = "flex";
}

function closeCourseDialog() {
  document.getElementById("courseModal").style.display = "none";
}

// GUARDAR CURSO
function handleSaveCourse(event) {
  event.preventDefault();

  let nombre = document.getElementById("courseTitle").value.trim();
  let descripcion = document.getElementById("courseDescription").value.trim();
  let categoria = document.getElementById("courseCategory").value;
  let nivel = document.getElementById("courseLevel").value;
  let duracion = document.getElementById("courseDuration").value.trim();
  let imagen = document.getElementById("courseImage").value.trim();

  // VALIDACIÓN
  if (!nombre || !descripcion || !duracion) {
    alert("Por favor completa los campos obligatorios");
    return;
  }

  let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  let nuevoCurso = {
    nombre,
    descripcion,
    categoria,
    nivel,
    duracion,
    imagen
  };

  cursos.push(nuevoCurso);

  localStorage.setItem("cursos", JSON.stringify(cursos));

  alert("Curso guardado correctamente");

  document.getElementById("courseForm").reset();

  closeCourseDialog();
  renderCursos();
}

// EVENTO DEL FORMULARIO
document.getElementById("courseForm").addEventListener("submit", handleSaveCourse);
function renderCursos() {
  let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  let tabla = document.getElementById("adminTableBody");
  tabla.innerHTML = "";

  cursos.forEach((curso, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${curso.nombre}</td>
        <td>${curso.categoria}</td>
        <td>${curso.nivel}</td>
        <td>${curso.duracion}</td>
        <td>
          <button onclick="eliminarCurso(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}
renderCursos();

function eliminarCurso(index) {
  let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  cursos.splice(index, 1);

  localStorage.setItem("cursos", JSON.stringify(cursos));

  renderCursos();
}