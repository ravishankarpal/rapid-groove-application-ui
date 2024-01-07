import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({ propsData }) => {
    const { name }= propsData;
  return<Wrapper>
    <div className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to </p>
                <h2>{name}</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                   printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                </p>
                <NavLink>
                    <Button>
                        Shop now
                    </Button>
                    
                </NavLink>
            </div>
            {/* our homepage */}
            <div className='hero-section-image'>
                <figure>
                    <img src ='images/hero.jpg' 
                    alt='hero-section-photo'
                    className='img-style'/>
                </figure>
            </div>

        </div>
    </div>

  </Wrapper>
};

const Wrapper = styled.section`

.img-style{
    height: 250px;
    width: 350px;
    top: 30rem;
    overflow: hidden;
    margin: 40px;
}
.grid grid-two-column{
    margin: 40px;
}
`;

export default HeroSection;            
