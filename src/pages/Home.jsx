// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import DisplayBox from "../components/core/HomePage/DisplayBox"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"
import AnimatedTooltip from "../components/Common/AnimatedTooltip"
import InstructorAbout from "../components/core/HomePage/InstructorAbout"
import Sparkles from 'react-sparkle'
import PaymentButton from "../components/Common/PaymentButton"
import { useEffect } from "react"

const yourItemsArray = [
  {
    id: 1,
    name: "Ritik Garg",
    designation: "Software Engineer",
    image: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=128&q=75",
  },
  {
    id: 2,
    name: "Aman Singh",
    designation: "FuLL Stack Developer",
    image: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=128&q=75",
  },
  {
    id: 3,
    name: "Dora",
    designation: "The Explore",
    image: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544725176-7c40e5a71c5e%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3534%26q%3D80&w=128&q=75",
  },
  {
    id: 4,
    name: "Anurag chaubey",
    designation: "ML Engineer",
    image: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472099645785-5658abf4ff4e%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3540%26q%3D80&w=128&q=75",
  },
  {
    id: 5,
    name: "Rohit Yadav",
    designation: "SDE-3",
    image: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=128&q=75",
  },
  {
    id: 6,
    name: "Tushar Kumar",
    designation: "Computer scientist",
    image: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=128&q=75",
  },
  
  // Add more items as needed
];

let isInDiv=true;
const handleDivMouseEnter = () => {
  isInDiv = true;
};

const handleDivMouseLeave = () => {
  isInDiv = false;
};
function Home() {
  useEffect(() => {
    const container = document.getElementById("HomePage_Container");
    let cursor = document.getElementById("cursor");
    if (container) {
      for (let i = 0; i < 70; i++) {
        let box = document.createElement("span");
        container.appendChild(box);
      }
    }
    const handleMouseMove = (e) => {
      if (!isInDiv && cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);
  return (
    <div >
      <div  className="relative" id="HomePage_Container" ><div id="cursor"></div></div>
      
     {/* <PaymentButton/> */}
    
   <div className="absolute w-[100%] top-[130px] z-10 ">

   <div className="  flex w-[100%] p-[5%] gap-[10px]" >
       

       <div className="relative mx-auto flex w-[60%] max-w-maxContent flex-col items-center justify-between gap-8 text-white" onMouseEnter={handleDivMouseEnter} onMouseLeave={handleDivMouseLeave}>
         <Link to={"/signup"}>
           <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
             <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
               <p>Become an Instructor</p>
               <FaArrowRight />
             </div>
           </div>
         </Link>

         <div className="text-center text-4xl font-semibold">
         
           Enhance Your Future with
           <HighlightText text={"Coding Capabilities"} />
           
         </div>

       
         <Sparkles color="teal" />
         <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
           Explore our digital coding courses for flexible learning,
           personalized guidance, and a wealth of resources to enhance your
           skills at your convenience, regardless of your location.
         </div>

         
         <div className="mt-8 flex flex-row gap-7">
           <CTAButton active={true} linkto={"/signup"}>
             Learn More
           </CTAButton>
           <CTAButton active={false} linkto={"/login"}>
             Book a Demo
           </CTAButton>
         </div>
       </div>
       <div>
         <DisplayBox />
       </div>
     </div>
    
   </div>
   <div className="relative mx-auto flex  max-w-maxContent flex-col items-center justify-between gap-8 text-white  ">
      
      

      
      <div  className="p-5 flex w-[50%] bg-[rgb(33,35,41)] border-2 border-[rgb(118,54,35)] rounded-full items-center gap-3"><AnimatedTooltip items={yourItemsArray}/><p className="text-xl" >70,000+ Happy Students</p></div>
      
      <div>
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={"coding potential"} /> with our online
              courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor={"text-yellow-25"}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>

      {/* Code Section 2 */}
      <div>
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
              Start
              <HighlightText text={"coding in seconds"} />
            </div>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={{
            btnText: "Continue Lesson",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor={"text-white"}
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          backgroundGradient={<div className="codeblock2 absolute"></div>}
        />
      </div>

      {/* Explore Section */}
      <ExploreMore />
    </div>


   
      

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex  max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-[100%]  flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorAbout/>
        
        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home
