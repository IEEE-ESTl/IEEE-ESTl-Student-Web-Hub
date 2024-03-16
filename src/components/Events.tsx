// import Swiper core and required modules
import { EffectCards } from "swiper/modules";

import Git from "../../public/Events/Git.jpeg";
import WelcomeBack from "../../public/Events/WelcomeBack.jpeg";

type Image = {
  src: string;
  name: string;
  description?: string;
};

const images: Image[] = [
  {
    src: Git.src,
    name: "Git desde Cero",
    description: "",
  },
  {
    src: WelcomeBack.src,
    name: "Welcome Back",
    description: "",
  },
];

import "./Events.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App() {
  return (
    <>
      <div className="container" id="Eventos">
        <div className="events">
          <h2 className="gray">Conferecias</h2>
          <h2>Tallereres</h2>
          <h2 className="gray">Competencias</h2>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <h1>{image.name}</h1>
              <p>{image.description}</p>
              <img src={image.src} alt={image.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
