import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  ArrowLeft,
  Users,
  Clock,
  Award,
  BookOpen,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Building2,
  Briefcase,
  Shield,
} from 'lucide-react';
import { getFacultyById } from '../data/faculties';

export function FacultyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const faculty = id ? getFacultyById(parseInt(id)) : undefined;
  const [activeTab, setActiveTab] = useState('overview');

  if (!faculty) {
    return <Navigate to="/faculties" replace />;
  }

  const IconComponent = faculty.icon;

  const getCompetitivenessColor = (level: string) => {
    switch (level) {
      case 'Very High': return 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700';
      case 'High': return 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700';
      case 'Medium': return 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700';
      case 'Moderate': return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button
        variant="outline"
        onClick={() => navigate('/faculties')}
        className="mb-6 flex items-center space-x-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Faculties</span>
      </Button>

      {/* Header Section */}
      <Card className="mb-6 shadow-sm border border-border bg-card dark:bg-gray-800/50">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <IconComponent className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{faculty.name}</h1>
                  <p className="text-xl text-muted-foreground mb-3">{faculty.arabicName}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-50 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                      {faculty.category}
                    </Badge>
                    <Badge className={getCompetitivenessColor(faculty.admissionCompetitiveness)}>
                      {faculty.admissionCompetitiveness} Competition
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white">
                      Rank #{faculty.popularityRank}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-lg">{faculty.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-900 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-lg font-semibold text-foreground">{faculty.duration}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-900 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Student Capacity</p>
                <p className="text-lg font-semibold text-foreground">{faculty.studentsCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-purple-900 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Departments</p>
                <p className="text-lg font-semibold text-foreground">{faculty.departments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="universities">Universities</TabsTrigger>
          <TabsTrigger value="careers">Careers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                  Entry Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{faculty.entryRequirements}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Admission Competitiveness:</p>
                  <Badge className={getCompetitivenessColor(faculty.admissionCompetitiveness)}>
                    {faculty.admissionCompetitiveness}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Shield className="h-5 w-5 text-emerald-900 dark:text-emerald-400" />
                  Accreditation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {faculty.accreditation.map((acc, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-foreground">{acc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Building2 className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                All Departments ({faculty.departments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {faculty.departments.map((dept, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-gray-700/50 rounded-lg border border-blue-200 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-600/50 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{dept}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="universities" className="space-y-6">
          <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                Available Universities ({faculty.universities.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {faculty.universities.map((uni, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-gray-800/70 rounded-lg border border-emerald-200 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-700/70 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-2.5 h-2.5 bg-emerald-600 dark:bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">{uni}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="careers" className="space-y-6">
          <Card className="shadow-sm border border-border bg-card dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Briefcase className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                Career Prospects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {faculty.careerProspects.map((career, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-gray-800/70 rounded-lg border border-emerald-200 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-700/70 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors group-hover:scale-110" />
                    <span className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">{career}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Info */}
      <Card className="shadow-sm border border-border bg-gradient-to-r from-blue-900 to-emerald-600 text-white">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold mb-4">Why Choose This Faculty?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Comprehensive Education</p>
                <p className="text-blue-100 dark:text-blue-200 text-sm">
                  {faculty.description.substring(0, 100)}...
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Industry Recognition</p>
                <p className="text-blue-100 dark:text-blue-200 text-sm">
                  Accredited by {faculty.accreditation.length} professional organizations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Wide Availability</p>
                <p className="text-blue-100 dark:text-blue-200 text-sm">
                  Offered at {faculty.universities.length} leading universities across Egypt
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Career Opportunities</p>
                <p className="text-blue-100 dark:text-blue-200 text-sm">
                  {faculty.careerProspects.length}+ diverse career paths available
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

