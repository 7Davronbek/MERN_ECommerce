import React, { useReducer, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import data from '../data'
import axios from 'axios'
import logger from 'use-reducer-logger'

const reducer = (state, action) => {
    switch (action.type) {

        case "FETCH_REQUEST":
            return { ...state, loading: true }

        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false }

        case 'FETCH_FAIL':
            return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}

const Products = () => {
    // const [products, setProducts] = useState([])

    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        loading: true,
        error: '',
        products: []
    })

    useEffect(() => {
        const getProducts = async () => {
            dispatch({ type: "FETCH_REQUEST" })
            try {
                const res = await axios.get('/api/products')
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message })
            }
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
                        loading ? <div>Loading....</div>
                            :
                            error ? <div>{error}</div>
                                :
                                (
                                    products?.map((product, index) => (
                                        <div key={product.slug} className="col-lg-3 mb-4">
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
                                )
                    } 
                </div>
            </div>
        </div>
    )
}

export default Products