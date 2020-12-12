produccion_comunidad_1 = [
  {
    id: 1,
    nombre: "Producto A",
    imagen: "img/sobres.png",
  },
  {
    id: 2,
    nombre: "Producto B",
    imagen: "img/portacelular_con_tira.png",
  },
  {
    id: 3,
    nombre: "Producto C",
    imagen: "img/cartera_punto_antiguo.png",
  },
];

produccion_actual_comunidad_1 = [
  {
    id: 1,
    nombre: "Producto A",
    imagen: "img/sobres.png",
  },
  {
    id: 2,
    nombre: "Producto B",
    imagen: "img/portacelular_con_tira.png",
  },
];

const comunidades = [
  {
    id: 1,
    nombre: "Grupo La Mocha",
    delegada: "Teodora",
    produccion: produccion_comunidad_1,
    produccionActual: produccion_actual_comunidad_1,
    imagen: "imagen",
    teléfono: 12345678,
  },

  {
    id: 2,
    nombre: "Grupo 2",
    delegada: "Marí",
    produccion: produccion_comunidad_1,
    produccionActual: produccion_actual_comunidad_1,
    imagen: "imagen",
    teléfono: 12987678,
  },

  {
    id: 3,
    nombre: "Grupo 3",
    delegada: "Delegada3",
    produccion: produccion_comunidad_1,
    produccionActual: produccion_actual_comunidad_1,
    imagen: "imagen",
    teléfono: 67845678,
  },
  {
    id: 4,
    nombre: "Grupo 4",
    delegada: "Delegada4",
    produccion: "Producto D",
    entrega: '"2008-01-01T12:00:00Z"',
    imagen: "imagen",
    teléfono: 12345999,
  },

  {
    id: 5,
    nombre: "Grupo 5",
    delegada: "Delegada5",
    produccion: produccion_comunidad_1,
    produccionActual: produccion_actual_comunidad_1,
    imagen: "imagen",
    teléfono: 12311178,
  },

  {
    id: 6,
    nombre: "Grupo 6",
    delegada: "Delegada6",
    produccion: produccion_comunidad_1,
    produccionActual: produccion_actual_comunidad_1,
    imagen: "imagen",
    teléfono: 12398478,
  },
];

const container = document.getElementById("container");
const url = "endopoint";

let getData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dibujarGrilla(data);
    })
    .catch((error) => {
      console.log(error);
      dibujarGrilla(comunidades);
    });
};

let dibujarGrilla = (comunidades) => {
  let contenido = "";

  for (let i = 0; i < comunidades.length; i++) {
    contenido = ` <div class = "grupo" id= "grupo${comunidades[i].id}"> 
                       <div class="title">
                       
                       <h4> ${comunidades[i].nombre}</h4><h4>Delegada: ${
      comunidades[i].delegada
    }</h4>
                       </div>
                       <div class="texto_grupo">
                       
                       <div class="text_body">
                       <h5> En producción: ${nombreProductos(
                         comunidades[i].produccionActual
                       )}</h5> 
                       </div>
                       
                       <div class="boton_grupo">
                       <button class ="button">VER DETALLE</button>
                       </div>
                       </div>`;

    container.innerHTML += contenido;
  }

  const button = document.getElementsByClassName("button");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
      mostrarComunidad(comunidades[i].id);
    });
  }
};

let nombreProductos = (productosActuales) => {
  if (productosActuales) {
    var productos = "";
    for (let index = 0; index < productosActuales.length; index++) {
      productos += productosActuales[index].nombre + " ";
    }
    return productos;
  }

  return "Sin Producción";
};

let mostrarComunidad = (comunidadId) => {
  let comunidad = getComunidad(comunidadId);

  las_comunidades_div = document.getElementById("first-section");
  las_comunidades_div.innerHTML = `<div class="comunidad_individual_title"><p>${comunidad.nombre}</p></div>
                                     <div class="boton_grupo">
                                     <button class="boton_volver">VOLVER</button>
                                    </div>`;
  container.innerHTML = "";
  container.className = "container_dos";
  contenido = `<div class = "comunidad_individual"> 
                        <div class="title">
                        
                        <h4>Delegada: ${comunidad.delegada}</h4>
                        </div>
                        <div class="texto_grupo_comunidad">
                        
                        <div class="text_body_comunidad">
                        <h5> Teléfono: ${comunidad.teléfono}</h5>
                        </div>
                        
                        <div class="boton_grupo">
                        <button class ="boton_mensaje_sin_pedido">Enviar mensaje</button>
                        </div>
                        </div>
                        <div class="otra_info">
                        <h5> Otra información: </h5>
                        </div>
                        </div>
                        <div class="separator"> </div>
                        <div id="en_producción">
                        </div>
                        <div class="botones_actualizar">
                        <button class="actualizar_produccion">ACTUALIZAR PRODUCCIÓN</button>                        
                        <button class="hacer_pedido">HACER PEDIDO</button>
                </div>`;

  container.innerHTML += contenido;

  dibujarProduccionActual(comunidad.produccionActual);

  const button_actualizar = document.getElementsByClassName(
    "actualizar_produccion"
  );

  button_actualizar[0].addEventListener("click", () =>
    mostrarProduccion(comunidad)
  );

  const button_volver = document.getElementsByClassName("boton_volver");
  button_volver[0].addEventListener("click", () => {
    container.innerHTML = " ";
    getData();
  });
};

