import React from "react";

import "./testimonial.scss";

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h1 className="testimonialsHeader">Comments</h1>
        <div className="testimonialsAll">
          <div className="testimonialsDetails">
            <img className="bgImg" src="./assets/user/a.jpg" alt="" />
            <h1>Mehdi</h1>
            <p>
              The Food we had enjoyed at the time of dinner. It was really
              delicious taste with great quality, everything had unique taste
              which we had ordered, nice arrangement and services from the staff
              while eating.
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src="./assets/user/b.jpg" alt="" />
            <h1>Ali</h1>
            <p>
              Although we didn't go into the onsite restaurant, we ordered some
              food a few times and it was delicious. The lobby were nice and
              open, good place to relax and meet friends.
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src="./assets/user/c.jpg" alt="" />
            <h1>Mohammad</h1>
            <p>
              The food was fresh, properly prepared and a great value for the
              price. We highly recommend it. The breakfast buffet on Sunday was
              equally as good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
