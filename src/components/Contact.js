import React from "react";

function Contact() {
    return (
        <section class="contact" id="contact">
      <p class="heading"><span>Contact</span>Us</p>
      <div class="contact-content">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="youmail@gmail.com" />
          <input type="text" placeholder="Number" />
          <textarea placeholder="Message ..."></textarea>
          <button type="submit">Send Message</button>
        </form>
        <img src="../images/contact-img.svg" />
      </div>
    </section>
    );
}

export default Contact;