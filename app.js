// ===== SVG ICONS =====
var ICONS = {
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  bookOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'
};

// ===== COURSE DATA =====
var allCourses = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack con React y Node.js",
    description: "Domina el desarrollo web completo desde el frontend hasta el backend. Aprende React, Node.js, Express y MongoDB para crear aplicaciones web profesionales.",
    image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Intermedio",
    category: "Desarrollo Web",
    duration: "12 semanas",
    price: "$299",
    students: 1247,
    rating: 4.8,
    instructor: "Carlos Martinez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "Diseno UX/UI desde Cero",
    description: "Aprende los fundamentos del diseno de experiencia de usuario e interfaces. Domina Figma y crea prototipos interactivos profesionales.",
    image: "https://images.unsplash.com/photo-1758612214917-81d7956c09de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Basico",
    category: "Diseno",
    duration: "8 semanas",
    price: "$199",
    students: 892,
    rating: 4.9,
    instructor: "Ana Gonzalez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
  },
  {
    id: 3,
    title: "Marketing Digital Avanzado",
    description: "Estrategias avanzadas de marketing digital, SEO, SEM, redes sociales y analisis de metricas para impulsar tu negocio online.",
    image: "https://images.unsplash.com/photo-1758687126499-9ff30d1c5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Avanzado",
    category: "Marketing",
    duration: "10 semanas",
    price: "$349",
    students: 654,
    rating: 4.7,
    instructor: "Luis Rodriguez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  },
  {
    id: 4,
    title: "Ciencia de Datos con Python",
    description: "Analisis de datos, visualizacion con matplotlib y seaborn, machine learning con scikit-learn y pandas para analisis avanzado.",
    image: "https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Intermedio",
    category: "Datos y Analisis",
    duration: "14 semanas",
    price: "$399",
    students: 1105,
    rating: 4.9,
    instructor: "Maria Fernandez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
  },
  {
    id: 5,
    title: "JavaScript Moderno - ES6+",
    description: "Aprende las caracteristicas modernas de JavaScript: async/await, promesas, destructuring, arrow functions y modulos ES6.",
    image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Intermedio",
    category: "Desarrollo Web",
    duration: "6 semanas",
    price: "$179",
    students: 2341,
    rating: 4.8,
    instructor: "Jorge Perez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
  },
  {
    id: 6,
    title: "Introduccion a la Programacion",
    description: "Tu primer paso en el mundo de la programacion. Aprende logica, algoritmos y estructura de datos de forma practica.",
    image: "https://images.unsplash.com/photo-1758612214917-81d7956c09de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Basico",
    category: "Desarrollo Web",
    duration: "5 semanas",
    price: "$149",
    students: 3456,
    rating: 4.7,
    instructor: "Patricia Lopez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
  },
  {
    id: 7,
    title: "Gestion de Proyectos Agiles",
    description: "Metodologias agiles, Scrum, Kanban y herramientas para gestionar proyectos tecnologicos de forma eficiente.",
    image: "https://images.unsplash.com/photo-1758687126499-9ff30d1c5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Intermedio",
    category: "Negocios",
    duration: "7 semanas",
    price: "$249",
    students: 987,
    rating: 4.6,
    instructor: "Roberto Sanchez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
  },
  {
    id: 8,
    title: "Desarrollo de Apps Moviles con React Native",
    description: "Crea aplicaciones moviles nativas para iOS y Android usando React Native. Un codigo, multiples plataformas.",
    image: "https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Avanzado",
    category: "Desarrollo Web",
    duration: "11 semanas",
    price: "$379",
    students: 765,
    rating: 4.8,
    instructor: "Andres Torres",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    id: 9,
    title: "Inteligencia Artificial y Machine Learning",
    description: "Fundamentos de IA, redes neuronales, deep learning y aplicaciones practicas con TensorFlow y PyTorch.",
    image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzQzMjU4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Avanzado",
    category: "Datos y Analisis",
    duration: "16 semanas",
    price: "$449",
    students: 543,
    rating: 4.9,
    instructor: "Isabel Ramirez",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  }
];

var categories = ["Desarrollo Web", "Diseno", "Marketing", "Datos y Analisis", "Negocios"];
var levels = ["Basico", "Intermedio", "Avanzado"];

