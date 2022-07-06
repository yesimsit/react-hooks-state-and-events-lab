import React, {useState} from "react";

function Item({ name, category }) {
  const [isInTheCart,setIsInTheCart]=useState(false);

  function handleCart(){
    setIsInTheCart((isInTheCart)=> !isInTheCart )
  }
  return (
    <li className={isInTheCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInTheCart ?  "remove" : "add"} onClick={handleCart}>
        {isInTheCart ? "remove" : "add"}Cart
        </button>
    </li>
  );
}

export default Item;
