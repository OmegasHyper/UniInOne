import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  GraduationCap,
  Users,
  Calendar,
  DollarSign,
  MapPin,
  Star,
  X,
  Plus,
  Check,
} from 'lucide-react';

interface University {
  id: number;
  name: string;
  city: string;
  type: 'Public' | 'Private';
  founded: number;
  students: string;
  tuitionRange: string;
  ranking: number;
  rating: number;
  programs: string[];
}

export function ComparePage() {
  const [selectedUniversities, setSelectedUniversities] = useState<(University | null)[]>([
    null,
    null,
  ]);

  const universities: University[] = [
    {
      id: 1,
      name: 'Cairo University',
      city: 'Cairo',
      type: 'Public',
      founded: 1908,
      students: '155,000',
      tuitionRange: 'EGP 1,500 - 5,000/year',
      ranking: 1,
      rating: 4.5,
      programs: ['Medicine', 'Engineering', 'Law', 'Economics'],
    },
    {
      id: 2,
      name: 'American University in Cairo',
      city: 'Cairo',
      type: 'Private',
      founded: 1919,
      students: '6,500',
      tuitionRange: '$15,000 - $25,000/year',
      ranking: 2,
      rating: 4.8,
      programs: ['Business', 'Engineering', 'Liberal Arts', 'Sciences'],
    },
    {
      id: 3,
      name: 'Ain Shams University',
      city: 'Cairo',
      type: 'Public',
      founded: 1950,
      students: '180,000',
      tuitionRange: 'EGP 1,500 - 5,000/year',
      ranking: 3,
      rating: 4.3,
      programs: ['Medicine', 'Pharmacy', 'Engineering', 'Arts'],
    },
    {
      id: 4,
      name: 'Alexandria University',
      city: 'Alexandria',
      type: 'Public',
      founded: 1942,
      students: '150,000',
      tuitionRange: 'EGP 1,500 - 5,000/year',
      ranking: 4,
      rating: 4.4,
      programs: ['Medicine', 'Engineering', 'Agriculture', 'Pharmacy'],
    },
  ];

  const handleSelectUniversity = (university: University, index: number) => {
    const newSelected = [...selectedUniversities];
    newSelected[index] = university;
    setSelectedUniversities(newSelected);
  };

  const handleRemoveUniversity = (index: number) => {
    const newSelected = [...selectedUniversities];
    newSelected[index] = null;
    setSelectedUniversities(newSelected);
  };

  const availableUniversities = universities.filter(
    (uni) => !selectedUniversities.some((selected) => selected?.id === uni.id)
  );

  const ComparisonMetric = ({
    icon: Icon,
    label,
    values,
  }: {
    icon: any;
    label: string;
    values: (string | number)[];
  }) => (
    <div className="border-b last:border-b-0 py-4">
      <div className="flex items-center gap-2 mb-3 text-gray-600">
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <p className="text-gray-900">{value || '-'}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl text-white mb-4">Compare Universities</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Compare two universities side by side to make the best decision for your future
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* University Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {selectedUniversities.map((university, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm"
            >
              {university ? (
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900 to-emerald-600 flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                          #{university.ranking}
                        </Badge>
                      </div>
                      <h3 className="text-lg text-gray-900 mb-1">{university.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{university.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {university.city}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveUniversity(index)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto mb-4">
                    <Plus className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">Select a university</p>
                  <Select
                    onValueChange={(value) => {
                      const uni = universities.find((u) => u.id.toString() === value);
                      if (uni) handleSelectUniversity(uni, index);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      {availableUniversities.map((uni) => (
                        <SelectItem key={uni.id} value={uni.id.toString()}>
                          {uni.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </Card>
          ))}
        </motion.div>

        {/* Comparison Table */}
        {selectedUniversities.some((uni) => uni !== null) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl text-gray-900 mb-6">Detailed Comparison</h2>

              <div className="space-y-0">
                <ComparisonMetric
                  icon={Building2}
                  label="Type"
                  values={selectedUniversities.map((uni) => uni?.type || '')}
                />
                <ComparisonMetric
                  icon={Calendar}
                  label="Founded"
                  values={selectedUniversities.map((uni) => uni?.founded || '')}
                />
                <ComparisonMetric
                  icon={Users}
                  label="Student Body"
                  values={selectedUniversities.map((uni) => uni?.students || '')}
                />
                <ComparisonMetric
                  icon={DollarSign}
                  label="Tuition Range"
                  values={selectedUniversities.map((uni) => uni?.tuitionRange || '')}
                />
                <ComparisonMetric
                  icon={Star}
                  label="Rating"
                  values={selectedUniversities.map((uni) =>
                    uni ? `${uni.rating}/5.0` : ''
                  )}
                />
              </div>

              {/* Programs Comparison */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg text-gray-900 mb-4">Popular Programs</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedUniversities.map((uni, index) => (
                    <div key={index}>
                      {uni ? (
                        <div className="space-y-2">
                          {uni.programs.slice(0, 4).map((program, pIndex) => (
                            <div
                              key={pIndex}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <Check className="h-4 w-4 text-emerald-600" />
                              {program}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm">-</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Empty State */}
        {!selectedUniversities.some((uni) => uni !== null) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-12 text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl text-gray-900 mb-2">No Universities Selected</h3>
              <p className="text-gray-600">
                Select universities from the dropdowns above to start comparing
              </p>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const Building2 = MapPin; // Using MapPin as substitute
