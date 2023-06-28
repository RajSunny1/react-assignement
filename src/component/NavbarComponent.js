import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css'

const NavbarComponent = () => {
const [currentTab,setCurrentTab] = useState('');
const tabHandler=(data)=>{
  if(data.length){
    setCurrentTab(data)
  }
}
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <ul className='Navbar__main'>
        <li className={currentTab.includes('Your') ? 'tab__active' : ''} onClick={()=>tabHandler('Your')}>Your</li>
        <li onClick={()=>tabHandler('All')} className={currentTab.includes('All') ? 'tab__active' : ''}>All</li>
        <li onClick={()=>tabHandler('Blocked')} className={currentTab.includes('Blocked') ? 'tab__active' : ''}>Blocked</li>
      </ul>
    </Container>
  </Navbar>
    <hr className='horizantal__line'/>
    </>
  )
}

export default NavbarComponent
