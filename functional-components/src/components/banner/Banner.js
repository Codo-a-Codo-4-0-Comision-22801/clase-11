import React from "react";
import './Banner.css';

// Declaration exports
export let msg = "Hello World!";
//Esto es un componente de React
export function Banner (props) {
    return <div className="banner" > { props.msg }</div>
}

//Esto es sólo una función
//Default exports
export default function  HelloWorld() {
    alert(msg);
}