let getComunidad = (comunidadId) => {
  return comunidades[0];
};

let dibujarProduccionActual = (produccionActual) => {
  let mostrar_produccion = document.getElementById("en_producción");

  let contenido_produccion = "";
  for (let i = 0; i < produccionActual.length; i++) {
    contenido_produccion = `
                                    <div class="card">
                                        <div>
                                        <img src="${produccionActual[i].imagen}"/>
                                        </div>
                                        <div class="card-text">
                                        <p>${produccionActual[i].nombre}</p>
                                        </div>
                                    </div>`;

    mostrar_produccion.innerHTML += contenido_produccion;
  }
};

let mostrarProduccion = (comunidad) => {
  las_comunidades_div = document.getElementsByClassName(
    "comunidad_individual_title"
  );
  boton_volver = document.getElementsByClassName("boton_grupo");

  boton_volver[0].innerHTML = "";
  las_comunidades_div[0].innerHTML = "";

  contenido_title = `<div class="produccion_title"><p>ACTUALIZAR PRODUCCIÓN DE ${comunidad.nombre.toUpperCase()}</p></div>`;
  las_comunidades_div[0].innerHTML += contenido_title;

  container.innerHTML = "";
  container.className = "container_tres";
  contenido = ` <div class = "vista_produccion"> 
                  <div class="title">                        
                  <h4>¿Qué productos necesitás?</h4>
                  </div>
                  <div class="productos_disponibles">
                  </div>
                  
                  <div id ="form"  class="title">                        
                  <form method="POST" action="">
                  <h4>¿Querés dejar una aclaración?</h4>
                  <form method="POST" action="">
                  <textarea id="comentario" name="comentario" rows="10" cols="30" placeholder="Necesitamos..."></textarea>
                  <div class="input">
                  <input type="checkbox" class ="checkbox" checked id="mensajeWhatsapp" >
                      <span> Enviar SMS/WhatsApp</span>
                  </div>
                  </form>
                  <div class="botones">
                      <button class="confirmar button" id="botonConfirmar" >CONFIRMAR</button>
                      <button class="cancelar button">CANCELAR</button>
                  </div>
                  </div>
                  </div>`;

  container.innerHTML += contenido;

  mostrar_productos(comunidad.produccion, comunidad.produccionActual);

  const botonConfirmar = document.getElementById("botonConfirmar");
  botonConfirmar.addEventListener("click", () => obtenerInformacion());
};

let mostrar_productos = (produccion, produccionActual) => {
  productos_container = document.getElementsByClassName(
    "productos_disponibles"
  );
  productos_container[0].innerHTML = "";

  for (let i = 0; i < produccion.length; i++) {
    contenido = `<div class="card_producto">
                    <div class="casilla"> 
                    <form method="GET" action="">
                        <input class ="checkbox checkbox-producto" type="checkbox" id="producto${produccion[i].id}" value="${produccion_comunidad_1[i].id}" checked>
                    </form>
                    </div>
                    <div class="imagen">
                        <img src="${produccion[i].imagen}"/>
                        <p>${produccion[i].nombre}</p>
                    </div>
                    </div>`;

    productos_container[0].innerHTML += contenido;
    chequearId(produccion[i].id, produccionActual);
  }
};

let chequearId = (id, produccionActual) => {
  let isProducing = false;
  for (let i = 0; i < produccionActual.length; i++) {
    if (id == produccionActual[i].id) {
      isProducing = true;
      break;
    }
  }

  if (!isProducing) {
    document.getElementById("producto" + id).removeAttribute("checked");
  }
};

let obtenerInformacion = () => {
  let produccion = [];
  let comentario = document.getElementById("comentario"); // buscar el mensaje
  let activarMensajes = document.getElementById("mensajeWhatsapp").checked;
  let arrayProductos = document.getElementsByClassName("checkbox-producto");

  for (let i = 0; i < arrayProductos.length; i++) {
    if (arrayProductos[i].checked) {
      produccion.push(arrayProductos[i].value);
    }
  }

  guardarActualizacion(produccion, comentario, activarMensajes);
};

let guardarActualizacion = (a, b, c) => {
  console.log(a, b, c);
};

getData();
