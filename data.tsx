import { Linkedin, Crop, Pencil, Computer, Book, Rocket, Github } from "lucide-react";
import NavbarImageIcon from "@/components/navbar-image-icon";


export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/orgs/Cloud-Gods/repositories",
    }  
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <NavbarImageIcon src="/cloudgods-logo.jpeg" alt="Home" />,
        link: "/",
    },
    {
        id: 2,
        title: "Statistics",
        icon: <NavbarImageIcon src="/statistics.jpeg" alt="Statistics" />,
        link: "/statistics",
    },
   
];

export const dataAboutPage = [
    {
        id: 1,
        title: "BlockChain Developer",
        subtitle: "Estudiante de la Universidad de Antioquia",
        description: "En paralelo al ambiente de trabajo en la Universidad adquirí el conocimiento necesario para desarrollar aplicaciones descentralizadas y contratos inteligentes, con el lenguaje de programación MOTOKO, AZLE, MOVE y RUST (Motoko y Azle son de la red de ICP, Move de la red de APTOS y Rust de la red de SOLANA). Tuve la oportunidad de trabajar en plataforma de votaciones descentralizadas GABBI DAO la cual se encuentra desplegado en la red de ICP también una plataforma de gestión de desechos Urbanas en APTOS",
        date: "Dic 2023 ",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        subtitle: "Estudiante de la Universidad de Antioquia",
        description: "Aprender tanto el backend como el frontend implicó dominar múltiples lenguajes de programación, bases de datos, frameworks y metodologías de desarrollo, además de enfrentarme a la presión de las entregas y las exigencias académicas. A pesar de los desafíos, la satisfacción de construir aplicaciones funcionales y comprender cómo funciona todo el ecosistema tecnológico hizo que el esfuerzo valiera la pena.",
        date: "Nov 2023 ",
    },
    {
        id: 3,
        title: "Artificial Intelligence and Big-data Developer",
        subtitle: "Estudiante de la Universidad de Antioquia",
        description: "Estudiar Ingeniería de Sistemas en la Universidad de Antioquia para convertirme en Artificial Intelligence and Big Data Developer ha sido un reto apasionante. He tenido que resolver problemas complejos y sumergirme en el mundo de los algoritmos, machine learning y procesamiento de grandes volúmenes de datos. Dominar herramientas como Python, frameworks de IA y técnicas avanzadas de análisis ha sido fundamental, además de manejar la presión de proyectos exigentes. Actualmente, trabajo en un proyecto de investigación en inteligencia artificial para el sensado de frente de ondas en imágenes oculares, lo que me ha permitido aplicar mis conocimientos en problemas reales, enfrentando desafíos técnicos y explorando nuevas soluciones innovadoras.",
        date: "August 2023",
    },
    {
        id: 4,
        title: "Especialista en Desarrollo IOT (Internet of Things)",
        subtitle: "Ingeniero Electrónico del Instituto Tecnológico Metropolitano",
        description: "Saber sobre el desarrollo de Internet de las Cosas (IoT) implica comprender la interconexión de dispositivos inteligentes, el manejo de sensores, microcontroladores y la comunicación a través de protocolos como MQTT y HTTP. He aprendido a programar en lenguajes como Python, C y JavaScript para el desarrollo de firmware y aplicaciones IoT, además de trabajar con plataformas en la nube para el almacenamiento y análisis de datos en tiempo real. También sé diseñar arquitecturas de sistemas IoT, integrar dispositivos con inteligencia artificial y optimizar la eficiencia energética en redes de sensores, lo que me permite desarrollar soluciones innovadoras en automatización, domótica e industria 4.0.",
        date: "Ago 2020",
    },    
    {
        id: 5,
        title: "Prácticas Grado",
        subtitle: "Fatelares S.A.S.",
        description: "Durante mis prácticas profesionales y el año y medio de trabajo en Fatelares S.A.S., adquirí una sólida experiencia en hardware, mantenimiento y desarrollo de PLC (Control Lógico Programable). Aprendí a diagnosticar y reparar equipos, optimizar el funcionamiento de sistemas industriales y desarrollar soluciones de automatización para mejorar la eficiencia de los procesos. Además, trabajé en la programación y configuración de PLCs para el control de maquinaria, integración de sensores y actuadores, y administración de recursos en entornos automatizados, lo que me permitió fortalecer mis habilidades en la optimización de procesos industriales y la gestión tecnológica.",
        date: "Dic 2015",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Innovación y Creatividad",
        description: "Desarrollo de soluciones tecnológicas como lo es IA, Big Data, IoT y Blockchain.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Proyecto IA Pruebas Saber Kaggle, Competencia",
        image: "/Kaggle.png",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/modelPredictPrebaSaber",
        urlDemo: "https://www.youtube.com/watch?v=FQt3c-Vk2d8",
    },
    {
        id: 2,
        title: "Desarrollo Aplicación descentralizada ICP con Motoko, ADN Vocacional",
        image: "/Motoko.jpg",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/motoko-react-ADN-faculty-vocational",
        urlDemo: "https://www.youtube.com/watch?v=XXCpCFI5Afo",
    },
    {
        id: 3,
        title: "Desarrollo Aplicación descentralizada ICP con Azle, PARQAPP",
        image: "/Azle.png",
        urlGithub: "https://github.com/andresm05/icp-hackaton-crypto-blockers",
        urlDemo: "https://uvyfx-hiaaa-aaaap-qhivq-cai.icp0.io/",
    },
    {
        id: 4,
        title: "Desarrollo Backend con Spring Boot",
        image: "/Spring.png",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/ArquitLab2",
        urlDemo: "https://github.com/AlejandroBecerraAcevedo/ArquitLab2",
    },
    {
        id: 5,
        title: "Desarrollo de Aplicación de votaciones descentralizadas GABBI DAO en ICP network",
        image: "/gabbii_dao_logo.jpg",
        urlGithub: "https://github.com/GovernCycle/govern-cycle",
        urlDemo: "https://asemq-fiaaa-aaaap-qht3q-cai.icp0.io/"
    },
    {
        id: 6,
        title: "Desarrollo de Aplicación de gestión de material reciclable urbano, descentralizada RecyExchange en APTOS network",
        image: "/Recyexchange.jpeg",
        urlGithub: "https://github.com/TaliaPalacio/RecyExchange/fork",
        urlDemo: "https://recy-exchange-petra-aptos.vercel.app/"
    }
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/Astronomic.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

export const SkillData = [
    {
        name: "Html 5",
        Image: "/html.png",
        width: 80,
        height: 80,
    },
    {
        name: "Css",
        Image: "/css.png",
        width: 80,
        height: 80,
    },
    {
        name: "JavaScript",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
    },
    {
        name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
    },
    {
        name: "mysql",
        Image: "/mysql.png",
        width: 80,
        height: 80,
    },
    {
        name: "TypeScript",
        Image: "/ts.png",
        width: 80,
        height: 80,
    },
    {
        name: "Next js 13",
        Image: "/next.png",
        width: 80,
        height: 80,
    },
    {
        name: "Node js",
        Image: "/node-js.png",
        width: 80,
        height: 80,
    },
    {
        name: "Mongo db",
        Image: "/mongodb.png",
        width: 40,
        height: 40,
    },
    {
        name: "Spring Boot",
        Image: "/Spring.png",
        width: 80,
        height: 80,
    },
    {
        name: "Motoko",
        Image: "/Motoko-1.png",
        width: 160,
        height: 160,
    },
    {
        name: "Azle",
        Image: "/Azle-1.png",
        width: 80,
        height: 80,
    },
  ];
  