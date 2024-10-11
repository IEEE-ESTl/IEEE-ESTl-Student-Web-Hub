import MemberCard from '@/components/MemberCard';
import BlurFade from "@/components/magicui/blur-fade";
import ErickMedelGalindo from '@/assets/members/medel.webp';
import Paulo from '@/assets/members/paulo.webp';
import Ivan from '@/assets/members/ivan.webp';
import MarioLozano from '@/assets/members/mario.webp';
import JaredVilleda from '@/assets/members/jared.webp';
import Johan from '@/assets/members/johan.webp';
import Valeri from '@/assets/members/valeri.webp';
import Jorge from '@/assets/members/jorge_monroy.webp';
import Abdiel from '@/assets/members/abdiel.webp';
import Mariano from '@/assets/members/mariano.webp';
import Arturo from '@/assets/members/arturo_monroy.webp';
import Jocelyn from '@/assets/members/jocelyn.webp';

const badges = {
    Fundador: {
        name: "Fundador",
        description: "¡Ha sido el miembro fundador de la iniciativa IEEE ESTl!",
        icon: "academicons:ieee",
        color: "bg-gradient-to-r from-amber-300 to-orange-400",
        iconColor: "text-white",
    },
    Presidente: {
        name: "Presidente",
        description: "¡Ha sido presidente de nuestra comunidad, IEEE ESTl!",
        icon: "academicons:ieee",
        color: "bg-white",
        iconColor: "text-black",
    },
    VicePresidente: {
        name: "Vicepresidente",
        description: "¡Ha sido vicepresidente de nuestra comunidad, IEEE ESTl!",
        icon: "academicons:ieee",
        color: "bg-white",
        iconColor: "text-black"
    },
    WebMaster: {
        name: "Web Master",
        description:
            "¡Ha sido el encargado de mantener nuestras aplicaciones y desarrollos impulsados por la comunidad!",
        icon: "pepicons-pop:code",
        color: "bg-white",
        iconColor: "text-black",
    },
    Desarrollador: {
        name: "Desarrollador",
        description:
            "¡Ha contribuido en proyectos de código abierto de la comunidad!",
        icon: "akar-icons:github-fill",
        color: "bg-black",
        iconColor: "text-white",
    },
    Tesorero: {
        name: "Tesorero",
        description:
            "¡Ha sido el encargado de manejar los fondos de la comunidad!",
        icon: "game-icons:cash",
        color: "bg-white",
        iconColor: "text-black",
    },
    Secretario: {
        name: "Secretario",
        description:
            "¡Ha sido el encargado de llevar el registro de las actividades de la comunidad!",
        icon: "game-icons:bookshelf",
        color: "bg-white",
        iconColor: "text-black",
    },
    Diseñador: {
        name: "Diseñador",
        description:
            "¡Ha sido el encargado de diseñar los gráficos de la comunidad!",
        icon: "bi:brush",
        color: "bg-white",
        iconColor: "text-black",
    },
    Marketing: {
        name: "Marketing",
        description:
            "¡Ha sido el encargado de promocionar la comunidad y sus actividades!",
        icon: "bi:chat-left-text",
        color: "bg-white",
        iconColor: "text-black",
    },
};

const members = [
    {
        name: "Erick Medel Galindo",
        date: "2023",
        image: ErickMedelGalindo,
        badges: [badges.Fundador, badges.Desarrollador],
    },
    {
        name: "Johan Isay Guerrero González",
        date: "2023",
        image: Johan,
        badges: [badges.Presidente, badges.Desarrollador],
    },
    {
        name: "Eric Jared Villeda Reyes",
        date: "2023",
        image: JaredVilleda,
        badges: [badges.Secretario, badges.Desarrollador],
    },
    {
        name: "Mario Lozano Marquez",
        date: "2024",
        image: MarioLozano,
        badges: [badges.VicePresidente, badges.Desarrollador],
    },
    {
        name: "Paulo de Jesús Mantilla Hernández",
        date: "2024",
        image: Paulo,
        badges: [badges.WebMaster, badges.Desarrollador],
    },
    {
        name: "Braulio Iván Rojo Chávez",
        date: "2024",
        image: Ivan,
        badges: [badges.WebMaster, badges.Desarrollador],
    },


    {
        name: "Isai Valeri Marmolejo Corona",
        date: "2024",
        image: Valeri,
        badges: [badges.Marketing],
    },
    {
        name: "Abdiel Avila Neri",
        date: "2024",
        image: Abdiel,
        badges: [badges.Diseñador],
    },
    {
        name: "Jorge Mauricio García Monroy",
        date: "2024",
        image: Jorge,
        badges: [badges.Diseñador],
    },
    {
        name: "Jocelyn García García",
        date: "2024",
        image: Jocelyn,
        badges: [badges.Diseñador],
    },
    {
        name: "Mariano Ordaz Monterrubio",
        date: "2024",
        image: Mariano,
        badges: [badges.Tesorero],
    },
    {
        name: "Arturo Juárez Monroy",
        date: "2024",
        image: Arturo,
        badges: [badges.Desarrollador],
    },
];

function App() {

  return (
    <>
      <main className="flex flex-col items-center justify-center mt-36 bg-white">
        <h1 className="text-7xl text-[#0371a4] font-bebas font-bold">IEEE - ESTl</h1>
        <p className="text-xl font-semibold text-black">Miembros de la Rama</p>

        <div className='flex flex-wrap items-center justify-center gap-10 px-10 mb-10 mt-16'>
            {members.map((member, idx) => (
                <BlurFade delay={0.15 + idx * 0.05} inView key={member.name}>
                    <MemberCard member={member}/>
                </BlurFade>
            ))}
        </div>
      </main>
    </>
  )
}

export default App
