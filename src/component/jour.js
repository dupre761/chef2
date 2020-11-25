import React from 'react'
import Aliment from './aliment.js'

const Jour = (props) => {
   
    const name = props.name
   
    return(
    <>
        <h1>{name}</h1>
        <div className="liste plat">
            <Aliment menu="Entrée"/>
            <Aliment menu="Plat"/>
            <Aliment menu="Dessert"/>
        </div>
    </>
    )
}
export default Jour;