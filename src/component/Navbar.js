import React from 'react'
import { Link } from 'react-router-dom'


import '../style.css'

const Navbar = () => {
    return (
        <div className='navbar_container' >

            <nav  className="navbar navbar-expand-lg">
                <Link  className="navbar-brand" to="/"> <div className='the' >The</div> Siren</Link>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="navbar-toggler-icon"></span>
                </button>
                <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div  className="navbar-nav">
                        <Link  className="nav-item nav-link active" to="/home">Home</Link>
                        <Link  className="nav-item nav-link" to="/bollywood">Bollywood</Link>
                        <Link  className="nav-item nav-link" to="/technology">Technology</Link>
                        <Link  className="nav-item nav-link" to="/sport">Sport</Link>
                        <Link  className="nav-item nav-link" to="/health">Health</Link>
                        <Link  className="nav-item nav-link" to="/tourism">Tourism</Link>

                        
                    </div>
                </div>
            </nav>
            <hr className='hr' />


        </div>
    )
}

export default Navbar