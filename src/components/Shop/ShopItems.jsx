import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import "./Shop.css";
import { getProductos } from "../../helpers/productosApi";
import { useEffect, useState } from "react";


function ShopItems() {
    const [articulos, setArticulos] = useState(null);
    useEffect(() => {
      getProductos().then((data) => {
        setArticulos(data.productos);
      });
    }, []);
  
  return (
    <div>
      
    </div>
  )
}

export default ShopItems
