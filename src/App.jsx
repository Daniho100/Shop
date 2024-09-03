import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Product from './components/Product/Product'
import ProductDetails from './components/Product/ProductDetail'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import './App.css'

// import axios from 'axios'
// import {useState, useEffect} from 'react'

function App() {

  // const [country, setCountry] = useState([])
  // const [image, setImage] = useState([])
  
  // useEffect(()=>{
  //   axios.get('https://restcountries.com/v3.1/all')
  //   .then(res =>{
  //     const countries = res.data
  //     console.log(countries);
  //     const name = countries.map(val => val.name.official)
  //     const images = countries.map(val => val.flags.png)
  //     setCountry(name)
  //     setImage(images)

  //     console.log(images);
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  // }, [])


  return (
    <>
    
      {/* {country.map((name, index) =>(
        <li key={index}>{name}</li>
      ))}

      {image.map((name, index) =>(
        <img key={index} src={name} style={{width: '30px', height: '30px'}} />
      ))} */}

      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
      <Footer />
    </>
  )
}

export default App
