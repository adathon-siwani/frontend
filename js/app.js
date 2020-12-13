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
let contenido = "";
let nav_change = document.getElementById("nav");
const url = "https://adathon-siwani.herokuapp.com/api";

let getData = () => {
  fetch(url+"/comunidades")
    .then((res) => res.json())
    .then((data) => {
      dibujarGrilla(data);
    })
    .catch((error) => {
      console.log(error);
      dibujarGrilla(comunidades);
    });
};

let getComunidad = (comunidadId) => {
  fetch(url+`/comunidad/${comunidadId}`)
  .then((res) => res.json())
  .then((data) => {
      mostrarComunidad(data);
  })
  .catch((error) => {
    console.log(error);
    mostrarComunidad(comunidades[0])
  });

};

let dibujarGrilla = (comunidades) => {
  for (let i = 0; i < comunidades.length; i++) {
    contenido = ` <div class = "grupo" id= "grupo${comunidades[i].id}"> 
                    <div class="title">                       
                      <h4> Grupo ${comunidades[i].id}</h4><h4>Delegada: ${comunidades[i].nombre}</h4>
                    </div>
                    <div class="texto_grupo">                       
                      <div class="text_body">
                      <h5> En producción: ${nombreProductos(comunidades[i].produccionActual[i])}</h5> 
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
      getComunidad(comunidades[i].id);
    });
  };
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

let mostrarComunidad = (comunidad) => {
  nav_change.innerHTML = `
        <div id="detalle_page_2">
          <div class="icon_boton">
            <div class="boton_grupo">
              <i class="fas fa-chevron-left"></i>
              <button class="boton_volver">Inicio</button> 
            </div>
          </div>
          <div id="page_name">
            <h1>Detalle del grupo</h1>
          </div>
        </div>                        
    `;
  las_comunidades_div = document.getElementById("first-section");
  las_comunidades_div.innerHTML = `
    <div class="comunidad_individual_title">
      <p>${comunidad?.nombre}</p>
    </div>
      `;
  container.innerHTML = "";
  container.className = "container_dos";
  contenido = `
    <div class = "comunidad_individual"> 
      <div class="title">                        
        <h4>Delegada: ${comunidad?.delegada}</h4>
      </div>
      <div class="texto_grupo_comunidad">
        <div class="text_body_comunidad">
          <h5> Teléfono: ${comunidad?.teléfono}</h5>
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
    </div>
    `;

  container.innerHTML += contenido;

  dibujarProduccionActual(comunidad.produccionActual);

  const button_actualizar = document.getElementsByClassName(
    "actualizar_produccion"
  );

  button_actualizar[0].addEventListener("click", () =>
    mostrarProduccion(comunidad)
  );

  const nav_inicio = document.getElementById("detalle_page_2");
  const button_volver = document.getElementsByClassName("boton_volver");
  button_volver[0].addEventListener("click", () => {
    nav_inicio.innerHTML = ''
      nav_inicio.innerHTML = `
        <div id="img"><img src="img/LOGO SIWANI MARRON.jpg" alt="Logo"> </div>
        <div><h1>Chiwoye?</h1></div>
        </div> 
            `;
      container.innerHTML = " "
    getData();
  });
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
  nav_actualizar_produccion = document.getElementById("nav");
  nav_actualizar_produccion.innerHTML = '';
  nav_actualizar_produccion.innerHTML =  `
    <div id="detalle_page_3">
      <div class="icon_boton_3">
        <div class="boton_grupo_3">
          <i class="fas fa-chevron-left"></i>
          <button class="boton_volver">Inicio</button> 
        </div>
      </div>
      <div id="page_name">
        <h1>Actualizar producción</h1>
      </div>
    </div>
    <div class="overlay">
    </div>           
    `;

  las_comunidades_div = document.getElementsByClassName(
    "comunidad_individual_title"
  );
  boton_volver = document.getElementsByClassName("boton_grupo");
  boton_volver[0].innerHTML = "";
  las_comunidades_div[0].innerHTML = "";

  contenido_title = `
    <div class="produccion_title">
      <p>${comunidad.nombre.toUpperCase()}</p>
    </div>
  `;
  las_comunidades_div[0].innerHTML += contenido_title;

  container.innerHTML = "";
  container.className = "container_tres";
  contenido = ` 
    <div class = "vista_produccion"> 
      <div class="title">                        
        <h4>¿Qué productos necesitás?</h4>
      </div>
      <div class="productos_disponibles">
      </div>
      <div id ="form"  class="title">                        
        <h4>¿Querés dejar una aclaración?</h4>
            <form method="POST" action="">
              <textarea id="comentario" name="comentario" rows="10" cols="30" placeholder="Necesitamos..." ></textarea>
              <div class="input">
                <input type="checkbox" class ="checkbox" checked id="mensajeWhatsapp" >
                  <span> Enviar SMS/WhatsApp</span>
              </div>
            </form>
            <div class="botones">
              <button class="actualizar button" >ACTUALIZAR PRODUCCIÓN</button>
              <button class="cancelar button">Cancelar</button>
            </div>
            <div class="modal">
            </div>
      </div>
    </div>`;

  container.innerHTML += contenido;

  mostrar_productos(comunidad.produccion, comunidad.produccionActual);

  const button_cancelar = document.querySelector(".cancelar");
  button_cancelar.onclick = e => {
    container.innerHTML = " "
    getComunidad(comunidad.id);
  }

  const button_actualizar = document.getElementsByClassName("actualizar");
    
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay");
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal");

  button_actualizar[0].addEventListener("click", () => {
    modal.classList.add("modal");
    overlay.classList.add("overlay");
    modal.innerHTML = `
      <div class="modal_content">
        <p>Vas a actualizar la producción de <span>${comunidad.nombre}</span>.</p>
        <p>¿Querés avanzar?</p>
        <button class="confirmar" id="botonConfirmar">CONFIRMAR PRODUCCIÓN</button>
        <button class="cerrar">Cancelar</button>
      </div>
    `;

    const cerrarModal = document.querySelector(".cerrar");
    cerrarModal.onclick = e => {
      modal.classList.remove("modal");
      overlay.classList.remove("overlay");
      modal.innerHTML ="";
    };

    modal.onmouseleave = e => {
    modal.classList.remove("modal");
    overlay.classList.remove("overlay");
    modal.innerHTML ="";
    };

    const botonConfirmar = document.getElementById("botonConfirmar");
    botonConfirmar.addEventListener("click", () => obtenerInformacion());
  })

  const nav_inicio = document.getElementById("detalle_page_3");
    const button_volver = document.getElementsByClassName("boton_volver");
    button_volver[0].addEventListener("click", () => {
      nav_inicio.innerHTML = ''
      nav_inicio.innerHTML = `
        <div id="img">
          <img src="img/LOGO SIWANI MARRON.jpg" alt="Logo"> 
        </div>
        <div>
          <h1>Chiwoye?</h1>
        </div> 
      `;
        container.innerHTML = " "
       getData();
    })


};  


let mostrar_productos = (produccion, produccionActual) => {
  productos_container = document.getElementsByClassName(
    "productos_disponibles"
  );
  productos_container[0].innerHTML = "";

  for (let i = 0; i < produccion.length; i++) {
    contenido = `
      <div class="card_producto">
        <div class="casilla"> 
          <form method="GET" action="">
            <input class ="checkbox checkbox-producto" type="checkbox" 
              id="producto${produccion[i].id}" value="${produccion_comunidad_1[i].id}" checked>
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
  let comentario = document.getElementById("comentario").value;
  let activarMensajes = document.getElementById("mensajeWhatsapp").checked;
  let arrayProductos = document.getElementsByClassName("checkbox-producto");

  for (let i = 0; i < arrayProductos.length; i++) {
    if (arrayProductos[i].checked) {
      produccion.push(arrayProductos[i].value);
    }
  }

  guardarActualizacion(produccion, comentario, activarMensajes);
};

let guardarActualizacion = (id, mensaje, activarMensaje) => {
  console.log(id, mensaje, activarMensaje);

   fetch(url, {
      method: "POST",
      body: JSON.stringify({
        productos: id,
        textoMensaje: mensaje,
        mensaje: activarMensaje
      }),
      headers: {"Content-type": "application/json"}
   })
   .then(response => response.json()) 
   .then(json => console.log(json))
   .catch(err => {
    console.log(err);
   })

};

getData();
