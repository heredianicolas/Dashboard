import Demo from "./demo"

const estilo = {
    color : " white",
    boder: "1px solid",
    backgroundColor: "lightblue"
}

function DemoChildren (props){
    return(
        <div style= {estilo}>
            <h3>elemento padre con tenedor</h3>
            {props.children}
            <p>******************</p>
        </div>
    )
}

export default DemoChildren