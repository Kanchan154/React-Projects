import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            slidesToSlide: 3,
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            slidesToSlide: 2,
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            slidesToSlide: 2,
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            slidesToSlide: 2,
            items: 1
        }
    };


    return (
        <Carousel responsive={responsive}
           
        

  swipeable={false}
  draggable={false}
  showDots={true}
//   responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"

  >
            <div className='product'>Item 1</div>
            <div className='product'>Item 1</div>
            <div className='product'>Item 1</div>
            <div className='product'>Item 2</div>
            <div className='product'>Item 3</div>
            <div className='product'>Item 4</div>
            <div className='product'>Item 5</div>
            <div className='product'>Item 6</div>
            <div className='product'>Item 7</div>
            <div className='product'>Item 8</div>
            <div className='product'>Item 9</div>
            <div className='product'>Item 10</div>
            <div className='product'>Item 11</div>
            <div className='product'>Item 12</div>
            <div className='product'>Item 13</div>
            <div className='product'>Item 14</div>

        </Carousel>
    )
}

export default Slider

// <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >