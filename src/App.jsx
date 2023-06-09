import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Modal from "./components/Modal";
import loadingGif from "./assets/img/loadingHamburguer.gif"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [amountCart, setAmountCart] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const filterList = async () => {
    try {
      const response = await axios.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
      const responseName = await axios.get(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products?name_like=${inputSearch}`);
      const responseCategory = await axios.get(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products?category_like=${inputSearch}`);
      const filteredProducts = [...responseName.data, ...responseCategory.data];
      if (inputSearch !== '') {
        setProducts(filteredProducts);
      } else {
        setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if ( existingProduct ) {
      const cartUpdated = cart.map((item) => {
        if (item.id === product.id) {
          return {...item, amount: item.amount + 1};
        }
        return item;
      })
      setCart(cartUpdated);
    } else {
      const cartUpdated = {...product, amount: 1};
      setCart([...cart, cartUpdated]);
    }
  }

  const removeToCart = (product) => {
    const cartUpdate = cart.filter(item => item.id !== product.id);
    setCart(cartUpdate);
  }

  const addItem = (product) => {
    const itemUpdate = cart.map((item) => {
      if (item.id === product.id) {
        return {... item, amount: item.amount + 1};
      }
      return item;
    })

    setCart(itemUpdate);
  }

  const subtractItem = (product) => {
    const itemUpdate = cart.map((item) => {
      if (item.id === product.id) {
        const newAmount = item.amount - 1
        return {... item, amount: newAmount};
      }
      return item;
    })
    const cartUpdate = itemUpdate.filter((item) => item.amount >0);
    setCart(cartUpdate);
  }

  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  },[])

  useEffect (()=>{
    const checkAmountCart = () => {
      const amount = cart.reduce((total,item) => total + item.amount,0);
      setAmountCart(amount);
    }

    const totalValueCart = () => {
      const value = cart.reduce((total,item) => total + (item.price * item.amount),0);
      setCartValue(value);
    }

    checkAmountCart();
    totalValueCart();
  },[cart])

  return (
    <>
    <GlobalStyle />
    { isLoading ?
      <div className="loadingContainer">
          <img src= {loadingGif} alt="" />
      </div> :

        <>
        <Header setIsOpen={setIsOpen} amountCart={amountCart} filterList={filterList} inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <Main>
            {products.map((product => (
              <Card key={product.id} product={product} addToCart={addToCart}/>
              )))}
        </Main>
        {isOpen ? <Modal setIsOpen={setIsOpen} cart={cart} setCart={setCart} removeToCart={removeToCart} cartValue={cartValue} addItem={addItem} subtractItem={subtractItem} /> : null}
        </>
    }
    </>
  )
}

export default App
