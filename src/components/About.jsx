import React from "react";
import image1 from "../assets/Images/image3.jpeg";

function About() {
  return (
    <div className="max-w-[1320px] mx-auto " id="about">
      <h1 className="font text-6xl text-center mt-8 py-5 text-white">
        Our services
      </h1>
      <div className="xs:mx-10">
        <h2 className="text-4xl py-5 justify-center items-center flex gap-12 text-white">
          Indian Wedding Horse and Rath Service
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10  mx-auto">
          <div className="text-4xl md:text-3xl text-white mr-10 font">
            Welcome to our Indian Wedding Horse and Rath Service! We are
            dedicated to making your special day a truly memorable and magical
            experience. With our fleet of majestic horses and beautifully
            adorned raths, we aim to add a touch of regal elegance to your
            traditional Indian wedding ceremony
            <br></br>
            <br></br>
            Our mission is to bring the allure and grandeur of traditional
            Indian weddings to life. We strive to ensure that every moment of
            your wedding day is filled with elegance, grace, and enchantment. By
            offering our horses and raths, we aim to provide a unique and
            unforgettable experience, as well as an opportunity to create
            stunning photographs and videos that will be cherished for a
            lifetime.
          </div>
          <img src={image1} alt="" />
          
      </div>
      <div className="flex"></div>
           <h1 className="flex justify-center text-6xl text-white mb-10">why chose us </h1>
           <p className="text-white text-2xl ">


            <h3 className="">
              <span className="text-3xl " >  Authenticity</span>
          : We take pride in our commitment to preserving the authenticity of Indian wedding traditions. Our horses and raths are meticulously selected and prepared to ensure they meet the highest standards of traditional elegance.

            </h3>
            <h3 className="">
              
              <span className="text-3xl " >  Professionalism</span>
              : We understand the significance of your wedding day and the importance of every detail. Our dedicated team of professionals is trained to provide a seamless and stress-free experience, ensuring that everything runs smoothly and according to your vision.


            </h3>
            <h3 className="">
              <span className="text-3xl " >  Attention to Detail</span>
              : From the meticulous grooming of our horses to the intricate embellishments on our raths, we pay close attention to every aspect of our service. We strive for perfection and work tirelessly to create an ambiance that reflects the beauty and grandeur of Indian weddings.

            </h3>
            <h3 className="">
              <span className="text-3xl " > Memorable Experience</span>
              We believe that your wedding day should be nothing short of extraordinary. By choosing our service, you can expect an enchanting and unforgettable experience that will leave you and your guests with lifelong memories.

            </h3>




           </p>
        </div>
    </div>
  );
}

export default About;
