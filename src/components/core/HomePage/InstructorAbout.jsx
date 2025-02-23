import React from 'react';
import Shape1 from '../../../assets/Images/Ins_shape1.svg'
import Shape2 from '../../../assets/Images/Ins_shape2.svg'
import Shape3 from '../../../assets/Images/Ins_shape3.png'
import aboutBanner from '../../../assets/Images/about-banner.jpg'
import sideImage1 from '../../../assets/Images/sideImage1.png'
import sideImage2 from '../../../assets/Images/sideImage2.png'
import './InstructorAbout.css';
const AboutSection = () => {
  return (
    <section className="section about bg-white w-[100%]" id="about" aria-label="about">
      <div className="container ">
        <figure className="about-banner">
          <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
            <img src={aboutBanner} width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
          </div>
          <img src={Shape1} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" />
          <img src={Shape2} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
          <img src={Shape3} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
        </figure>
        

        <div className='w-[100%] h-auto'>
         <img src={sideImage2} width="750"/>
         <p className='text-[#838894]'>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
            aliquaenim ad minim.</p>
         <img src={sideImage1}/>
         
        </div>
       
       
      </div>
    </section>
  );
};

export default AboutSection;