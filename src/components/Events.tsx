import { EffectCards } from "swiper/modules";

import Git from "../../public/Events/Git.jpeg";
import WelcomeBack from "../../public/Events/WelcomeBack.jpeg";
import PostgreSQL from "../../public/Events/PostgreSQL.jpeg";
import CloudWeekend from "../../public/Events/CloudWeekend.jpeg";
import TalentLand2024 from "../../public/Events/TalentLand2024.jpeg";


type Card = {
  src: string;
  name: string;
  description?: string;
};

const card: Card[] = [
  {
    src: TalentLand2024.src,
    name: "Talent Land 2024",
    description: "Talend World | Conferencia",
  },
  {
    src: PostgreSQL.src,
    name: "IEEE - ESTl Student Workshops",
    description: "Taller: PostgreSQL desde Cero",
  },
  {
    src: CloudWeekend.src,
    name: "Cloud Weekend",
    description: "",
  },
  {
    src: Git.src,
    name: "IEEE - ESTl Student Workshops",
    description: "Taller: Git desde Cero",
  },
  {
    src: WelcomeBack.src,
    name: "Welcome Back",
    description: "",
  },
];

import "./cssEvents/Events.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const buildStyle = ({ animation }: { animation?: string }) => {
  let style = { "--animation": animation } as React.CSSProperties;

  return style;
};

export default function App() {
  return (
    <>
      <div className="container ">
        <h2 className="events">
          <span className="span-events" data-content="Conferecias">
            Conferecias
          </span>
          <span
            className="span-events"
            data-content="Talleres"
            style={buildStyle({ animation: "a2" })}
          >
            Talleres
          </span>
          <span
            className="span-events"
            data-content="Hackathon"
            style={buildStyle({ animation: "a3" })}
          >
            Hackathon
          </span>
        </h2>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {card.map((Card, index) => (
            <SwiperSlide key={index}>
              <h1 className="eventName">{Card.name}</h1>
              <p className="eventDescription">{Card.description}</p>
              <img src={Card.src} alt={Card.name} style={{ maxHeight: "270px" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
