const products = [
  {
    id: 1,
    nombre: "Torta de Fresas",
    categoria: "Tortas Finas",
    precio: 72.00,
    stock: 4,
    descripcion: "Suave bizcochuelo de vainilla bañado en almíbar, relleno con abundante crema chantilly y fresas frescas.",
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
    destacado: true
  },
  {
    id: 2,
    nombre: "Torta Velvet Imperial",
    categoria: "Tortas Finas",
    precio: 85.00,
    stock: 3,
    descripcion: "Bizcocho aterciopelado de cacao suave con capas de frosting de queso crema Philadelphia y toque de vainilla.",
    imagen: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500",
    destacado: true
  },
  {
    id: 3,
    nombre: "Torta de Chocolate",
    categoria: "Tortas Finas",
    precio: 78.00,
    stock: 0,
    descripcion: "Combinación de café gourmet, crema moka artesanal y un goteo irresistible de caramelo toffee salado.",
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    destacado: false
  },
  {
    id: 4,
    nombre: "Torta de Lucuma",
    categoria: "Tortas Finas",
    precio: 80.00,
    stock: 5,
    descripcion: "Suave bizcochuelo relleno con mousse de pura pulpa de lúcuma y capas de dulce de leche artesanal.",
    imagen: "https://capriccioperu.com/wp-content/uploads/2020/04/Delicia_Lucuma_1.jpg",
    destacado: true
  },
  {
    id: 5,
    nombre: "Torta Oreo",
    categoria: "Tortas Finas",
    precio: 72.00,
    stock: 4,
    descripcion: "Capas de bizcocho húmedo de chocolate con crema especial de galletas Óreo trituradas y ganache.",
    imagen: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=500",
    destacado: false
  },
  {
    id: 6,
    nombre: "Torta de Maracuya",
    categoria: "Tortas Finas",
    precio: 75.00,
    stock: 2,
    descripcion: "Bizcocho liviano con mousse aireado de maracuyá amazónico y espejo brillante de reducción agridulce.",
    imagen: "https://jameaperu.com/assets/images/torta-de-maracuya_800x534.webp",
    destacado: false
  },
  {
    id: 7,
    nombre: "Pai de Frutos Rojos",
    categoria: "Paiss & Tartas",
    precio: 70.00,
    stock: 3,
    descripcion: "Suave base de galleta con crema de queso horneada y coulis artesanal de frambuesas.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
    destacado: false
  },
  {
    id: 8,
    nombre: "Cupcakes",
    categoria: "Cupcakes",
    precio: 38.00,
    stock: 8,
    descripcion: "Esponjosos cupcakes de terciopelo rojo coronados con frosting de queso crema suave.",
    imagen: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500",
    destacado: false
  },
  {
    id: 9,
    nombre: "Pai de Manzana",
    categoria: "Paiss & Tartas",
    precio: 58.00,
    stock: 3,
    descripcion: "Masa hojaldrada rellena de manzanas caramelizadas con canela y nuez moscada.",
    imagen: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=500",
    destacado: false
  },
  {
    id: 10,
    nombre: "Crema Volteada",
    categoria: "Postres Fríos",
    precio: 48.00,
    stock: 4,
    descripcion: "Textura suave, sedosa y fresca, bañada en abundante caramelo dorado con toque de vainilla.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVIUfGAi9ruGXvKqYjE3nb5YjJHPNclJNgbPZV0vOzg&s=10",
    destacado: false
  },
  {
    id: 11,
    nombre: "Mousse de Chocolate",
    categoria: "Postres Fríos",
    precio: 42.00,
    stock: 5,
    descripcion: "Espuma aireada y ligera elaborada con chocolate negro al 70% de cacao y delicadas virutas crocantes.",
    imagen: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500",
    destacado: false
  },
  {
    id: 12,
    nombre: "Tiramisu",
    categoria: "Postres Fríos",
    precio: 62.00,
    stock: 2,
    descripcion: "Capas de bizcotelas artesanales bañadas en café espresso, suave queso mascarpone y cacao puro en polvo.",
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
    destacado: false
  }
];

