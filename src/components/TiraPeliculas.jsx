import React from "react";
import Pelicula from "./Peliculas";

const estilodiv = {
    width: "100%",
}

const estiloh2 ={
    textAlign: "center",
    backgroundColor: "gray",
    width: "100%",
    color: "white",
    fontWeigh:"800",
    padding: "10px 0px"
}


function TiraPeliculas (){
    return(
        <div style= {estilodiv}>
            <h2 style= {estiloh2}>Listado de productos</h2>
            <Pelicula precio="80000" titulo="zapatillas adidas" descripcion="suela de material soft. perfecto para deportista de elite"/>
            <Pelicula precio="53000" titulo="canilleras" descripcion="ccon resistencia a altos impactos y amortiguacion"/>
            <Pelicula precio="7200" titulo="venda" descripcion="Venda para una pronta recuperacion"/>
            <Pelicula precio="4500" titulo="pelota ping pong" descripcion="Pelota sensei de 3 estreallas indeal para principiantes"/>
            <Pelicula precio="95000" titulo="Remera deportiva" descripcion="Ajutes perfecto y ventilacion de alta tecnologia"/>
        </div>
    );
}

export default TiraPeliculas