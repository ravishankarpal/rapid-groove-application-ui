import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
// import { Nav } from './Nav';

const Header = () => {
    return (
        <MainHeader>

            <NavLink to='/'>
            <img src='./images/logo.png' alt='rapid groove logo' className='mainlogo' />
            </NavLink>

            <Nav></Nav>


            {/* <Nav /> */}

        </MainHeader>
    )
};

const MainHeader = styled.header` 
 height: 5rem;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 1rem;
}

.mainlogo{
    height: 50px;
    padding-left: 20px;
}
@media (max-width:${({ theme }) => theme.media.mobile}) { 
} 
`;

export default Header