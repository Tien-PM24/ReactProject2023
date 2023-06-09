import React from "react";
function About() {
    return (
        <section class="about" id="about">
            <p class="heading"><span>About</span>Us</p>
            <div class="row">
                <div class="video-container">
                <video src="images/about-vid.mp4" autoplay loop muted></video>
                <h3>Best Flower Sellers</h3>
                </div>
                <div class="content">
                <h1>Why Choose Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                    commodi quisquam eos autem nemo aliquam dolorum minima culpa
                    deleniti vero possimus? Minus, ea. Ea facere magni quam accusantium
                    impedit! Ullam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit
                    tempora odio necessitatibus beatae veniam obcaecati ea dolor
                    doloremque quisquam.
                </p>
                <a href="#" class="btn">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default About;