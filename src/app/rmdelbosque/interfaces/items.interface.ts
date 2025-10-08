export interface TimelineItem {
  title: string;
  date: string;
  description: string;
  company?: string;
  latest?: boolean;
  link?: string;
}
export const LABORAL: TimelineItem[] = [
  {
    title: 'Desarrollador de Power BI + SQL',
    date: '12/2024 - Actualidad',
    company: 'Fundación Para la Investigación Biomédica | Hospital Puerta de Hierro ',
    link: 'https://investigacionpuertadehierro.com/',
    description: 'Responsable de la adaptación y personalización de bases de datos para suexplotación en Power BI.',
    latest: true,
  },
  {
    title: 'Profesor de Unity C# y revisor de proyectos',
    date: '07/2019 - 12/2024',
    company: 'CEV Online',
    link: 'https://www.cev.com/',
    description: 'Responsable de la revisión, evaluación y corrección de proyectos de videojuegosdesarrollados en Unity y C#.'
  },
  {
    title: 'Desarrollador Junior de AR y VR',
    date: '05/2018 - 05/2019',
    company: 'Presentys',
    link: 'https://www.presentys.com/',
    description: 'Responsable de desarrollar aplicaciones de Realidad Virtual y Aumentada, integrandoUnity, C# y bases de datos para simulación industrial..'
  },
  {
    title: 'Desarrollador Junior de VR',
    date: '03/2017 - 03/2018',
    company: 'Praramotion Films',
    link: 'https://www.paramotionfilms.es/es/',
    description: 'Responsable de la creación de proyectos de Realidad Virtual utilizando Unity y C#.'
  }
];

export const ESTUDIOS: TimelineItem[] = [
  // {
  //   title: 'Curso Online Angular',
  //   date: '2025',
  //   description: 'Curso de 30 horas especializado en Angular.',
  //   latest: true
  // },
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    date: '2022 - 2024',
    description: 'FP Superior en Desarrollo multiplataforma, tanto aplicaciones móviles, como bases de datos y desarrollo web.'
  },
  {
    title: 'Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos',
    date: '2015 - 2017',
    description: 'FP Superior en desarrollo de videojuegos, tanto el diseño artistico con 2D y 3D, como la programación con motores gráficos como Unity.',
  },
  {
    title: 'Técnico en Sistemas Microinformáticos y Redes',
    date: '2012 - 2014',
    description: 'FP de Grado Medio especializado en informática, tanto software, como hardware. Aprendes la base de todo lo necesario para ser técnico informático.',
  }
];
