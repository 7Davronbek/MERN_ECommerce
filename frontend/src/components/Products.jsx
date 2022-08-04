import React from 'react'
import data from '../data'

const Products = () => {
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
                                    <img className='w-100' src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
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