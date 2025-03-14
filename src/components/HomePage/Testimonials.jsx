import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 3000, // Establece el intervalo en 3 segundos (3000 ms)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      text: "I have tried several cleaning companies over the years, but this one is by far the best. They are professional, courteous, and they always go above and beyond to ensure my home is spotless. Their rates are competitive, and I appreciate their dedication to customer satisfaction.",
      author: "Liam J",
    },
    {
      id: 2,
      text: "I am a busy mom of two, and I don't have time to clean my house as often as I'd like. That's where this residential house cleaning company comes in. They take care of all the cleaning tasks I don't have time for, and they do an amazing job. I love coming home to a clean and tidy house, and I couldn't do it without them.",
      author: "Ana",
    },
    {
      id: 3,
      text: "I have been using this residential house cleaning company for a few months now, and I am beyond impressed with their services. They always arrive on time, and their attention to detail is second to none. My home has never looked better, and I highly recommend them to anyone looking for a reliable and efficient cleaning service.",
      author: "Lyvia K",
    },
    {
      id: 4,
      text: "I recently hired this residential house cleaning company to do a deep clean of my home before a big event, and I was blown away by the results. They worked quickly and efficiently, and my house has never looked better. I received so many compliments on how clean and tidy my home was, and I have this company to thank for that. I will definitely be using their services again in the future.",
      author: "Chloe M",
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-950 mb-16">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4 py-2">
              <div className="bg-white p-6 rounded-lg shadow-2xl">
                <p className="text-gray-800 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="text-yellow-400">★★★★★</div>
                  <div className="ml-2 font-bold">{testimonial.author}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;