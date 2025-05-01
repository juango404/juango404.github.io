// Definir los productos antes de cualquier otra lógica
const productos = [
  {
    id: 1,
    nombre: "Nike ballelli unisex",
    precioOriginal: 199900,
    precio: 159900,
    descuento: "17%",
    imagenes: [
      "img/zapato1-1.jpg",
      "img/zapato1-2.jpg",
      "img/zapato1-3.jpg",
      "img/zapato1-4.jpg",
    ],
    descripcion:
      "Estas zapatillas combinan lo mejor del estilo urbano con toques vibrantes en rosa, azul y lila, creando un look fresco y juvenil que roba miradas donde vayas. Fabricadas con materiales de alta durabilidad y acabados reforzados, estas zapatillas están pensadas para resistir tu ritmo diario sin perder su forma ni color. Gracias a su diseño de malla y ventilación estratégica, tus pies se mantendrán frescos, secos y cómodos durante todo el día.",
  },
  {
    id: 2,
    nombre: "Balance XC",
    precioOriginal: 230000,
    precio: 170000,
    descuento: "18%",
    imagenes: [
      "img/zapato2-1.jpg",
      "img/zapato2-2.jpg",
      "img/zapato2-3.jpg",
      "img/zapato2-4.jpg",
    ],
    descripcion:
      "¡Perfectos para ti! Que te gusta vestir cómodo y&nbsp; te gusta el zapato deportivo para actividades diarias, marcando siempre un estilo único y diferente..",
  },
  {
    id: 3,
    nombre: "Adidas Adizero",
    precioOriginal: 255000,
    precio: 179900,
    descuento: " 35%",
    imagenes: [
      "img/zapato3-1.jpg",
      "img/zapato3-2.jpg",
      "img/zapato3-3.jpg",
    ],
    descripcion:
      "Descubre los nuevos Adidas Adizero, diseñados para quienes buscan máximo rendimiento sin sacrificar estilo. Con una combinación de colores vibrantes (naranja, verde y blanco), estos tenis no solo destacan a la vista, sino también en cada paso que das. su Tecnología Lightstrike Pro tiene una suela con amortiguación avanzada que ofrece retorno de energía y suavidad, cuidando tus articulaciones, su diseño ergonómico se ajustan perfectamente al pie, brindando seguridad y comodidad durante todo el día.",
  },
  {
    id: 4,
    nombre: "Adidas Extreme run Dama",
    precioOriginal: 185000,
    precio: 130000,
    descuento: "18%",
    imagenes: [
      "img/zapato4-1.jpg",
      "img/zapato4-2.jpg",
      "img/zapato4-3.jpg",
      "img/zapato4-4.jpg",
    ],
    descripcion:
      "suela confortable y ligera y con una capacidad amplia de absorción en cada pisada y un resultado de amortiguación excelente..",
  },
  {
    id: 5,
    nombre: "Lacoste",
    precioOriginal: 230000,
    precio: 159900,
    descuento: "19%",
    imagenes: [
      "img/zapato5-1.jpg",
      "img/zapato5-2.jpg",
      "img/zapato5-3.jpg",
      "img/zapato5-4.jpg",
    ],
    descripcion:
      "Inspirados en la herencia francesa y el diseño contemporáneo, los Lacoste Maison Condée son el equilibrio perfecto entre sofisticación, confort y funcionalidad, ideales para quienes marcan tendencia con discreción y estilo, Confeccionados en cuero sintético de alta calidad y detalles en gamuza, ofrecen durabilidad y una textura refinada, Comodidad todo el día Plantilla acolchada y suela de goma antideslizante que garantiza confort desde la primera puesta.",
  },
  {
    id: 6,
    nombre: "Nike Balleli Galaxy Dama",
    precioOriginal: 245000,
    precio: 169900,
    descuento: "21%",
    imagenes: [
      "img/zapato6-1.jpg",
      "img/zapato6-2.jpg",
      "img/zapato6-3.jpg",
      "img/zapato6-4.jpg",
    ],
    descripcion:
      "Confeccionadas con materiales premium que garantizan resistencia, flexibilidad y larga vida útil, perfectas para acompañarte en tu día a día, con su sistema de amortiguación de aire dual (frontal azul y trasera rosa) que ofrece una pisada ultra suave y reduce el impacto en cada paso. Ideal para caminar, correr o simplemente moverte con comodidad todo el día, Ideales para outfits casuales, deportivos o urbanos. Combínalas como quieras y destaca con un estilo auténtico y atrevido.",
  },
  {
    id: 7,
    nombre: "ONCLOUD MACHETE DAMA",
    precioOriginal: 295000,
    precio: 169900,
    descuento: " 45%",
    imagenes: [
      "img/zapato7-1.jpg",
      "img/zapato7-2.jpg",
      "img/zapato7-3.jpg",
    ],
    descripcion:
      "Vive una experiencia de pisada sin igual con los innovadores On Running CloudTec, el calzado deportivo diseñado para quienes buscan lo mejor en rendimiento, estilo y confort premium, con su suela de diseño de “nubes” que absorbe el impacto y proporciona una sensación de ligereza y rebote sin esfuerzo, con un diseño de estilo futurista y versátil y una estética moderna y colores sobrios los hacen perfectos tanto para el deporte como para tu outfit urbano.",
  },
  {
    id: 8,
    nombre: "LECOQ CABALLERO",
    precioOriginal: 295000,
    precio: 159900,
    descuento: " 45%",
    imagenes: [
      "img/zapato8-1.jpg",
      "img/zapato8-2.jpg",
      "img/zapato8-3.jpg",
    ],
    descripcion:
      "Descubre la fusión perfecta entre historia, comodidad y diseño moderno con los Le Coq Sportif 1882, un modelo inspirado en el legado deportivo francés que no pasa desapercibido, diseño vintage-moderno con  una silueta retro con toques actuales que combina fácilmente con looks urbanos, casuales o deportivos, plantilla acolchada y suela de EVA que garantiza una pisada suave, ideal para caminar o estar de pie por horas.",
  }
];

