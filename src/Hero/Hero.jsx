import React from "react";

function Hero() {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://res.cloudinary.com/daknbj7xw/image/upload/v1665423823/Mari/Papel_de_Parede_Brasil_Amarelo_Verde_e_Azul_o2lor6.png")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Learn Portuguese with Mariana</h1>
            <p className="mb-5">
              The most dynamic way of learning portuguese
            </p>
            <button className="btn btn-outline">Why Portuguese?</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
