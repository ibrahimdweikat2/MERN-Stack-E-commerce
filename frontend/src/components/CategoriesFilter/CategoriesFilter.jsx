import React from 'react'

const CategoriesFilter = () => {
  return (
    <div>
            <h1 style={{margin:'20px'}}>Dresses</h1>
            <div style={{margin:'20px'}} className='d-flex justify-content-between'>
                <div className='ms-2'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>Filter Products:</span>
                    <select className='mx-3 p-2'>
                        <option value='color' selected disabled>color</option>
                        <option value='white'>White</option>
                        <option value='black'>black</option>
                        <option value='red'>red</option>
                        <option value='blue'>blue</option>
                        <option value='yalow'>yalow</option>
                    </select>
                    <select className='p-2'>
                        <option selected value='size' disabled>Size</option>
                        <option value='XL'>XL</option>
                        <option value='L'>L</option>
                        <option value='M'>M</option>
                        <option value='S'>S</option>
                        <option value='XS'>XS</option>
                    </select>
                </div>
                <div>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>Sort:</span>
                    <select className='mx-3 p-2'>
                        <option value='news' selected>News</option>
                        <option value='dec'>Price(dec)</option>
                        <option value='asc'>Price(asc)</option>
                    </select>
                </div>
            </div>
        </div>
  )
}

export default CategoriesFilter