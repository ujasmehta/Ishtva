import React from 'react';
import './App.css';
import CarouselServices from './CarouselServices'; // Import the CarouselServices component
import ContactForm from './ContactForm';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className='fixed-header'>
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="business-name">Ishtva Technologies</h1>
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <li><a href="#carousel-services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </header>

      {/* Include the CarouselServices component */}
      <section id="carousel-services">
        <div className="container"><CarouselServices /></div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Experts in Digital Transformation and Sales Automation services focused on delivering real business value.
            Ishtva Technologies is a Core business consulting and professional services firm. We focus on helping customers in creating end-to-end sales and marketing solutions using the Salesforce Cloud platform. Our team is highly experienced, trained, motivated, and driven towards achieving your business goals. We specialize in a wide range of Salesforce platform capabilities including App Development, Process Automation, On-Demand Workflow, Integrations, and Custom Installation.
            We strive to be one of the best Salesforce development teams in the world and be your trusted partner of choice for delivering IT solutions.

            As our name reflects we ensure our team has strong foundational skills and aim to offer the best of services to our clients and partners.</p>
        </div>
      </section>
      <ContactForm />


      <footer>
        <div className="container">
          <p>&copy; 2024 Ishtva technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
