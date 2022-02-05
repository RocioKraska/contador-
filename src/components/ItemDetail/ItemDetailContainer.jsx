import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts';
import ItemDetail from './ItemDetail';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  
  const {idProducto} = useParams()
   console.log(idProducto)

 //  const idProducto = 1 ;
  useEffect(() => {
 
          getProducts()
    //.then(respuesta => return console.log(respuesta))
           .then(res => setProduct(res.find((prod) => prod.id ===  Number(idProducto))))    
                  .catch(err => console.log(err))
           }, [idProducto]); 

    console.log(product)
    

  return (
    <>
    <Card style={{ width: '18rem' }}>
  <Card.Header>{product.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>categoria: {product.categoria}</ListGroup.Item>
    <ListGroup.Item>cantidad: {product.stock}</ListGroup.Item>
    <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
  </ListGroup>
</Card>
<ItemDetail/>

    </>
  );
};

export default ItemDetailContainer;