// ===== HELPERS =====
function getLevelClass(level) {
  switch (level) {
    case "Basico": return "level-basico";
    case "Intermedio": return "level-intermedio";
    case "Avanzado": return "level-avanzado";
    default: return "";
  }
}

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
  var grid = document.getElementById('coursesGrid');
  if (!grid) return;

  var html = '';
  allCourses.forEach(function(course) {
    html += '<div class="course-card">' +
      '<div class="course-card-image">' +
        '<img src="' + course.image + '" alt="' + escapeHtml(course.title) + '">' +
        '<span class="course-card-level ' + getLevelClass(course.level) + '">' + course.level + '</span>' +
      '</div>' +
      '<div class="course-card-body">' +
        '<div class="course-card-meta">' +
          '<span class="course-card-category">' + course.category + '</span>' +
          '<span class="course-card-duration">' + course.duration + '</span>' +
        '</div>' +
        '<h3>' + escapeHtml(course.title) + '</h3>' +
        '<p>' + escapeHtml(course.description) + '</p>' +
        '<a href="curso-detalle.html?id=' + course.id + '" class="btn-card">Ver mas</a>' +
      '</div>' +
    '</div>';
  });

  grid.innerHTML = html;
}

// ===== COURSE DETAIL PAGE =====
function renderCourseDetail() {
  var container = document.getElementById('courseDetailContent');
  if (!container) return;

  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get('id'));
  var course = allCourses.find(function(c) { return c.id === id; });

  if (!course) {
    container.innerHTML = '<div class="not-found"><div><h1>Curso no encontrado</h1><a href="cursos.html">Volver a cursos</a></div></div>';
    return;
  }

  document.title = course.title + ' - EducaPlus';

  var modules = [
    { title: "Modulo 1: Introduccion", lessons: ["Bienvenida al curso", "Configuracion del entorno", "Primeros pasos"] },
    { title: "Modulo 2: Fundamentos", lessons: ["Conceptos basicos", "Practica guiada", "Ejercicios fundamentales"] },
    { title: "Modulo 3: Nivel Intermedio", lessons: ["Tecnicas avanzadas", "Casos de uso reales", "Proyecto intermedio"] },
    { title: "Modulo 4: Nivel Avanzado", lessons: ["Optimizacion", "Mejores practicas", "Proyecto final"] }
  ];

  var benefits = [
    "Acceso de por vida al contenido",
    "Certificado de finalizacion",
    "Soporte del instructor",
    "Recursos descargables",
    "Acceso a la comunidad",
    "Actualizaciones gratuitas"
  ];

  var learnItems = [
    "Dominar los conceptos fundamentales",
    "Aplicar tecnicas avanzadas",
    "Desarrollar proyectos reales",
    "Mejores practicas de la industria",
    "Optimizacion y rendimiento",
    "Herramientas profesionales"
  ];

  var modulesHtml = modules.map(function(mod) {
    var lessonsHtml = mod.lessons.map(function(lesson) {
      return '<div class="module-lesson">' + ICONS.checkCircle + '<span>' + lesson + '</span></div>';
    }).join('');
    return '<div class="module"><div class="module-header"><h3>' + mod.title + '</h3></div><div class="module-lessons">' + lessonsHtml + '</div></div>';
  }).join('');

  var benefitsHtml = benefits.map(function(b) {
    return '<div class="sidebar-benefit">' + ICONS.checkCircle + '<span>' + b + '</span></div>';
  }).join('');

  var learnHtml = learnItems.map(function(item) {
    return '<div class="learn-item">' + ICONS.checkCircle + '<span>' + item + '</span></div>';
  }).join('');

  container.innerHTML =
    // Hero
    '<div class="detail-hero">' +
      '<div class="detail-hero-inner">' +
        '<a href="cursos.html" class="back-link">' + ICONS.arrowLeft + '<span>Volver a cursos</span></a>' +
        '<div class="detail-hero-grid">' +
          '<div class="detail-info">' +
            '<span class="course-card-level ' + getLevelClass(course.level) + '" style="margin-bottom:1rem;display:inline-block">' + course.level + '</span>' +
            '<h1>' + escapeHtml(course.title) + '</h1>' +
            '<p>' + escapeHtml(course.description) + '</p>' +
            '<div class="detail-meta">' +
              '<div class="detail-meta-item">' + ICONS.bookOpen + '<span>' + course.category + '</span></div>' +
              '<div class="detail-meta-item">' + ICONS.clock + '<span>' + course.duration + '</span></div>' +
              '<div class="detail-meta-item">' + ICONS.users + '<span>' + course.students.toLocaleString() + ' estudiantes</span></div>' +
              '<div class="detail-meta-item">' + ICONS.award + '<span>&#9733; ' + course.rating + '</span></div>' +
            '</div>' +
            '<div class="detail-instructor"><p>Instructor</p><p>' + escapeHtml(course.instructor) + '</p></div>' +
          '</div>' +
          '<div>' +
            '<div class="detail-price-card">' +
              '<img src="' + course.image + '" alt="' + escapeHtml(course.title) + '">' +
              '<div class="detail-price-body">' +
                '<div class="price-display"><p>Precio del curso</p><p>' + course.price + '</p></div>' +
                '<button class="btn-enroll">Inscribirse ahora</button>' +
                '<button class="btn-enroll" onclick="agregarFavorito(' + course.id + ')">❤️ Agregar a favoritos</button>' +
                '<p class="guarantee-text">Garantia de devolucion de 30 dias</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    // Main content
    '<div class="detail-main">' +
      '<div class="detail-layout">' +
        '<div class="detail-content">' +
          // Description
          '<div class="detail-card">' +
            '<h2>' + ICONS.barChart + '<span>Descripcion del curso</span></h2>' +
            '<p>' + escapeHtml(course.longDescription) + '</p>' +
          '</div>' +
          // Modules
          '<div class="detail-card">' +
            '<h2>' + ICONS.bookOpen + '<span>Contenido del curso</span></h2>' +
            modulesHtml +
          '</div>' +
          // What you'll learn
          '<div class="detail-card">' +
            '<h2>Lo que aprenderas</h2>' +
            '<div class="learn-grid">' + learnHtml + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="detail-sidebar">' +
          '<div class="sidebar-card">' +
            '<h3>Este curso incluye</h3>' +
            benefitsHtml +
            '<button class="btn-enroll">Inscribirse ahora</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    // CTA
    '<div class="detail-cta">' +
      '<h2>Listo para comenzar tu aprendizaje?</h2>' +
      '<p>Unete a miles de estudiantes que ya estan transformando sus carreras</p>' +
      '<button class="btn-cta" onclick="void(0)">Inscribirse por ' + course.price + '</button>' +
    '</div>';
}

