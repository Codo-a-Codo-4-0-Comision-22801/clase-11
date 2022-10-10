import React from "react";


export function Sound(props){
    return (
      <>
      <audio controls autoPlay loop muted>
        <source src={ props.src } type={props.type}></source>
      </audio>
    </>
    )
}
