import { useCartContext } from "../../Context/prueba/CartContext";





const Cart = () => {

    const { cart, vaciarCarrito, sumaTotal,borrarItem } = useCartContext()
    console.log(cart)
  return <div>
    {cart.length !== 0 ?  <>
      { cart.map(i => <div> <li>  NOMBRE:    {i.item.name}   CANTIDAD:   {i.quantity} precio:   {i.price}</li>
         <button onClick={() => borrarItem(i.item.id)}>x</button> 
     </div>)}
     {`la suma es ${sumaTotal()}`}
    </>
    : 
    <h1>no hay producto</h1>
    }
      
        <button onClick={vaciarCarrito}  className='btn btn-outline-primary'  >Vaciar Carrito</button>
  </div>;
};

export default Cart;

