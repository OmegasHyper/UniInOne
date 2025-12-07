import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Search, 
  GraduationCap,
  Users,
  BookOpen,
  Stethoscope,
  Code,
  Calculator,
  Scale,
  Cpu,
  Building2,
  FlaskConical,
  Briefcase,
  Palette,
  Megaphone,
  Wheat,
  Award,
  Clock,
  MapPin
} from 'lucide-react';

interface Faculty {
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

export function FacultiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const faculties: Faculty[] = [
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

  const categories = ['all', 'Health Sciences', 'Engineering & Technology', 'Business & Management', 'Law & Legal Studies', 'Sciences', 'Arts & Humanities', 'Media & Communication', 'Agricultural Sciences'];

  const filteredFaculties = faculties
    .filter(faculty => {
      const matchesSearch = searchQuery === '' || 
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.arabicName.includes(searchQuery) ||
        faculty.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.departments.some(dept => dept.toLowerCase().includes(searchQuery.toLowerCase())) ||
        faculty.universities.some(uni => uni.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = categoryFilter === 'all' || faculty.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity': return a.popularityRank - b.popularityRank;
        case 'name': return a.name.localeCompare(b.name);
        case 'duration': return parseInt(a.duration) - parseInt(b.duration);
        case 'competitiveness': {
          const order = { 'Very High': 0, 'High': 1, 'Medium': 2, 'Moderate': 3 };
          return order[a.admissionCompetitiveness] - order[b.admissionCompetitiveness];
        }
        default: return 0;
      }
    });

  const getCompetitivenessColor = (level: string) => {
    switch (level) {
      case 'Very High': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Moderate': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-emerald-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl text-gray-900">University Faculties</h1>
            <p className="text-gray-600">كليات الجامعات المصرية</p>
          </div>
        </div>
        <p className="text-gray-600 mt-2">Explore academic faculties and their specialized departments across Egyptian universities</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search faculties, departments, or universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
              <SelectItem value="competitiveness">Competitiveness</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredFaculties.length} of {faculties.length} faculties
        </p>
      </div>

      {/* Faculties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFaculties.map((faculty) => {
          const IconComponent = faculty.icon;
          return (
            <Card key={faculty.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-400">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{faculty.name}</CardTitle>
                      <p className="text-sm text-gray-600">{faculty.arabicName}</p>
                      <Badge className="mt-2 bg-blue-50 text-blue-900 hover:bg-blue-100">
                        {faculty.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white">
                    #{faculty.popularityRank}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">{faculty.description}</p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-3 py-3 border-t border-b">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <p className="text-sm font-medium">{faculty.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Users className="h-4 w-4" />
                      <span>Students</span>
                    </div>
                    <p className="text-sm font-medium">{faculty.studentsCount}</p>
                  </div>
                </div>

                {/* Entry Requirements */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">Entry Requirements:</p>
                    <Badge className={getCompetitivenessColor(faculty.admissionCompetitiveness)}>
                      {faculty.admissionCompetitiveness}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded-md">{faculty.entryRequirements}</p>
                </div>

                {/* Departments */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Main Departments:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {faculty.departments.slice(0, 4).map((dept, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {dept}
                      </Badge>
                    ))}
                    {faculty.departments.length > 4 && (
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-900">
                        +{faculty.departments.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Universities */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Available At:
                  </p>
                  <div className="space-y-1">
                    {faculty.universities.slice(0, 3).map((uni, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                        <span>{uni}</span>
                      </div>
                    ))}
                    {faculty.universities.length > 3 && (
                      <p className="text-xs text-gray-500 ml-3.5">+{faculty.universities.length - 3} more universities</p>
                    )}
                  </div>
                </div>

                {/* Career Prospects */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Career Prospects:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {faculty.careerProspects.slice(0, 3).map((career, index) => (
                      <Badge key={index} className="text-xs bg-emerald-50 text-emerald-800 hover:bg-emerald-100">
                        {career}
                      </Badge>
                    ))}
                    {faculty.careerProspects.length > 3 && (
                      <Badge className="text-xs bg-emerald-50 text-emerald-800">
                        +{faculty.careerProspects.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Accreditation */}
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500 mb-1">Accredited by:</p>
                  <p className="text-xs text-gray-600">{faculty.accreditation.join(' • ')}</p>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 mt-4">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredFaculties.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center">
            <Search className="h-10 w-10 text-blue-900" />
          </div>
          <h3 className="text-lg text-gray-900 mb-2">No faculties found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Statistics Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-600 rounded-2xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <h2 className="text-2xl mb-8 text-center relative z-10">Higher Education in Egypt</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div className="text-center">
            <div className="text-4xl mb-2">50+</div>
            <div className="text-blue-100">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">300+</div>
            <div className="text-blue-100">Academic Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">3M+</div>
            <div className="text-blue-100">Enrolled Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">150K+</div>
            <div className="text-blue-100">Annual Graduates</div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg text-gray-900 mb-2">About University Faculties</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Egyptian universities are organized into specialized faculties, each offering comprehensive education in specific fields. 
              Each faculty contains multiple departments and specializations, providing students with deep expertise in their chosen field. 
              Faculties maintain high academic standards through accreditation from professional syndicates and quality assurance organizations, 
              ensuring graduates are well-prepared for their careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}