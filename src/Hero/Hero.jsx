import { useRef } from "react";
import { useInView } from "framer-motion";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        className="hero min-h-screen z-0"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/daknbj7xw/image/upload/v1666090903/Mari/background_vnj2e1.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-40">
          <img
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="z-10 w-full mt-28"
            src="https://res.cloudinary.com/daknbj7xw/image/upload/v1666090903/Mari/BR_dwvweq.png"
            alt=""
          />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              style={{
                transform: isInView ? "none" : "translateY(+200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="mb-5 text-3xl font-bold"
            >
              Learn Portuguese with Mariana
            </h1>
            <p className="mb-5">The most dynamic way of learning portuguese</p>
            <button className="btn btn-outline">Why Portuguese?</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
