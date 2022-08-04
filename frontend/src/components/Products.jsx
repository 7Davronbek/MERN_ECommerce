import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            await axios.get('/api/products')
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getProducts()
    }, [])

    return (
        <div className='Products'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='mb-5'>Product List</h2>
                    </div>
                    {
                        data.products.map((product, index) => (
                            <div key={product.slug} className="col-lg-3">
                                <div className="cards">
                                    <Link to={`/product/${product.slug}`}>
                                        <div className="img">
                                            <img className='w-100' src={product.image} alt={product.name} />
                                        </div>
                                        <h3>{product.name}</h3>
                                        <p><strong>{product.price}</strong></p>
                                    </Link>
                                    <div className="btn btn-outline-dark d-block">Add To Cart</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products