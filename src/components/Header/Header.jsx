import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import logo from '../../image/favorites.png'
import logo2 from '../../image/favorite.png'


const Header = () => {
  const arrLength = []

  const [input, setInput] = useState('')
        
  const handelChange = e =>{
    setInput(e.target.value)
  }
  
  function addShadowScroll (){
    document.addEventListener('scroll', function(){
      let header = document.querySelector('.header')
       if(window.pageYOffset > 0){
         header.classList.add('bshadow')  
       }
       if(window.pageYOffset <= 0){
        if(header.classList.contains("bshadow")){
          header.classList.remove('bshadow')
        }  
      }         
    })
  }

  useEffect(()=>{
    addShadowScroll()
  },[])

  return (
    <header className='header'>
      <div className='header-content container'>
        <Link to='/' className='header__logo'>Степное</Link>
        <div className='header__search'>
          <input className='header__search-form' value={input} onChange={handelChange}  type="text" />
          <label className={`header__search-label ${input.length ? 'shrink' : ''}`}>Поиск товара</label>
        </div>
        <Link to='/favorite' title='Избранное' className='header-favorites'>
          {!arrLength.length ? <img src={logo} alt="Избранное" />
                            : <img src={logo2} alt="Избранное" />
          }
          <span className={arrLength.length > 9 ? 'favoritesize' : ''}>
            {arrLength.length ? arrLength.length : null}
          </span>
        </Link>
        <Link to='auth' className='header__singin'>Вход и регистрация</Link>
      </div>
    </header>
  );
}

export default Header;
