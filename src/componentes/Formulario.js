import React,{useState,Fragment} from "react";

const Formulario=()=>{

 

    return(
        <Fragment>
            <center>
            <label>Nombre</label><br/>
            <input type="text"></input><br/>
            <label>Edad</label><br/>
            <input type="number"></input>
            </center>
        </Fragment>
    );
}
export default Formulario;