import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, MapPin, Users, Star, Calendar, Filter, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useUniversities } from '../context/UniversitiesContext';

export function UniversitiesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { universities } = useUniversities();
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ranking');

  // Get search query from URL params on mount
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam));
    }
  }, [searchParams]);

  // Update URL when user presses Enter
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSearchParams = new URLSearchParams(searchParams);
      if (searchQuery.trim()) {
        newSearchParams.set('search', searchQuery.trim());
      } else {
        newSearchParams.delete('search');
      }
      navigate(`/universities?${newSearchParams.toString()}`, { replace: true });
    }
  };

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
        <h1 className="text-3xl font-bold text-foreground mb-2">Universities in Egypt</h1>
        <p className="text-muted-foreground">Discover and compare top universities across Egypt</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-card dark:bg-gray-800/50 rounded-xl shadow-sm border border-border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search universities or programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
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
        <p className="text-muted-foreground">
          Showing {filteredUniversities.length} of {universities.length} universities
        </p>
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-400 dark:hover:border-blue-500">
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
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {university.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{university.arabicName}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{university.students}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {university.founded}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {university.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Popular Programs:</p>
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

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Tuition Range</p>
                      <p className="text-sm font-medium text-foreground">{university.tuitionRange}</p>
                    </div>
                    <Button
                      onClick={() => navigate(`/universities/${university.id}`)}
                      size="sm"
                      className="bg-blue-900 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700"
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
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No universities found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  );
}