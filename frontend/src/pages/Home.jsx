import React from 'react'
import Categories from '../components/Categories/Categories'
import Slider from '../components/Slider/Slider'
import Products from '../components/Products/Products'
const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home