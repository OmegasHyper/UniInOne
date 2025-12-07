import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, MapPin, Users, Star, Calendar, Filter, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface University {
  id: number;
  name: string;
  arabicName: string;
  city: string;
  type: 'Public' | 'Private';
  founded: number;
  students: string;
  ranking: number;
  image: string;
  programs: string[];
  tuitionRange: string;
  rating: number;
  description: string;
}

interface UniversitiesPageProps {
  onUniversitySelect: (university: University) => void;
}

export function UniversitiesPage({ onUniversitySelect }: UniversitiesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ranking');

  const universities: University[] = [
    {
      id: 1,
      name: 'Cairo University',
      arabicName: 'جامعة القاهرة',
      city: 'Cairo',
      type: 'Public',
      founded: 1908,
      students: '155,000+',
      ranking: 1,
      image: 'https://images.unsplash.com/photo-1680617877570-00ca36572206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHVuaXZlcnNpdHklMjBjYWlyb3xlbnwxfHx8fDE3NTc3ODAzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      programs: ['Medicine', 'Engineering', 'Law', 'Business', 'Arts'],
      tuitionRange: 'EGP 1,500 - 15,000',
      rating: 4.8,
      description: 'Egypt\'s premier university, renowned for academic excellence and research innovation.'
    },
    {
      id: 2,
      name: 'American University in Cairo',
      arabicName: 'الجامعة الأمريكية بالقاهرة',
      city: 'Cairo',
      type: 'Private',
      founded: 1919,
      students: '7,000+',
      ranking: 2,
      image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdW5pdmVyc2l0eSUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3NzgwMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      programs: ['Business', 'Engineering', 'Computer Science', 'Political Science', 'Psychology'],
      tuitionRange: 'USD 15,000 - 25,000',
      rating: 4.7,
      description: 'Leading liberal arts university offering American-style education in Egypt.'
    },
    {
      id: 3,
      name: 'Alexandria University',
      arabicName: 'جامعة الإسكندرية',
      city: 'Alexandria',
      type: 'Public',
      founded: 1942,
      students: '180,000+',
      ranking: 3,
      image: 'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc1NzY5MzY2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      programs: ['Medicine', 'Engineering', 'Agriculture', 'Pharmacy', 'Science'],
      tuitionRange: 'EGP 1,200 - 12,000',
      rating: 4.6,
      description: 'Historic university known for medical and engineering programs with Mediterranean campus.'
    },
    {
      id: 4,
      name: 'Ain Shams University',
      arabicName: 'جامعة عين شمس',
      city: 'Cairo',
      type: 'Public',
      founded: 1950,
      students: '200,000+',
      ranking: 4,
      image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTc3ODAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      programs: ['Medicine', 'Engineering', 'Commerce', 'Education', 'Computer Science'],
      tuitionRange: 'EGP 1,800 - 18,000',
      rating: 4.5,
      description: 'Comprehensive university with strong research focus and diverse academic programs.'
    },
    {
      id: 5,
      name: 'German University in Cairo',
      arabicName: 'الجامعة الألمانية بالقاهرة',
      city: 'Cairo',
      type: 'Private',
      founded: 2003,
      students: '12,000+',
      ranking: 5,
      image: 'https://images.unsplash.com/photo-1612277107663-a65c0f67be64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNTc3NzI2MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      programs: ['Engineering', 'Management', 'Information Technology', 'Applied Sciences'],
      tuitionRange: 'EUR 4,000 - 8,000',
      rating: 4.6,
      description: 'German-Egyptian partnership offering European-standard education and research.'
    },
    {
      id: 6,
      name: 'Mansoura University',
      arabicName: 'جامعة المنصورة',
      city: 'Mansoura',
      type: 'Public',
      founded: 1972,
      students: '140,000+',
      ranking: 6,
      image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdW5pdmVyc2l0eSUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3NzgwMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      programs: ['Medicine', 'Engineering', 'Science', 'Agriculture', 'Veterinary Medicine'],
      tuitionRange: 'EGP 1,400 - 14,000',
      rating: 4.4,
      description: 'Leading regional university with excellent medical and engineering faculties.'
    }
  ];

  const cities = ['all', 'Cairo', 'Alexandria', 'Giza', 'Mansoura', 'Assiut'];
  const types = ['all', 'Public', 'Private'];

  const filteredUniversities = universities
    .filter(uni => {
      const matchesSearch = searchQuery === '' || 
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.programs.some(program => program.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCity = cityFilter === 'all' || uni.city === cityFilter;
      const matchesType = typeFilter === 'all' || uni.type === typeFilter;
      return matchesSearch && matchesCity && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'ranking': return a.ranking - b.ranking;
        case 'name': return a.name.localeCompare(b.name);
        case 'students': return parseInt(b.students.replace(/[^\d]/g, '')) - parseInt(a.students.replace(/[^\d]/g, ''));
        case 'founded': return b.founded - a.founded;
        default: return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Universities in Egypt</h1>
        <p className="text-gray-600">Discover and compare top universities across Egypt</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search universities or programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* City Filter */}
          <Select value={cityFilter} onValueChange={setCityFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              {cities.map(city => (
                <SelectItem key={city} value={city}>
                  {city === 'all' ? 'All Cities' : city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Type Filter */}
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              {types.map(type => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
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
              <SelectItem value="ranking">Ranking</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="students">Student Count</SelectItem>
              <SelectItem value="founded">Year Founded</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredUniversities.length} of {universities.length} universities
        </p>
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={university.image}
                  alt={university.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={university.type === 'Public' ? 'default' : 'secondary'}>
                    {university.type}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-emerald-600 text-white">
                    #{university.ranking}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {university.name}
                  </h3>
                  <p className="text-sm text-gray-600">{university.arabicName}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{university.city}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{university.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{university.students}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {university.founded}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {university.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Popular Programs:</p>
                  <div className="flex flex-wrap gap-1">
                    {university.programs.slice(0, 3).map((program, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                    {university.programs.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{university.programs.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Tuition Range</p>
                      <p className="text-sm font-medium text-gray-900">{university.tuitionRange}</p>
                    </div>
                    <Button
                      onClick={() => onUniversitySelect(university)}
                      size="sm"
                      className="bg-blue-900 hover:bg-blue-800"
                    >
                      View Details
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No universities found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  );
}