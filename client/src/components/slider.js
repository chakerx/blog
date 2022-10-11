import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://lp-cms-production.imgix.net/2019-06/c32f29efd9f1e16d0732dc4ce06918fd-sidi-bou-said.jpg"
          alt="First slide"
          style={{height:"500px"}}
        />
        <Carousel.Caption  style={{color:'white' }}>
          <h1 >share us your moments </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ab/f0/8a/abf08acac4af5d3d61bc4742020a41a4.jpg"
          alt="Second slide"
          style={{height:"500px"}}
        />

        <Carousel.Caption  style={{color:'white' }}>
          <h1>share us your moments</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/pcNMOxbX7j4/maxresdefault.jpg"
          alt="Third slide"
          style={{height:"500px"}}
        />

        <Carousel.Caption  style={{color:'white' }}>
          <h1>share us your moments</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

 

export default Slider