const carrito = [];

// Mostrar productos en la página principal solo si estamos en index.html
if (document.getElementById("productos")) {
  const productosContainer = document.getElementById("productos");

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
            <img src="${producto.imagenes[0]}" width="150">
            <h3>${producto.nombre}</h3>
            <div class="precios">
                <span class="precio-original">$${producto.precioOriginal}</span>
                <span class="precio-actual">$${producto.precio}</span>
                <span class="descuento">-${producto.descuento}</span>
            </div>
            <button onclick="window.location.href='producto.html?id=${producto.id}'">Ver Detalles</button>
        `;
    productosContainer.appendChild(div);
  });
}

// Función global para agregar al carrito (necesaria para producto.js)
function agregarAlCarrito(producto) {
  console.log("Producto agregado al carrito:", producto);
  // Aquí puedes implementar la lógica del carrito
}

// Actualizar carrito
function actualizarCarrito() {
  const carritoContainer = document.getElementById("contenido-carrito");
  carritoContainer.innerHTML = "";
  carrito.forEach((producto, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
    carritoContainer.appendChild(div);
  });
  document.getElementById("cantidad-carrito").textContent = carrito.length;
}

// Eliminar del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Mostrar/ocultar carrito
document.getElementById("carrito-btn").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("oculto");
});

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

// Slider de imágenes
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const dotsContainer = document.querySelector(".slider-dots");

let currentSlide = 0;
let slideInterval;

// Crear puntos de navegación
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;

  // Actualizar puntos activos
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(currentSlide);
}

// Event listeners para los botones
prevBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
  startAutoSlide();
});

nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
  startAutoSlide();
});

// Auto-slide cada 5 segundos
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

// Iniciar auto-slide
startAutoSlide();
