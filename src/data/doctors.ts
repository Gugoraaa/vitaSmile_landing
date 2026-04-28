export interface Doctor {
  name: string;
  role: string;
  bio: string;
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Elena Reyes',
    role: 'Lead Prosthodontist',
    bio: 'Specializes in complex full-mouth rehabilitation and aesthetic veneer design.',
  },
  {
    name: 'Dr. Marcus Vance',
    role: 'Oral Surgeon & Implantologist',
    bio: 'Expert in guided implant surgery and advanced bone grafting techniques.',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Orthodontist',
    bio: 'Focuses on digital aligner therapy for functional and aesthetic smile alignment.',
  },
];
