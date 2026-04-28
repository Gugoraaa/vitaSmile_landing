export interface FeaturedTreatment {
  category: string;
  title: string;
  tagline: string;
  image: string;
}

export interface ComplementaryTreatment {
  icon: string;
  title: string;
  description: string;
}

export const featuredTreatments: FeaturedTreatment[] = [
  {
    category: 'Estética dental',
    title: 'Carillas',
    tagline: 'Transforma tu sonrisa con resultados naturales. Veremos el resultado antes de iniciar el proceso.',
    image: 'https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Restauración avanzada',
    title: 'Rehabilitación integral adhesiva',
    tagline: 'Técnicas que salvan tus dientes evitando perderlos y recuperando su estética y función sin sacrificar más tejido sano.',
    image: 'https://images.unsplash.com/photo-1661438818937-437f1aeaf08e?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Implantología',
    title: 'Implantes',
    tagline: 'Reemplazamos dientes que, lamentablemente, has perdido en el camino, mediante técnicas guiadas.',
    image: 'https://images.unsplash.com/photo-1617812191081-2a24e3f30e45?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Alineación dental',
    title: 'Ortodoncia',
    tagline: 'Necesitamos dientes alineados que funcionen correctamente para lograr tu sonrisa soñada.',
    image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=800&q=80',
  },
];

export const complementaryTreatments: ComplementaryTreatment[] = [
  {
    icon: 'auto_fix_high',
    title: 'Resinas y eliminación de caries',
    description: 'Eliminamos las caries de forma mínima y conservadora.',
  },
  {
    icon: 'shield',
    title: 'Hábito bruxista',
    description: 'Protegemos tus dientes del desgaste mientras duermes.',
  },
  {
    icon: 'favorite',
    title: 'Salud de tus encías',
    description: 'El sangrado en tu cepillado no es normal.',
  },
  {
    icon: 'vaccines',
    title: 'Endodoncia',
    description: 'El dolor de dientes no es normal, pero lo eliminamos.',
  },
  {
    icon: 'medical_services',
    title: 'Extracciones · Cirugía',
    description: 'Muela del juicio y procedimientos de precisión.',
  },
];
