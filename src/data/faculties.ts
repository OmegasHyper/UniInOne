import {
  Stethoscope,
  Cpu,
  FlaskConical,
  Code,
  Briefcase,
  Scale,
  Building2,
  BookOpen,
  Megaphone,
  Palette,
  Wheat,
} from 'lucide-react';

export interface Faculty {
  id: number;
  name: string;
  arabicName: string;
  category: string;
  description: string;
  departments: string[];
  duration: string;
  universities: string[];
  entryRequirements: string;
  studentsCount: string;
  accreditation: string[];
  careerProspects: string[];
  icon: React.ElementType;
  popularityRank: number;
  admissionCompetitiveness: 'Very High' | 'High' | 'Medium' | 'Moderate';
}

export const faculties: Faculty[] = [
  {
    id: 1,
    name: 'Faculty of Medicine',
    arabicName: 'كلية الطب',
    category: 'Health Sciences',
    description: 'The Faculty of Medicine offers comprehensive medical education leading to MD degree. Students learn clinical skills, medical sciences, and patient care through theoretical courses and hands-on clinical rotations in teaching hospitals.',
    departments: ['Human Medicine', 'Surgery', 'Pediatrics', 'Internal Medicine', 'Obstetrics & Gynecology', 'Radiology', 'Anesthesiology', 'Pathology'],
    duration: '6-7 years (including internship)',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Mansoura University', 'Assiut University'],
    entryRequirements: 'Minimum 95% in Thanawiya Amma (Science)',
    studentsCount: '2,500-3,500 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Medical Syndicate'],
    careerProspects: ['General Practitioner', 'Specialist Physician', 'Surgeon', 'Medical Researcher', 'Hospital Administrator'],
    icon: Stethoscope,
    popularityRank: 1,
    admissionCompetitiveness: 'Very High'
  },
  {
    id: 2,
    name: 'Faculty of Engineering',
    arabicName: 'كلية الهندسة',
    category: 'Engineering & Technology',
    description: 'Faculty of Engineering provides specialized education in various engineering disciplines. The program combines theoretical knowledge with practical applications, preparing graduates for careers in industry, research, and technology sectors.',
    departments: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Computer Engineering', 'Chemical Engineering', 'Architecture Engineering', 'Mechatronics', 'Petroleum Engineering'],
    duration: '5 years',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'German University in Cairo', 'Helwan University'],
    entryRequirements: 'Minimum 85-90% in Thanawiya Amma (Math)',
    studentsCount: '3,000-5,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Engineering Syndicate', 'ABET (for some programs)'],
    careerProspects: ['Design Engineer', 'Project Manager', 'Engineering Consultant', 'Research Engineer', 'Technical Director'],
    icon: Cpu,
    popularityRank: 2,
    admissionCompetitiveness: 'Very High'
  },
  {
    id: 3,
    name: 'Faculty of Pharmacy',
    arabicName: 'كلية الصيدلة',
    category: 'Health Sciences',
    description: 'Faculty of Pharmacy offers comprehensive pharmaceutical education covering drug sciences, pharmaceutical chemistry, pharmacology, and clinical pharmacy. Students gain knowledge in drug development, manufacturing, and patient-centered pharmaceutical care.',
    departments: ['Pharmaceutical Chemistry', 'Pharmacology', 'Clinical Pharmacy', 'Pharmaceutics', 'Pharmacognosy', 'Pharmaceutical Microbiology', 'Biochemistry'],
    duration: '5 years + 1 year internship',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Mansoura University', 'British University in Egypt'],
    entryRequirements: 'Minimum 90-92% in Thanawiya Amma (Science)',
    studentsCount: '1,500-2,500 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Pharmacists Syndicate'],
    careerProspects: ['Clinical Pharmacist', 'Industrial Pharmacist', 'Drug Researcher', 'Pharmacy Manager', 'Quality Control Specialist'],
    icon: FlaskConical,
    popularityRank: 3,
    admissionCompetitiveness: 'Very High'
  },
  {
    id: 4,
    name: 'Faculty of Computer and Information Science',
    arabicName: 'كلية الحاسبات والمعلومات',
    category: 'Engineering & Technology',
    description: 'This faculty focuses on computer science, information systems, artificial intelligence, and software engineering. Students learn programming, algorithms, database systems, cybersecurity, and emerging technologies.',
    departments: ['Computer Science', 'Information Systems', 'Information Technology', 'Software Engineering', 'Artificial Intelligence', 'Data Science', 'Cybersecurity'],
    duration: '4 years',
    universities: ['Cairo University', 'Helwan University', 'Ain Shams University', 'Assiut University', 'Mansoura University'],
    entryRequirements: 'Minimum 85-90% in Thanawiya Amma (Math)',
    studentsCount: '1,000-2,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Engineering Syndicate'],
    careerProspects: ['Software Developer', 'Data Scientist', 'AI Engineer', 'Systems Analyst', 'IT Consultant', 'Cybersecurity Specialist'],
    icon: Code,
    popularityRank: 4,
    admissionCompetitiveness: 'High'
  },
  {
    id: 5,
    name: 'Faculty of Business and Economics',
    arabicName: 'كلية التجارة',
    category: 'Business & Management',
    description: 'Faculty of Business provides education in business administration, accounting, economics, finance, and management. Students develop skills in strategic thinking, financial analysis, marketing, and entrepreneurship.',
    departments: ['Accounting', 'Business Administration', 'Economics', 'Finance', 'Marketing', 'Management Information Systems', 'Insurance & Risk Management'],
    duration: '4 years',
    universities: ['Cairo University', 'American University in Cairo', 'Ain Shams University', 'Alexandria University', 'German University in Cairo'],
    entryRequirements: 'Minimum 70-75% in Thanawiya Amma (Math or Literature)',
    studentsCount: '4,000-8,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'AACSB (for select programs)'],
    careerProspects: ['Financial Analyst', 'Management Consultant', 'Marketing Manager', 'Entrepreneur', 'Investment Banker', 'Business Development Manager'],
    icon: Briefcase,
    popularityRank: 5,
    admissionCompetitiveness: 'Medium'
  },
  {
    id: 6,
    name: 'Faculty of Law',
    arabicName: 'كلية الحقوق',
    category: 'Law & Legal Studies',
    description: 'Faculty of Law offers comprehensive legal education covering civil law, criminal law, international law, and Islamic law. The program prepares graduates for legal practice, judiciary, and legal consultancy.',
    departments: ['Civil Law', 'Criminal Law', 'Public Law', 'International Law', 'Commercial Law', 'Islamic Sharia', 'Legal History'],
    duration: '4 years',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Assiut University', 'Mansoura University'],
    entryRequirements: 'Minimum 75-80% in Thanawiya Amma (Literature)',
    studentsCount: '3,000-5,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Lawyers Syndicate'],
    careerProspects: ['Lawyer', 'Judge', 'Legal Consultant', 'Corporate Counsel', 'Legal Researcher', 'Public Prosecutor'],
    icon: Scale,
    popularityRank: 6,
    admissionCompetitiveness: 'Medium'
  },
  {
    id: 7,
    name: 'Faculty of Science',
    arabicName: 'كلية العلوم',
    category: 'Sciences',
    description: 'Faculty of Science provides education in pure and applied sciences including mathematics, physics, chemistry, biology, and geology. Students engage in theoretical studies and laboratory research.',
    departments: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geology', 'Biotechnology', 'Biophysics', 'Zoology', 'Botany'],
    duration: '4 years',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Suez Canal University', 'Tanta University'],
    entryRequirements: 'Minimum 80-85% in Thanawiya Amma (Science)',
    studentsCount: '2,000-3,500 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Scientific Syndicate'],
    careerProspects: ['Research Scientist', 'Lab Analyst', 'Quality Control Specialist', 'Academic Researcher', 'Environmental Consultant'],
    icon: FlaskConical,
    popularityRank: 7,
    admissionCompetitiveness: 'High'
  },
  {
    id: 8,
    name: 'Faculty of Architecture',
    arabicName: 'كلية الهندسة المعمارية',
    category: 'Engineering & Technology',
    description: 'Faculty of Architecture focuses on architectural design, urban planning, and sustainable development. Students learn to design buildings, landscapes, and urban spaces while considering aesthetic, functional, and environmental factors.',
    departments: ['Architectural Design', 'Urban Planning', 'Landscape Architecture', 'Interior Design', 'Building Technology', 'Sustainable Architecture'],
    duration: '5 years',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Helwan University', 'MSA University'],
    entryRequirements: 'Minimum 85-88% in Thanawiya Amma (Math) + Drawing Test',
    studentsCount: '500-1,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Engineering Syndicate'],
    careerProspects: ['Architect', 'Urban Planner', 'Interior Designer', 'Landscape Architect', 'Project Manager', 'Sustainable Design Consultant'],
    icon: Building2,
    popularityRank: 8,
    admissionCompetitiveness: 'High'
  },
  {
    id: 9,
    name: 'Faculty of Arts and Humanities',
    arabicName: 'كلية الآداب',
    category: 'Arts & Humanities',
    description: 'Faculty of Arts offers programs in languages, literature, history, philosophy, geography, and social sciences. Students develop critical thinking, research skills, and cultural understanding.',
    departments: ['English Language', 'Arabic Language', 'History', 'Geography', 'Philosophy', 'Psychology', 'Sociology', 'Anthropology', 'French Language'],
    duration: '4 years',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Helwan University', 'Zagazig University'],
    entryRequirements: 'Minimum 65-70% in Thanawiya Amma (Literature)',
    studentsCount: '5,000-10,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE'],
    careerProspects: ['Teacher/Educator', 'Translator', 'Content Writer', 'Researcher', 'Cultural Consultant', 'Social Worker'],
    icon: BookOpen,
    popularityRank: 9,
    admissionCompetitiveness: 'Moderate'
  },
  {
    id: 10,
    name: 'Faculty of Mass Communication',
    arabicName: 'كلية الإعلام',
    category: 'Media & Communication',
    description: 'Faculty of Mass Communication prepares students for careers in journalism, broadcasting, public relations, and digital media. The program combines theoretical knowledge with practical media production skills.',
    departments: ['Journalism', 'Radio & Television', 'Public Relations', 'Advertising', 'Digital Media', 'Film Production', 'Media Studies'],
    duration: '4 years',
    universities: ['Cairo University', 'American University in Cairo', 'Ain Shams University', 'South Valley University', 'MSA University'],
    entryRequirements: 'Minimum 75-80% in Thanawiya Amma (Literature)',
    studentsCount: '1,000-2,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Journalists Syndicate'],
    careerProspects: ['Journalist', 'TV Producer', 'PR Specialist', 'Social Media Manager', 'Content Creator', 'Media Consultant'],
    icon: Megaphone,
    popularityRank: 10,
    admissionCompetitiveness: 'Medium'
  },
  {
    id: 11,
    name: 'Faculty of Fine Arts',
    arabicName: 'كلية الفنون الجميلة',
    category: 'Arts & Humanities',
    description: 'Faculty of Fine Arts provides education in visual arts, including painting, sculpture, graphic design, and art history. Students develop artistic skills and creative expression through studio practice and theoretical studies.',
    departments: ['Painting', 'Sculpture', 'Graphic Design', 'Photography', 'Art History', 'Ceramics', 'Textile Design', 'Interior Design'],
    duration: '4-5 years',
    universities: ['Helwan University', 'Alexandria University', 'Minia University', 'Luxor University', 'MSA University'],
    entryRequirements: 'Minimum 65-70% in Thanawiya Amma + Art Portfolio/Test',
    studentsCount: '500-1,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Fine Arts Syndicate'],
    careerProspects: ['Visual Artist', 'Graphic Designer', 'Art Director', 'Gallery Curator', 'Art Teacher', 'Illustrator'],
    icon: Palette,
    popularityRank: 11,
    admissionCompetitiveness: 'Medium'
  },
  {
    id: 12,
    name: 'Faculty of Agriculture',
    arabicName: 'كلية الزراعة',
    category: 'Agricultural Sciences',
    description: 'Faculty of Agriculture focuses on agricultural sciences, food production, animal husbandry, and sustainable farming. Students learn modern agricultural techniques, crop management, and food security strategies.',
    departments: ['Agronomy', 'Animal Production', 'Agricultural Economics', 'Horticulture', 'Soil Science', 'Food Technology', 'Agricultural Engineering', 'Plant Pathology'],
    duration: '4 years',
    universities: ['Cairo University', 'Alexandria University', 'Ain Shams University', 'Mansoura University', 'Assiut University'],
    entryRequirements: 'Minimum 70-75% in Thanawiya Amma (Science)',
    studentsCount: '2,000-3,000 per university',
    accreditation: ['Supreme Council of Universities', 'NAQAAE', 'Agricultural Syndicate'],
    careerProspects: ['Agricultural Engineer', 'Farm Manager', 'Food Scientist', 'Agricultural Consultant', 'Crop Specialist', 'Research Scientist'],
    icon: Wheat,
    popularityRank: 12,
    admissionCompetitiveness: 'Moderate'
  }
];

export function getFacultyById(id: number): Faculty | undefined {
  return faculties.find(faculty => faculty.id === id);
}

