import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./cssSoon/soon.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import cw from "../../public/SoonEvents/cw.jpeg";
import w1 from "../../public/SoonEvents/weekend1.jpeg";
import w2 from "../../public/SoonEvents/weekend2.jpeg";
import w3 from "../../public/SoonEvents/weekend3.jpeg";
import w4 from "../../public/SoonEvents/weekend4.jpeg";
import w5 from "../../public/SoonEvents/weekend5.jpeg";
import w6 from "../../public/SoonEvents/weekend6.jpeg";
import w7 from "../../public/SoonEvents/weekend7.jpeg";

type Card = {
  src: string;
};

const card: Card[] = [
  {
    src: cw.src,
  },
  {
    src: w1.src,
  },
  {
    src: w2.src,
  },
  {
    src: w3.src,
  },
  {
    src: w4.src,
  },
  {
    src: w5.src,
  },
  {
    src: w6.src,
  },
  {
    src: w7.src,
  },
];

export default function App() {
  return (
    <>
      {" "}
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
    </>
  );
}
