import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Star, 
  Calendar, 
  Globe, 
  Phone, 
  Mail, 
  GraduationCap,
  DollarSign,
  Building,
  Clock,
  Award,
  BookOpen,
  UserCheck
} from 'lucide-react';
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

interface UniversityDetailProps {
  university: University;
  onBack: () => void;
}

export function UniversityDetail({ university, onBack }: UniversityDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const facilities = [
    'Modern Libraries', 'Research Labs', 'Sports Complex', 'Student Housing',
    'Medical Center', 'Conference Halls', 'Computer Labs', 'Cafeterias'
  ];

  const admissionRequirements = [
    { level: 'Undergraduate', requirement: 'High School Certificate (Thanaweya Amma) with minimum 75%' },
    { level: 'Graduate', requirement: 'Bachelor\'s degree with minimum GPA 3.0' },
    { level: 'PhD', requirement: 'Master\'s degree with research experience' },
    { level: 'International', requirement: 'Equivalent certificates + English proficiency test' }
  ];

  const programs = [
    { name: 'Medicine', duration: '6 years', tuition: 'EGP 15,000/year', capacity: '200 students' },
    { name: 'Engineering', duration: '5 years', tuition: 'EGP 12,000/year', capacity: '500 students' },
    { name: 'Business Administration', duration: '4 years', tuition: 'EGP 8,000/year', capacity: '300 students' },
    { name: 'Computer Science', duration: '4 years', tuition: 'EGP 10,000/year', capacity: '250 students' },
    { name: 'Law', duration: '4 years', tuition: 'EGP 6,000/year', capacity: '200 students' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button 
        variant="outline" 
        onClick={onBack}
        className="mb-6 flex items-center space-x-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Universities</span>
      </Button>

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <ImageWithFallback
          src={university.image}
          alt={university.name}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge variant={university.type === 'Public' ? 'default' : 'secondary'}>
                    {university.type}
                  </Badge>
                  <Badge className="bg-emerald-600">Ranking #{university.ranking}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{university.name}</h1>
                <p className="text-lg opacity-90">{university.arabicName}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{university.city}, Egypt</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {university.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{university.rating}/5.0</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Apply Now
                </Button>
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Contact Admissions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">{university.students}</div>
            <div className="text-sm text-gray-600">Students</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <GraduationCap className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">{university.programs.length}+</div>
            <div className="text-sm text-gray-600">Programs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">#{university.ranking}</div>
            <div className="text-sm text-gray-600">National Ranking</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">{new Date().getFullYear() - university.founded}+</div>
            <div className="text-sm text-gray-600">Years of Excellence</div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="admissions">Admissions</TabsTrigger>
          <TabsTrigger value="tuition">Tuition</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About {university.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {university.description} Established in {university.founded}, this prestigious institution has been 
                shaping the minds of Egypt's future leaders for over {new Date().getFullYear() - university.founded} years. 
                With a diverse student body of {university.students} students and world-class faculty, 
                the university offers an exceptional educational experience that combines traditional academic excellence 
                with modern research and innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-emerald-600" />
                      <span>Top #{university.ranking} university in Egypt</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span>Over {university.students} enrolled students</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-emerald-600" />
                      <span>International partnerships and exchange programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-emerald-600" />
                      <span>Comprehensive research and academic programs</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{university.city}, Egypt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>+20 2 1234 5678</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>admissions@{university.name.toLowerCase().replace(/\s+/g, '')}.edu.eg</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span>www.{university.name.toLowerCase().replace(/\s+/g, '')}.edu.eg</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {programs.map((program, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{program.name}</h4>
                      <Badge variant="outline">{program.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{program.tuition}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{program.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admission Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {admissionRequirements.map((req, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900">{req.level} Programs</h4>
                    <p className="text-gray-700">{req.requirement}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Application Timeline</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Fall Semester:</strong> Applications due March 31st
                  </div>
                  <div>
                    <strong>Spring Semester:</strong> Applications due October 31st
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tuition" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tuition & Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Tuition Range</h3>
                  <p className="text-3xl font-bold text-emerald-600">{university.tuitionRange}</p>
                  <p className="text-sm text-gray-600 mt-2">Varies by program and student type</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Egyptian Students</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Undergraduate: EGP 1,500 - 8,000/year</li>
                      <li>• Graduate: EGP 3,000 - 12,000/year</li>
                      <li>• PhD: EGP 2,000 - 6,000/year</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">International Students</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Undergraduate: USD 2,000 - 5,000/year</li>
                      <li>• Graduate: USD 3,000 - 8,000/year</li>
                      <li>• PhD: USD 2,500 - 6,000/year</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Scholarships Available</h4>
                  <p className="text-sm text-yellow-700">
                    Merit-based scholarships, need-based financial aid, and international student scholarships are available. 
                    Contact the admissions office for more information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facilities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campus Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">{facility}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Academic Resources</h4>
                    <ul className="text-sm space-y-1">
                      <li>• State-of-the-art laboratories</li>
                      <li>• Digital library with 100,000+ books</li>
                      <li>• Research centers and institutes</li>
                      <li>• Computer labs with latest technology</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Student Life</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Student housing and dormitories</li>
                      <li>• Sports complex and gymnasium</li>
                      <li>• Student clubs and organizations</li>
                      <li>• Cultural events and activities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Location & Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Address</h4>
                    <p className="text-gray-700 mb-4">
                      Main Campus<br />
                      {university.city}, Egypt<br />
                      Postal Code: 12345
                    </p>
                    
                    <h4 className="font-semibold mb-3">Transportation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Metro: Nearest station 10 minutes walk</li>
                      <li>• Bus: Multiple routes serve the campus</li>
                      <li>• Parking: Available for students and staff</li>
                      <li>• Airport: 45 minutes by car</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive map would be displayed here</p>
                      <p className="text-sm">showing campus location and nearby amenities</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Nearby Amenities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <span>• Shopping Centers</span>
                    <span>• Restaurants</span>
                    <span>• Banks</span>
                    <span>• Hospitals</span>
                    <span>• Hotels</span>
                    <span>• Museums</span>
                    <span>• Parks</span>
                    <span>• Libraries</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}