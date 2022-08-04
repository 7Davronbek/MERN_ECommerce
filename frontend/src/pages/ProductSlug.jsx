import React from 'react'
import { useParams } from 'react-router-dom'

const ProductSlug = () => {
    const params = useParams()
    const {slug} = params
  return (
    <div className='ProductSlug'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>{slug}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSlug