import React from 'react'
import './Nav.styles.scss'
import { navBar } from './../../utils/navRoutes';
import { Link } from 'react-router-dom';
import logo0 from '../../image/0.png'
import logo1 from '../../image/1.png'
import logo2 from '../../image/2.png'
import logo3 from '../../image/3.png'
import logo4 from '../../image/4.png'
import logo5 from '../../image/5.png'
import logo6 from '../../image/6.png'
import logo7 from '../../image/7.png'
import logo8 from '../../image/8.png'
import logo9 from '../../image/9.png'
import logo10 from '../../image/10.png'
import logo11 from '../../image/11.png'


const Nav = () => {
    const images = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11]
    return (
        <nav className='nav'>
            <div className='nav__categories'>
                <div className='categories__before'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1 className='nav__title'> Категории</h1>
            </div>
            <ul className='nav__links'>
                {navBar.map(({ name, id, path }) => <li className='nav__link'>
                                                        <img src={images[id]} alt="" />
                                                        <Link key={name} to={path}>{name}</Link>
                                                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Nav