import React from "react";
import './About.css';
import img_exp from './8-Years-of-Experiences-1.webp';
function About() {
    return (
        <>

    <div className="container-1">
        <div class="part-1">
        <img src={img_exp}></img>
        </div>
        <div class="part-2">
        <h4>ABOUT COMPANY</h4>
                <h1>Zapecode Pvt. Ltd.</h1>
                <p>We give your business or portfolio a important website and online presence which not only caters
                     to your specific business requirements but helps you make better clientele and improves your visibility online.
                      Its not just about having a good web operation, its about power and we give that power to you! We’ve
                       important structure for managing stoner identity and social graph data, we’ve a solid understanding
                        of stylish practices for adding stoner engagement, bodying point gests for individual druggies
                         and maximizing ROI for web design enterprise. We conduct all that moxie into our products, but
                          we also offer digital and social media strategists for brands We’ll work with you to completely
                           understand your business and your target followership to inform our marketing strategy. Using 
                           the issues from the Company Analysis, we will put together a plan for the most effective online 
                           marketing strategy to get the stylish results for your business.</p>
        </div>
    </div>

    <div class="container-8">
            <h1>Get In Touch With Us Today</h1>
        </div>

        <div class="container-9">
            <div class="part-9-1">
            <h3>Contact Info</h3>
            
            </div>
            <div class="part-9-2">
            <h5>LET'S TALK</h5>
            <h2>Speak With Engineers.</h2>
            </div>
        </div>

        </>

    );
}
export default About;