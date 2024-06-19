import React from 'react';
import Slider from 'react-slick';
import './CarouselServices.css'; // Custom CSS for the carousel
import Image1 from './iot.png'; // Import your image files
import Image2 from './lcnc.png';
import Image3 from './AI.png';
const CarouselServices = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

  return (
    <section id="carousel-services">
      <div className="container">
        <h2>Our Services</h2>
        <Slider {...settings}>
          <div className="carousel-item">
          <img src={Image3} alt="Service 1" className="carousel-item-image" />
            <h3>Artificial Intelligence</h3>
            <p>AI continues to be at the forefront of emerging tech. Beyond chatbots and virtual assistants like Apple’s Siri, we’re seeing more complex versions of AI.
Generative AI is a fascinating development. For instance, ChatGPT, which uses natural language processing, can generate text based on a prompt. It’s essential for businesses but also raises ethical questions about distinguishing human output from AI-generated content.
Explainable AI is another subset, providing logic and reasoning for AI decisions. .</p>
          </div>
          <div className="carousel-item">
          <img src={Image1} alt="Service 1" className="carousel-item-image" />
            <h3>Internet Of Things(IoT)</h3>
            <p>IoT leverages connected devices (wearables, sensors) to optimize results for businesses.
            With the expansion of IoT devices across various industries, cybersecurity becomes critical. The open interconnectivity of IoT has made it vulnerable to cyberattacks.</p>
          </div>
          <div className="carousel-item">
          <img src={Image2} alt="Service 1" className="carousel-item-image" />
            <h3>Low-code/ No-Code Platforms</h3>
            <p>These tools empower users with little or no programming knowledge to create applications.
They offer a graphical interface, allowing users to build software through drag-and-drop techniques.
Low-Code Platforms provide pre-built components and allow some customization with minimal coding.
No-Code Platforms require zero coding; users assemble applications using existing building blocks.</p>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
}

export default CarouselServices;
