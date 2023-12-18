import React, { useState } from 'react'
import laptopData from './dummyData'

const BrowseProducts = () => {

    const [productList, setProductList] = useState(laptopData);

  return (
    <div>
        <div className='container'>
            <div className='row gy-4'>
            {productList.map((laptop)=>{
                return (<div className='col-md-3'>
                    <div className='card'>
                        <img src={laptop.image} alt="" />
                        <div className='card-body'>
                            <h4>{laptop.model}</h4>
                        </div>
                    </div>
            </div>)
            })}
            </div>
        </div>
    </div>
  )
}

export default BrowseProducts