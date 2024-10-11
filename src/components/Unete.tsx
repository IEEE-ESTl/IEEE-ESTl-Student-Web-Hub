import React, { useState } from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import BoxReveal from '@/components/magicui/box-reveal';
import BlurFade from "@/components/magicui/blur-fade";
import JoinForm from './JoinForm';

interface CardData {
  title: string[];
  description: string;
  hoverClass: string;
}


const cards: CardData[] = [
  {
    title: ['DESAFIA', 'TUS', 'HABILIDADES'],
    description: "Participa en eventos de programación como el CINSOFT y pon a prueba tus conocimientos.",
    hoverClass: 'hover:rotate-6'
  },
  {
    title: ['APRENDE', 'DE LOS', 'MEJORES'],
    description: "Asiste a talleres, conferencias, cursos y competencias para añadir valor curricular.",
    hoverClass: 'hover:translate-y-6'
  },
  {
    title: ['CONOCE', 'A TU', 'COMUNIDAD'],
    description: "Convive con otros estudiantes y profesionales dispuestos a compartir sus conocimientos.",
    hoverClass: 'hover:-rotate-6'
  }
];

const Card: React.FC<CardData> = ({ title, description, hoverClass }) => {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <div 
      className={`relative cursor-pointer flex h-[200px] w-[300px] lg:h-[300px] lg:w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl transition-all duration-300 hover:scale-95 ${hoverClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'} absolute inset-0 flex flex-col items-center justify-center`}>
        {title.map((line, index) => (
          <p key={index} className={`font-montserrat text-3xl lg:text-4xl font-black ${index % 2 === 0 ? 'text-[#0371a4]' : ''}`}>
            {line}
          </p>
        ))}
      </div>
      <div className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center p-4`}>
        <p className="font-montserrat text-sm lg:text-lg text-center text-[#0371a4] p-3 font-semibold">{description}</p>
      </div>
      <BorderBeam
        size={200}
        duration={10}
        delay={9}
        borderWidth={6}
        anchor={40}
        colorFrom="#0371a4"
        colorTo="#95ddff"
      />
    </div>
  );
};

const CardGrid: React.FC = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center select-none gap-10 mt-10 mb-16">
    {cards.map((card, index) => (
      <BlurFade key={index} delay={0.25 + index * 0.05} inView>
        <Card key={index} {...card} />
      </BlurFade>
    ))}
  </div>
);

export const Unete: React.FC = () => {
  const disabled = true;

  return (
    <section className="flex flex-col mt-12 mb-32" id="join">
      <div className="flex flex-col items-center lg:items-start lg:ml-60">
        <BoxReveal boxColor={'#0371a4'} duration={0.3}>
          <h1 className="text-7xl lg:text-9xl text-[#0371a4] font-bold font-bebas">
            UNETE
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={'#0371a4'} duration={0.4}>
          <p className="text-sm lg:text-xl text-center font-jetbrains mt-4 max-w-6xl whitespace-normal break-words px-6 lg:px-0 text-black">
            Al unirte a la Rama, te embarcarás en un viaje emocionante lleno de oportunidades y beneficios que enriquecerán tu experiencia académica y profesional. Aquí están algunos de los increíbles beneficios que ofrecemos a nuestros miembros:
          </p>
        </BoxReveal>
      </div>
      <CardGrid/>
      <div className='flex flex-col items-center'>
        <JoinForm text='UNIRSE' disable={disabled} className={`${disabled ? 'bg-[#c4cdd1] text-[#9ca9b5] ' : 'bg-[#0371a4] cursor-pointer text-white transition-all duration-300 hover:translate-y-2 hover:bg-[#0f4159]'} px-12 py-6 rounded-full text-xl font-montserrat font-bold `}/>
      </div>
    </section>
  )
}