// ===== ADMIN PAGE =====
var adminCourses = [];
var courseToDeleteId = null;

function getAdminCourses() {
  var stored = localStorage.getItem('adminCourses');
  if (stored) {
    return JSON.parse(stored);
  }
  // Default courses
  return allCourses.slice(0, 3).map(function(c) {
    return { id: c.id, title: c.title, description: c.description, image: c.image, level: c.level, category: c.category, duration: c.duration };
  });
}

function saveAdminCourses() {
  localStorage.setItem('adminCourses', JSON.stringify(adminCourses));
}

function renderAdminPage() {
  adminCourses = getAdminCourses();
  renderStats();
  renderTable();
}

function renderStats() {
  var stats = document.getElementById('adminStats');
  if (!stats) return;

  stats.innerHTML =
    '<div class="stat-card"><div class="stat-card-inner"><div><p>Total de Cursos</p><p class="stat-number">' + adminCourses.length + '</p></div><div class="stat-icon blue">&#128218;</div></div></div>' +
    '<div class="stat-card"><div class="stat-card-inner"><div><p>Categorias</p><p class="stat-number">' + categories.length + '</p></div><div class="stat-icon green">&#128194;</div></div></div>' +
    '<div class="stat-card"><div class="stat-card-inner"><div><p>Niveles</p><p class="stat-number">' + levels.length + '</p></div><div class="stat-icon purple">&#11088;</div></div></div>';
}

