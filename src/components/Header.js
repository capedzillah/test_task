import React from 'react'
import {Link} from 'react-router-dom'
import LogoImg from '../img/google.png'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to='/'><img src={LogoImg} alt="Google"/></Link>
            </header>
        )
    }
}

export default Header
