const container = document.getElementById("container");

let comunidadID = 1;
let contenido = ''

function getData (){
    for (let i =0; i<comunidades.length; i++){
        var fechaActual = comunidades[i].entrega.slice(1,11);
        comunidadID = comunidades[i].id;
        contenido = 
                      ` <div class = "grupo" id= "grupo${comunidades[i].id}"> 
                        <div class="title">
                        
                        <h4> ${comunidades[i].nombre}</h4><h4>Delegada: ${comunidades[i].delegada}</h4>
                        </div>
                        <div class="texto_grupo">
                        
                        <div class="text_body">
                        <h5> En producción: ${comunidades[i].produccion}</h5> 
                        <h5 class = "fechas"> Próxima Entrega: ${fechaActual}</h5>
                        </div>
                        
                        <div class="boton_grupo">
                        <button class ="button">VER DETALLE</button>
                        </div>
                        </div>`
                      container.innerHTML += contenido;
                    }

                    const button = document.getElementsByClassName("button"); 
                    for (let i=0; i < button.length; i++) {
                    button[i].addEventListener("click", () => {mostrarComunidad(comunidades[i])})
    }                              
};

     
      
let mostrarComunidad = (comunidadID) => {
    console.log("Este es el grupo: " + comunidadID.id)
    las_comunidades_div = document.getElementById("first-section");
    las_comunidades_div.innerHTML = `<div class="comunidad_individual_title"><p>${comunidadID.nombre}</p></div>
                                     <div class="boton_grupo">
                                     <button class="boton_volver">VOLVER</button>
                                    </div>`;
    container.innerHTML = ''
    container.className = "container_dos"
    contenido =
                      `<div class = "comunidad_individual"> 
                        <div class="title">
                        
                        <h4>Delegada: ${comunidadID.delegada}</h4>
                        </div>
                        <div class="texto_grupo_comunidad">
                        
                        <div class="text_body_comunidad">
                        <h5> Teléfono: ${comunidadID.teléfono}</h5>
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
                        </div>
                        `

    container.innerHTML += contenido
    ver_produccion()
    
    const button_actualizar = document.getElementsByClassName("actualizar_produccion"); 
        button_actualizar[0].addEventListener("click", () => {
        mostrarProduccion(comunidadID)
        })                  
}


let ver_produccion = () =>{
console.log("se ve producción")
let mostrar_produccion = document.getElementById("en_producción")
let contenido_produccion = ''
    for (let i = 0; i < produccion_comunidad_1.length; i++){
         contenido_produccion = `
            <div class="card">
                <div>
                <img src="${produccion_comunidad_1[i].imagen}"/>
                </div>
                <div class="card-text">
                <p>${produccion_comunidad_1[i].nombre}</p>
                <p>Color: ${produccion_comunidad_1[i].color}</p>
                <p>Entrega: ${produccion_comunidad_1[i].entrega}</p>
                </div>
            </div>
        `
        mostrar_produccion.innerHTML += contenido_produccion
    }}

let mostrarProduccion = (comunidadID) => {
    console.log("Producto para elegir")
    las_comunidades_div = document.getElementsByClassName("comunidad_individual_title");
    boton_volver = document.getElementsByClassName("boton_grupo");
    boton_volver[0].innerHTML = '';
    las_comunidades_div[0].innerHTML = '';
    contenido_title = `
                        <div class="produccion_title"><p>ACTUALIZAR PRODUCCIÓN DE ${comunidadID.nombre.toUpperCase()}</p></div>
                        `;
    las_comunidades_div[0].innerHTML += contenido_title
    container.innerHTML = ''
    container.className = "container_tres"
    contenido =
                      ` <div class = "vista_produccion"> 
                        <div class="title">                        
                        <h4>¿Qué productos necesitás?</h4>
                        </div>
                        <div class="productos_disponibles">
                        </div>
                        <div id ="form"  class="title">                        
                        <h4>¿Querés dejar una aclaración?</h4>
                        <form method="POST" action="">
                        <textarea id="comentario" name="comentario" rows="10" cols="30" placeholder="Necesitamos..."></textarea>
                        <div class="input">
                        <input type="checkbox" class ="checkbox">
                            <span> Enviar SMS/WhatsApp</span>
                        </div>
                        </form>
                        <div class="botones">
                        <button class="confirmar button">CONFIRMAR</button>
                        <button class="cancelar button">CANCELAR</button>
                        </div>
                        </div>
                        </div>
                        `
    container.innerHTML += contenido;
    mostrar_productos();

}
// En la función mostrar_productos (abajo), habría que definir si se muestran TODOS los productos que tiene Niwok, o si se pueden filtrar o si vienen filtrados desde el back. Ver en Discord: https://discord.com/channels/669278924231933968/783341199968043058/787023046891667462

let mostrar_productos = () => {
    productos_container = document.getElementsByClassName("productos_disponibles");
    productos_container[0].innerHTML = '';
    for (let i = 0; i < produccion_comunidad_1.length; i++) {
        contenido = `
                    <div class="card_producto">
                    <div class="casilla"> 
                    <form method="GET" action="">
                        <input class ="checkbox" type="checkbox" id="producto${i}" value="producto${i}" >
                    </form>
                    </div>
                    <div class="imagen">
                        <img src="${produccion_comunidad_1[i].imagen}"/>
                        <p>${produccion_comunidad_1[i].nombre}</p>
                    </div>
                    </div>

                   `;
        productos_container[0].innerHTML += contenido;
    }
}


const comunidades =
        [
            {
            id:1,
            nombre: "Grupo La Mocha",
            delegada: "Teodora",
            produccion: "Sobres",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen: "imagen",
            teléfono: 12345678
            },
        
            {
            id:2,
            nombre: "Grupo 2",
            delegada: "Marí",
            produccion: "Carteras",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen",
            teléfono: 12987678
            },
        
            {
            id:3,
            nombre: "Grupo 3",
            delegada: "Delegada3",
            produccion: "Producto C",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen",
            teléfono: 67845678
            },
            {
            id:4,
            nombre: "Grupo 4",
            delegada: "Delegada4",
            produccion: "Producto D",
            entrega: "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen",
            teléfono: 12345999
            },
            
            {
            id:5,
            nombre: "Grupo 5",
            delegada: "Delegada5",
            produccion: "Producto E",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen",
            teléfono: 12311178
            },
                
            {id:6,
            nombre: "Grupo 6",
            delegada: "Delegada6",
            produccion: "Producto F",
            entrega: "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen",
            teléfono: 12398478
            }
        ]    
        
produccion_comunidad_1 = [
    { 
        nombre: 'Producto A',
        color: 'cobre',
        tejido: 'punto antiguo',
        imagen: "img/sobres.png",
        entrega: "fecha1"
    
    },
    { 
        nombre: 'Producto B',
        color: 'naranja',
        tejido: 'punto antiguo',
        imagen: "img/portacelular_con_tira.png",
        entrega: "fecha2"
    
    },
    { 
        nombre: 'Producto C',
        color: 'marrón',
        tejido: 'punto antiguo',
        imagen: "img/cartera_punto_antiguo.png",
        entrega: "fecha3"
    
    },
]
getData();

