import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./cssSoon/soon.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

import comingSoon from "/public/Inicio/undraw_programming_re_kg9v.svg";

type Card = {
  src: string;
};

const card: Card[] = [];

export default function App() {
  return (
    <>

      {" "}
      {card.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <img src={comingSoon.src} style={{ width: "300px" }} />
          <h1
            style={{ color: "#035B98" }}
          >Proximamente...</h1>
        </div>
      )}

      {card.length !== 0 && (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper1"
        >
          {card.map((Card, index) => (
            <SwiperSlide key={index}>
              <img src={Card.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </>
  );
}