function renderTable() {
  var tbody = document.getElementById('adminTableBody');
  var emptyState = document.getElementById('emptyState');
  if (!tbody) return;

  if (adminCourses.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  var html = '';
  adminCourses.forEach(function(course) {
    html += '<tr>' +
      '<td>' +
        '<div class="table-course-info">' +
          '<img src="' + course.image + '" alt="' + escapeHtml(course.title) + '">' +
          '<div class="info-text">' +
            '<p>' + escapeHtml(course.title) + '</p>' +
            '<p>' + escapeHtml(course.description) + '</p>' +
          '</div>' +
        '</div>' +
      '</td>' +
      '<td><span class="badge badge-blue">' + course.category + '</span></td>' +
      '<td><span class="badge ' + getLevelBadge(course.level) + '">' + course.level + '</span></td>' +
      '<td>' + course.duration + '</td>' +
      '<td>' +
        '<div class="table-actions">' +
          '<button class="btn-icon edit" onclick="openCourseDialog(' + course.id + ')">' + ICONS.pencil + '</button>' +
          '<button class="btn-icon delete" onclick="handleDeleteCourse(' + course.id + ')">' + ICONS.trash + '</button>' +
        '</div>' +
      '</td>' +
    '</tr>';
  });

  tbody.innerHTML = html;
}

function openCourseDialog(courseId) {
  var modal = document.getElementById('courseModal');
  var titleEl = document.getElementById('modalTitle');
  var descEl = document.getElementById('modalDescription');
  var btnText = document.getElementById('saveButtonText');
  var editingIdEl = document.getElementById('editingId');

  if (courseId) {
    var course = adminCourses.find(function(c) { return c.id === courseId; });
    if (!course) return;

    titleEl.textContent = 'Editar Curso';
    descEl.textContent = 'Modifica los detalles del curso seleccionado';
    btnText.textContent = 'Guardar Cambios';
    editingIdEl.value = courseId;

    document.getElementById('courseTitle').value = course.title;
    document.getElementById('courseDescription').value = course.description;
    document.getElementById('courseCategory').value = course.category;
    document.getElementById('courseLevel').value = course.level;
    document.getElementById('courseDuration').value = course.duration;
    document.getElementById('courseImage').value = course.image;
  } else {
    titleEl.textContent = 'Crear Nuevo Curso';
    descEl.textContent = 'Completa la informacion del nuevo curso';
    btnText.textContent = 'Crear Curso';
    editingIdEl.value = '';

    document.getElementById('courseForm').reset();
  }

  updateImagePreview();
  modal.classList.add('active');
}

function closeCourseDialog() {
  document.getElementById('courseModal').classList.remove('active');
}

function updateImagePreview() {
  var url = document.getElementById('courseImage').value;
  var preview = document.getElementById('imagePreview');
  if (url) {
    preview.innerHTML = '<img src="' + escapeHtml(url) + '" alt="Vista previa" onerror="this.src=\'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=400\'">';
  } else {
    preview.innerHTML = '';
  }
}

function handleSaveCourse(e) {
  e.preventDefault();

  var editingId = document.getElementById('editingId').value;
  var formData = {
    title: document.getElementById('courseTitle').value,
    description: document.getElementById('courseDescription').value,
    category: document.getElementById('courseCategory').value,
    level: document.getElementById('courseLevel').value,
    duration: document.getElementById('courseDuration').value,
    image: document.getElementById('courseImage').value || 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=400'
  };

  if (editingId) {
    adminCourses = adminCourses.map(function(c) {
      if (c.id === parseInt(editingId)) {
        return Object.assign({}, formData, { id: c.id });
      }
      return c;
    });
  } else {
    var maxId = adminCourses.reduce(function(max, c) { return c.id > max ? c.id : max; }, 0);
    formData.id = maxId + 1;
    adminCourses.push(formData);
  }

  saveAdminCourses();
  renderStats();
  renderTable();
  closeCourseDialog();
}

function handleDeleteCourse(id) {
  courseToDeleteId = id;
  document.getElementById('deleteModal').classList.add('active');
}

function closeDeleteDialog() {
  document.getElementById('deleteModal').classList.remove('active');
  courseToDeleteId = null;
}

function confirmDeleteCourse() {
  if (courseToDeleteId !== null) {
    adminCourses = adminCourses.filter(function(c) { return c.id !== courseToDeleteId; });
    saveAdminCourses();
    renderStats();
    renderTable();
  }
  closeDeleteDialog();
}
// ===== FAVORITOS =====

function agregarFavorito(id){

  var favoritos = localStorage.getItem("favoritos");

  if(favoritos){
    favoritos = JSON.parse(favoritos);
  } else {
    favoritos = [];
  }

  if(!favoritos.includes(id)){
    favoritos.push(id);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  alert("Curso agregado a favoritos");
}
