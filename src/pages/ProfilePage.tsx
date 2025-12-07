import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Heart,
  Star,
  BookOpen,
  Edit,
} from 'lucide-react';

interface ProfilePageProps {
  user: {
    name: string;
    email: string;
    role: 'student' | 'admin';
  };
}

export function ProfilePage({ user }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name || 'Student Name');
  const [phone, setPhone] = useState('+20 123 456 7890');
  const [location, setLocation] = useState('Cairo, Egypt');
  const [bio, setBio] = useState('Aspiring computer science student looking for the best university program.');

  const favoriteUniversities = [
    { name: 'Cairo University', program: 'Computer Science', status: 'Interested' },
    { name: 'American University in Cairo', program: 'Engineering', status: 'Applied' },
    { name: 'Ain Shams University', program: 'Medicine', status: 'Considering' },
  ];

  const comparedUniversities = [
    { name: 'Cairo University vs AUC', date: 'March 1, 2025' },
    { name: 'Ain Shams vs Alexandria University', date: 'February 28, 2025' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start md:items-center gap-6 flex-col md:flex-row w-full md:w-auto">
                <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-700 shadow-xl">
                  <AvatarImage src="" alt={name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-900 to-emerald-600 dark:from-blue-700 dark:to-emerald-700 text-white text-2xl">
                    {name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl text-gray-900 dark:text-foreground">{name}</h1>
                    <Badge className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700">
                      {user.role === 'admin' ? 'Admin' : 'Student'}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-gray-600 dark:text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? 'default' : 'outline'}
                className="w-full md:w-auto"
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm border-0">
            <TabsTrigger value="info" className="gap-2">
              <User className="h-4 w-4" />
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2">
              <Heart className="h-4 w-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="activity" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="info">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl text-gray-900 dark:text-foreground mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      disabled={!isEditing}
                      rows={4}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl text-gray-900 dark:text-foreground mb-6">Favorite Universities</h2>
                <div className="space-y-4">
                  {favoriteUniversities.map((uni, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                            <h3 className="text-lg text-gray-900 dark:text-foreground">{uni.name}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-muted-foreground mb-2">{uni.program}</p>
                          <Badge variant="outline" className="bg-white dark:bg-gray-800">
                            {uni.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30">
                          <Heart className="h-5 w-5 fill-current" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl text-gray-900 dark:text-foreground mb-6">Recent Activity</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-gray-900 dark:text-foreground mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      Comparison History
                    </h3>
                    <div className="space-y-3">
                      {comparedUniversities.map((comparison, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-between"
                        >
                          <div>
                            <p className="text-gray-900 dark:text-foreground">{comparison.name}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-muted-foreground mt-1">
                              <Calendar className="h-4 w-4" />
                              {comparison.date}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
