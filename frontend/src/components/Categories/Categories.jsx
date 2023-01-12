import React from 'react'
import CategoriesItem from './CategoriesItem'
import fashion1 from '../../assets/fashion1.jpg';
import fashion2 from '../../assets/fashion2.jpg';
import fashion3 from '../../assets/fashion3.jpg';
const data=[
    {
        id:1,
        img:`${fashion1}`,
        title:'women'
    }
    ,{
        id:2,
        img:`${fashion2}`,
        title:'men'
    }
    ,{
        id:3,
        img:`${fashion3}`,
        title:'T-Shirt'
    }

]
const Categories = () => {
  return (
    <div className='row'>
        {data.map(item=><CategoriesItem item={item} key={item.id}/>)}
    </div>
  )
}

export default Categories