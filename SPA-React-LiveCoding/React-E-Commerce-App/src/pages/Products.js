import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
import { MyContext } from "../ContextAPI/context";


export default function Products() {

  const {state,dispatch} = useContext(MyContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type:"products", payload:result })
      });
  }, []);


  return (
    <div>
      <h1>Projects Page</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.products.map((product) => {
          return (
            <div
              style={{
                width: "300px",
                boxShadow: "2px 1px 5px gray",
                borderRadius:"20px",
                margin: "10px",
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
              }}
            >
              <Link to={`/products/${product.id}`} state={product}>
                <img src={product.image} width="200" height="200" alt="" />{" "}
              </Link>
              <h3>{product.title}</h3>
              <h3>$ {product.price}</h3>
               <ReactStars
               count={5}
               value={product.rating.rate}
               activeColor="yellow"
               isHalf={true}
               size={24}
               edit={false}
               /> 
              <button onClick={()=>dispatch({type:"addtocart", payload:product})}>add to cart</button>

            </div>
          );
        })}
      </div>
    </div>
  );
}
