import React from 'react';
import image2 from "../../Images/about.jpg"
const About = () => {
    return (
        <div>
            <h1 className="text-center mb-8 text-7xl font-extrabold">About Us</h1>
        <div className="about sec flex justify-between items-center p-8">
            <div className="about-left">
           <img className="rounded-full"  src= {image2}alt="" />
            </div>
            <div className="ml-6"> 
              <p>Our reputation in the field of education management and consultancy has gained momentum over the years in the UK and US. This was possible due to the sustained efforts of our experts, professionals and go-getter consultants that worked tirelessly in providing the best-in-class educational consultation to university students. Most of our partners are globally acclaimed, thus our students are provided with exceptional quality and unlimited options. In the US, we have our presence in almost all the eastern and Pacific states, providing quality educational consultancy. We’ve tied up with the best colleges and universities, thus helping our clients with international-quality education. This enables all our students to think of a bright and prosperous career in the long run. We also help students choose the right path by guiding them through the professional courses and programs. In this way, they are able to choose the best graduate or degree courses. After all, it is the future of students that matters a lot.
We always strive to provide world-class facilities and infrastructure to our students that come from all over the world, as they have high hopes for us.</p>
            </div>
           
        </div>
        </div>
    );
};

export default About;