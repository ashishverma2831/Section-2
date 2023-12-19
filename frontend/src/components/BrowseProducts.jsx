import React, { useState , useRef} from 'react'
import laptopData from './dummyData'
// import laptops from './dummyData';

const BrowseProducts = () => {

    const [productList, setProductList] = useState(laptopData);
    // const [productList, setProductList] = useState(laptops);

    const searchRef = useRef(null);
    const searchProduct = ()=>{
        const filteredData = laptopData.filter((laptop)=>{
            return laptop.brand.toLowerCase().includes(searchRef.current.value.toLowerCase());
            // return laptop.name.toLowerCase().includes(searchRef.current.value.toLowerCase());
        })
        setProductList(filteredData);
    }

    const priceRef = useRef(null);
    const filterPrice = (e)=>{
        const filteredData = laptopData.filter((laptop)=>{
            return laptop.price<=parseInt(e.target.value);
        })
        setProductList(filteredData);
    }



 //searchRef.current.value = e.target.value
  return (
    <div>
        <header className='bg-dark text-white'>
            <div className='container py-5'>
                <h1 className='text-center'>Search Laptop</h1>
                <div className='input-group'>
                    <input type='text' className='form-control' ref={searchRef}/>
                    <button className='btn btn-primary' onClick={searchProduct}>Search</button>
                </div>
            </div>
        </header>
        <div className='container-fluid'>
            <div className="row">
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <label>Max Price</label>
                            <input type='range' min={10000} max={200000} step={5000} className='form-range' onChange={filterPrice} />
                        </div>
                    </div>
                </div>
                <div className='col-md-9'>
                <div className='row gy-4'>
            {productList.map((laptop)=>{
                return (<div className='col-md-3'>
                    <div className='card'>
                        <img src={laptop.image} alt="" />
                        <div className='card-body'>
                            <h5>{laptop.brand}</h5>
                            <h4>{laptop.model}</h4>
                            <p>{laptop.rating} stars from reviews</p>
                            <button className='btn btn-primary btn-sm float-end'>Buy now</button>
                            <h4 className='fw-bold'>₹{laptop.price} </h4>
                        </div>
                    </div>

                    {/* <div className='card'>
                        <img src={laptop.img_link} alt="" />
                        <div className='card-body'>
                            <h5>{laptop.name}</h5>
                            <h4>{laptop.processor}</h4>
                            <p>{laptop.no_of_ratings} stars from reviews</p>
                            <button className='btn btn-primary btn-sm float-end'>Buy now</button>
                            <h4 className='fw-bold'>₹{laptop.price} </h4>
                        </div>
                    </div> */}

            </div>)
            })}
            </div>
                </div>
            </div>

            {/* <div className='row gy-4'>
            {productList.map((laptop)=>{
                return (<div className='col-md-3'>
                    <div className='card'>
                        <img src={laptop.image} alt="" />
                        <div className='card-body'>
                            <h5>{laptop.brand}</h5>
                            <h4>{laptop.model}</h4>
                            <p>{laptop.rating} stars from reviews</p>
                            <button className='btn btn-primary btn-sm float-end'>Buy now</button>
                            <h4 className='fw-bold'>₹{laptop.price} </h4>
                        </div>
                    </div>
            </div>)
            })}
            </div> */}
        </div>
    </div>
  )
}

export default BrowseProducts