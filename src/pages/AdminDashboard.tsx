import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import {
  GraduationCap,
  Users,
  Building2,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Search,
  BarChart3,
} from 'lucide-react';

export function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddUniversityOpen, setIsAddUniversityOpen] = useState(false);

  // Mock data
  const stats = [
    { label: 'Total Universities', value: '42', icon: Building2, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Students', value: '1,248', icon: Users, color: 'from-emerald-500 to-emerald-600' },
    { label: 'Active Programs', value: '324', icon: GraduationCap, color: 'from-purple-500 to-purple-600' },
    { label: 'Monthly Growth', value: '+12%', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
  ];

  const universities = [
    { id: 1, name: 'Cairo University', city: 'Cairo', type: 'Public', students: 155000, programs: 42, status: 'Active' },
    { id: 2, name: 'American University in Cairo', city: 'Cairo', type: 'Private', students: 6500, programs: 36, status: 'Active' },
    { id: 3, name: 'Ain Shams University', city: 'Cairo', type: 'Public', students: 180000, programs: 38, status: 'Active' },
    { id: 4, name: 'Alexandria University', city: 'Alexandria', type: 'Public', students: 150000, programs: 40, status: 'Active' },
  ];

  const students = [
    { id: 1, name: 'Ahmed Hassan', email: 'ahmed@example.com', university: 'Cairo University', status: 'Active', joined: '2024-09-01' },
    { id: 2, name: 'Sara Mohamed', email: 'sara@example.com', university: 'AUC', status: 'Active', joined: '2024-09-15' },
    { id: 3, name: 'Omar Ali', email: 'omar@example.com', university: 'Ain Shams', status: 'Pending', joined: '2024-10-01' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl text-gray-900 dark:text-foreground">Admin Dashboard</h1>
            <Badge className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white border-0">
              Administrator
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-muted-foreground">Manage universities, students, and platform content</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl text-gray-900 dark:text-foreground">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="universities" className="space-y-6">
          <TabsList className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm border-0">
            <TabsTrigger value="universities" className="gap-2">
              <Building2 className="h-4 w-4" />
              Universities
            </TabsTrigger>
            <TabsTrigger value="students" className="gap-2">
              <Users className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Universities Tab */}
          <TabsContent value="universities">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <Input
                      placeholder="Search universities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Dialog open={isAddUniversityOpen} onOpenChange={setIsAddUniversityOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500">
                        <Plus className="h-4 w-4 mr-2" />
                        Add University
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New University</DialogTitle>
                        <DialogDescription>
                          Fill in the details to add a new university to the platform
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>University Name</Label>
                            <Input placeholder="e.g., Cairo University" />
                          </div>
                          <div className="space-y-2">
                            <Label>Arabic Name</Label>
                            <Input placeholder="e.g., جامعة القاهرة" />
                          </div>
                          <div className="space-y-2">
                            <Label>City</Label>
                            <Input placeholder="e.g., Cairo" />
                          </div>
                          <div className="space-y-2">
                            <Label>Type</Label>
                            <Input placeholder="Public or Private" />
                          </div>
                          <div className="space-y-2">
                            <Label>Founded Year</Label>
                            <Input type="number" placeholder="e.g., 1908" />
                          </div>
                          <div className="space-y-2">
                            <Label>Number of Students</Label>
                            <Input placeholder="e.g., 155,000" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea rows={4} placeholder="University description..." />
                        </div>
                        <div className="flex justify-end gap-3">
                          <Button variant="outline" onClick={() => setIsAddUniversityOpen(false)}>
                            Cancel
                          </Button>
                          <Button className="bg-gradient-to-r from-blue-900 to-emerald-600">
                            Add University
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>University</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Programs</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {universities.map((uni) => (
                      <TableRow key={uni.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900 to-emerald-600 flex items-center justify-center">
                              <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <span>{uni.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{uni.city}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{uni.type}</Badge>
                        </TableCell>
                        <TableCell>{uni.students.toLocaleString()}</TableCell>
                        <TableCell>{uni.programs}</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700">
                            {uni.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl text-gray-900 dark:text-foreground">Student Profiles</h2>
                  <Button className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>University</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.university}</TableCell>
                        <TableCell>
                          <Badge className={student.status === 'Active' ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700' : 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700'}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.joined}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
              <h2 className="text-2xl text-gray-900 dark:text-foreground mb-6">Platform Analytics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                  <h3 className="text-lg text-gray-900 dark:text-foreground mb-2">User Engagement</h3>
                  <p className="text-3xl text-blue-900 dark:text-blue-400 mb-2">89%</p>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground">Active users this month</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-lg">
                  <h3 className="text-lg text-gray-900 dark:text-foreground mb-2">New Registrations</h3>
                  <p className="text-3xl text-emerald-900 dark:text-emerald-400 mb-2">127</p>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground">Students joined this month</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
                  <h3 className="text-lg text-gray-900 dark:text-foreground mb-2">University Views</h3>
                  <p className="text-3xl text-purple-900 dark:text-purple-400 mb-2">5,432</p>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground">Total page views</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg">
                  <h3 className="text-lg text-gray-900 dark:text-foreground mb-2">Comparisons Made</h3>
                  <p className="text-3xl text-orange-900 dark:text-orange-400 mb-2">892</p>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground">Universities compared</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
