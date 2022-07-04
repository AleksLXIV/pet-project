import React from 'react'
import './Content.styles.scss'


import Nav from './../Nav/Nav';
import Main from './../Main/Main';

const Content = () =>{
    return(
        <div className='content__container container'>
                <Nav />
                <Main />
            </div>
    )
}
export default Content