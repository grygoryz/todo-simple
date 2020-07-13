import React from "react";
import c from "./Preloader.module.css"

let Preloader = () => {
    return (
        <div className={c.ring}>
            <div/>
            <div/>
            <div/>
        </div>
    )
};

export default Preloader;