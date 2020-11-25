import React from 'react'
import Jour from'./jour.js'


const MenuSemaine = (props) => {
    const title = props.title

    return(
    <>
         <h1>{title}</h1>
         <h2>du 23 au 28 novembre</h2>
         <div className="listejour">
            <Jour name="Lundi"/>
            <Jour name="Mardi"/>
            <Jour name="Mercredi"/>
            <Jour name="Jeudi"/>
            <Jour name="Vendredi"/>
            <Jour name="Samedi"/>
        </div>   
    </>
    )
}

export default MenuSemaine