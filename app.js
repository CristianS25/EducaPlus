// ===== UTILIDADES =====
function getLevelBadge(level) {
  switch (level) {
    case "Basico": return "badge-green";
    case "Intermedio": return "badge-yellow";
    case "Avanzado": return "badge-red";
    default: return "badge-blue";
  }
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== COURSES PAGE =====
function renderCoursesPage() {
  var grid = document.getElementById('contenedor-cursos');
  if (!grid) return;

  var cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  if (cursos.length === 0) {
    grid.innerHTML = "<p>No hay cursos disponibles</p>";
    return;
  }

  var html = '';

  cursos.forEach(function(course, index) {
    html += `
      <div class="course-card">
        <div class="course-card-image">
          <img src="${course.imagen || 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=400'}" alt="${course.nombre}">
        </div>
        <div class="course-card-body">
          <h3>${course.nombre}</h3>
          <p>${course.descripcion}</p>
          <a href="curso-detalle.html?id=${index}" class="btn-card">Ver más</a>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

// ===== ADMIN PAGE =====
function renderAdminPage() {
  var tbody = document.getElementById("adminTableBody");
  if (!tbody) return;

  var cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  if (cursos.length === 0) {
    tbody.innerHTML = "<tr><td colspan='5'>No hay cursos</td></tr>";
    return;
  }

  var html = "";

  cursos.forEach(function(curso, index) {
    html += `
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

  tbody.innerHTML = html;
}

function eliminarCurso(index) {
  let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  cursos.splice(index, 1);
  localStorage.setItem("cursos", JSON.stringify(cursos));
  renderAdminPage();
}

// ===== MODAL =====
function openCourseDialog() {
  document.getElementById("courseModal").style.display = "flex";
}

function closeCourseDialog() {
  document.getElementById("courseModal").style.display = "none";
}

// ===== GUARDAR CURSO =====
function handleSaveCourse(event) {
  event.preventDefault();

  let nombre = document.getElementById("courseTitle").value.trim();
  let descripcion = document.getElementById("courseDescription").value.trim();
  let categoria = document.getElementById("courseCategory").value;
  let nivel = document.getElementById("courseLevel").value;
  let duracion = document.getElementById("courseDuration").value.trim();
  let imagen = document.getElementById("courseImage").value.trim();

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
  renderAdminPage();
}

// ===== FAVORITOS =====
function agregarFavorito(id) {
  var favoritos = localStorage.getItem("favoritos");

  if (favoritos) {
    favoritos = JSON.parse(favoritos);
  } else {
    favoritos = [];
  }

  if (!favoritos.includes(id)) {
    favoritos.push(id);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  alert("Curso agregado a favoritos");
}

// ===== AUTO EJECUCIÓN SEGÚN PÁGINA =====
document.addEventListener("DOMContentLoaded", function() {
  renderCoursesPage();
  renderAdminPage();

  var form = document.getElementById("courseForm");
  if (form) {
    form.addEventListener("submit", handleSaveCourse);
  }
});