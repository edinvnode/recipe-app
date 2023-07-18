import React from 'react'
import style from "./recipe.module.css";

function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredients.map((ingredient,index) => (
                <li key={index} >{ingredient.text}</li>
            ))}
        </ol>
        <p>Calories: {calories} </p>
        <img src={image} className={style.image} alt="food imagee"></img>


    </div>
  )
}

export default Recipe