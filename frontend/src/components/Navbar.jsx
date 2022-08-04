import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <Link to='/'><h1>Amazon</h1></Link>
                    </div>
                    <div className="col-lg-8 ms-auto">
                        <Link to='/products'>Products</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar