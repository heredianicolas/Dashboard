import React from "react";

function Demo({title}){
    // console.log("props:",props)
    // console.log("title:", props.title)

    const programmers = [{nombre:"Jose", edad:"18"},{nombre:"Luciano", edad:"15"},{nombre:"Mica", edad:"21"}];
    
    /*
    los qeu si vamos a usar
    map
    filter
    find
    reduce
    if ternario
    los que no se va a usar(porque no devulven nada)
    forEach
    if else
    */
    return(
        <div>
            <h1>
                {title}
            </h1>
            <ul>
                {
                    programmers.map(({edad},{nombre},index)=>(
                        <li key={index}>
                        nombre:{edad}
                            edad:{nombre}
                        </li>
                        )
                    )
                }
                
            </ul>
        </div>
    )
}

export default Demo;