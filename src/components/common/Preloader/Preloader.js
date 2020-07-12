import React from "react";
import c from "./Preloader.module.css"

let Preloader = () => {
    return (
        <div className={c.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default Preloader;