import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Clock,
  MapPin
} from 'lucide-react';
import { faculties, type Faculty } from '../data/faculties';

export function FacultiesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

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
      case 'Very High': return 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300';
      case 'High': return 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300';
      case 'Medium': return 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300';
      case 'Moderate': return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
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
            <h1 className="text-3xl text-foreground">University Faculties</h1>
            <p className="text-muted-foreground">كليات الجامعات المصرية</p>
          </div>
        </div>
        <p className="text-muted-foreground mt-2">Explore academic faculties and their specialized departments across Egyptian universities</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-card dark:bg-gray-800/50 rounded-xl shadow-sm border border-border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
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
        <p className="text-muted-foreground">
          Showing {filteredFaculties.length} of {faculties.length} faculties
        </p>
      </div>

      {/* Faculties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFaculties.map((faculty) => {
          const IconComponent = faculty.icon;
          return (
            <Card key={faculty.id} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-blue-400 dark:hover:border-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{faculty.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{faculty.arabicName}</p>
                      <Badge className="mt-2 bg-blue-50 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/70">
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
                <p className="text-sm text-foreground leading-relaxed">{faculty.description}</p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{faculty.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Users className="h-4 w-4" />
                      <span>Students</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{faculty.studentsCount}</p>
                  </div>
                </div>

                {/* Entry Requirements */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-foreground">Entry Requirements:</p>
                    <Badge className={getCompetitivenessColor(faculty.admissionCompetitiveness)}>
                      {faculty.admissionCompetitiveness}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground bg-muted dark:bg-gray-700/50 p-2 rounded-md">{faculty.entryRequirements}</p>
                </div>

                {/* Departments */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
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
                  <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Available At:
                  </p>
                  <div className="space-y-1">
                    {faculty.universities.slice(0, 3).map((uni, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                        <span>{uni}</span>
                      </div>
                    ))}
                    {faculty.universities.length > 3 && (
                      <p className="text-xs text-muted-foreground ml-3.5">+{faculty.universities.length - 3} more universities</p>
                    )}
                  </div>
                </div>

                {/* Career Prospects */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
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
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Accredited by:</p>
                  <p className="text-xs text-muted-foreground">{faculty.accreditation.join(' • ')}</p>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 mt-4"
                  onClick={() => navigate(`/faculties/${faculty.id}`)}
                >
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
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 dark:from-blue-900/50 to-emerald-100 dark:to-emerald-900/50 rounded-full flex items-center justify-center">
            <Search className="h-10 w-10 text-blue-900 dark:text-blue-400" />
          </div>
          <h3 className="text-lg text-foreground mb-2">No faculties found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Statistics Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-600 rounded-xl p-10 text-white relative overflow-hidden shadow-sm border border-transparent">
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
      <div className="mt-12 bg-card dark:bg-gray-800/50 rounded-xl p-8 border border-border shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg text-foreground mb-2">About University Faculties</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
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