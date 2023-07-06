import Link from 'next/link'
import React from 'react'
import { DropdownButton, Nav, Navbar, Dropdown } from 'react-bootstrap'
import Image from 'next/image'
import logoImg from '@/public/logo.png'
import styles from '@/styles/NavBar.module.css'


const NavBar = () => {
    return (
        <Navbar bg='secondary' sticky='top' expand='sm' collapseOnSelect className="px-3">
            <Navbar.Brand as={Link} href="/">
                <Image src={logoImg} alt="News Articles Logo" width={40} height={40}/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-navbar" className={styles.navbarToggle}/>
            
            <Navbar.Collapse id="main-navbar">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} href='/' className='text-dark'>Breaking</Nav.Link>
                    <Nav.Link as={Link} href='/search-news' className='text-dark'>Search</Nav.Link>
                    <DropdownButton drop='start' variant='secondary' title="Categories" id="categories-dropdown-button-drop-start">
                        <Dropdown.Item as={Link} href="/categories/business">business</Dropdown.Item>
                        <Dropdown.Item as={Link} href="/categories/entertainment">entertainment</Dropdown.Item>
                        <Dropdown.Item as={Link} href="/categories/general">general</Dropdown.Item>
                        <Dropdown.Item as={Link} href="/categories/health">health</Dropdown.Item>
                        <Dropdown.Item as={Link} href="/categories/science">science</Dropdown.Item>
                        <Dropdown.Item as={Link} href="/categories/sports">sports</Dropdown.Item>
                        <Dropdown.Item as={Link} href="/categories/technology">technology</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar