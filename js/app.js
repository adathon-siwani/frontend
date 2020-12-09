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

`

    container.innerHTML += contenido
    ver_produccion()
    
                       
}

let ver_produccion = () =>{
console.log("se ve producción")
let mostrar_produccion = document.getElementById("en_producción")
let contenido_produccion = ''
    for (let i = 0; i < produccion_comunidad_1.length; i++){
         contenido_produccion = `
            <div class="card">
            <img src="${produccion_comunidad_1[i].imagen}"/>
            <p>${produccion_comunidad_1[i].nombre}</p>
            <p>Color: ${produccion_comunidad_1[i].color}</p>
            </div>

        `
        mostrar_produccion.innerHTML += contenido_produccion
    }}

const comunidades =
        [
            {
            id:1,
            nombre: "Grupo La Mocha",
            delegada: "Delegada1",
            produccion: "Producto A",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen: "imagen",
            teléfono: 12345678
            },
        
            {
            id:2,
            nombre: "Grupo 2",
            delegada: "Delegada2",
            produccion: "Producto B",
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
        imagen: "img/sobres.png"
    
    },
    { 
        nombre: 'Producto B',
        color: 'naranja',
        tejido: 'punto antiguo',
        imagen: "img/portacelular_con_tira.png"
    
    },
    { 
        nombre: 'Producto C',
        color: 'marrón',
        tejido: 'punto antiguo',
        imagen: "img/cartera_punto_antiguo.png"
    
    },
]
getData();

