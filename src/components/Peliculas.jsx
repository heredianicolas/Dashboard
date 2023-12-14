import React from "react";

function Pelicula (props){
    let generos = ["accion","drama"];

    return(
        <div>
            <ul>
                <h2>
                {props.titulo}
            </h2>

            <p>ID del producto: {props.id_product}</p>
            <p>Precio: {props.precio}</p>
            <p>Descripcion: {props.descripcion}</p>
            </ul>
            
            {/* <ul>
                {
                    generos.map(genero => 
                        <li>
                            {genero}
                        </li>)
                }
            </ul> */}
        </div>
    )


}
export default Pelicula