// src/app/data/timeline-data.ts

export interface TimelineItem {
  title: string;
  date: string;
  description: string;
  latest?: boolean;
  link?: string;
}

export const LABORAL: TimelineItem[] = [
  {
    title: 'Frontend Developer',
    date: '2023 - Actualidad',
    description: 'Trabajando con Angular, Tailwind y Flowbite.',
    latest: true,
    link: '#'
  },
  {
    title: 'Desarrollador Junior',
    date: '2021 - 2023',
    description: 'Primeros pasos en desarrollo web en Empresa X.'
  }
];

export const ESTUDIOS: TimelineItem[] = [
  {
    title: 'Grado Superior Desarrollo Web',
    date: '2019 - 2021',
    description: 'Formación en programación y bases de datos.',
    latest: true
  },
  {
    title: 'Curso Online React',
    date: '2020',
    description: 'Curso especializado en React.js y hooks.'
  }
];
