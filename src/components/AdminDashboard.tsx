import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
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
import { University } from '../data/universities';
import { useUniversities } from '../context/UniversitiesContext';

export function AdminDashboard() {
  const { universities, addUniversity, updateUniversity, deleteUniversity } = useUniversities();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddUniversityOpen, setIsAddUniversityOpen] = useState(false);
  const [isEditUniversityOpen, setIsEditUniversityOpen] = useState(false);
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
  const [deleteUniversityId, setDeleteUniversityId] = useState<number | null>(null);

  // Student state
  const [students, setStudents] = useState([
    { id: 1, name: 'Ahmed Hassan', email: 'ahmed@example.com', university: 'Cairo University', status: 'Active' as 'Active' | 'Pending', joined: '2024-09-01' },
    { id: 2, name: 'Sara Mohamed', email: 'sara@example.com', university: 'AUC', status: 'Active' as 'Active' | 'Pending', joined: '2024-09-15' },
    { id: 3, name: 'Omar Ali', email: 'omar@example.com', university: 'Ain Shams', status: 'Pending' as 'Active' | 'Pending', joined: '2024-10-01' },
  ]);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isEditStudentOpen, setIsEditStudentOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<typeof students[0] | null>(null);
  const [deleteStudentId, setDeleteStudentId] = useState<number | null>(null);
  const [studentFormData, setStudentFormData] = useState({
    name: '',
    email: '',
    university: '',
    status: 'Active' as 'Active' | 'Pending',
    joined: '',
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    arabicName: '',
    city: '',
    type: 'Public' as 'Public' | 'Private',
    founded: '',
    students: '',
    ranking: '',
    image: '',
    programs: '',
    tuitionRange: '',
    rating: '',
    description: '',
  });

  // Calculate stats from actual data
  const stats = useMemo(() => {
    const totalPrograms = universities.reduce((acc, uni) => acc + uni.programs.length, 0);
    const totalStudents = universities.reduce((acc, uni) => {
      const num = parseInt(uni.students.replace(/[^\d]/g, '')) || 0;
      return acc + num;
    }, 0);
    
    return [
      { 
        label: 'Total Universities', 
        value: universities.length.toString(), 
        icon: Building2, 
        color: 'from-blue-500 to-blue-600' 
      },
      { 
        label: 'Total Students', 
        value: totalStudents.toLocaleString(), 
        icon: Users, 
        color: 'from-emerald-500 to-emerald-600' 
      },
      { 
        label: 'Active Programs', 
        value: totalPrograms.toString(), 
        icon: GraduationCap, 
        color: 'from-purple-500 to-purple-600' 
      },
      { 
        label: 'Average Rating', 
        value: (universities.reduce((acc, uni) => acc + uni.rating, 0) / universities.length).toFixed(1), 
        icon: TrendingUp, 
        color: 'from-orange-500 to-orange-600' 
      },
    ];
  }, [universities]);

  // Filter universities based on search
  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => 
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.arabicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [universities, searchQuery]);

  const resetForm = () => {
    setFormData({
      name: '',
      arabicName: '',
      city: '',
      type: 'Public',
      founded: '',
      students: '',
      ranking: '',
      image: '',
      programs: '',
      tuitionRange: '',
      rating: '',
      description: '',
    });
  };

  const handleAddUniversity = () => {
    const newId = Math.max(...universities.map(u => u.id), 0) + 1;
    const newUniversity: University = {
      id: newId,
      name: formData.name,
      arabicName: formData.arabicName,
      city: formData.city,
      type: formData.type,
      founded: parseInt(formData.founded) || 0,
      students: formData.students,
      ranking: parseInt(formData.ranking) || universities.length + 1,
      image: formData.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      programs: formData.programs.split(',').map(p => p.trim()).filter(p => p),
      tuitionRange: formData.tuitionRange,
      rating: parseFloat(formData.rating) || 4.0,
      description: formData.description,
    };
    addUniversity(newUniversity);
    resetForm();
    setIsAddUniversityOpen(false);
  };

  const handleEditClick = (university: University) => {
    setEditingUniversity(university);
    setIsEditUniversityOpen(true);
    setFormData({
      name: university.name,
      arabicName: university.arabicName,
      city: university.city,
      type: university.type,
      founded: university.founded.toString(),
      students: university.students,
      ranking: university.ranking.toString(),
      image: university.image,
      programs: university.programs.join(', '),
      tuitionRange: university.tuitionRange,
      rating: university.rating.toString(),
      description: university.description,
    });
  };

  const handleUpdateUniversity = () => {
    if (!editingUniversity) return;
    
    const updatedUniversity: University = {
      ...editingUniversity,
      name: formData.name,
      arabicName: formData.arabicName,
      city: formData.city,
      type: formData.type,
      founded: parseInt(formData.founded) || 0,
      students: formData.students,
      ranking: parseInt(formData.ranking) || editingUniversity.ranking,
      image: formData.image || editingUniversity.image,
      programs: formData.programs.split(',').map(p => p.trim()).filter(p => p),
      tuitionRange: formData.tuitionRange,
      rating: parseFloat(formData.rating) || editingUniversity.rating,
      description: formData.description,
    };
    
    updateUniversity(editingUniversity.id, updatedUniversity);
    resetForm();
    setEditingUniversity(null);
    setIsEditUniversityOpen(false);
  };

  const handleDeleteClick = (id: number) => {
    setDeleteUniversityId(id);
  };

  const handleDeleteConfirm = () => {
    if (deleteUniversityId) {
      deleteUniversity(deleteUniversityId);
      setDeleteUniversityId(null);
    }
  };

  // Student handlers
  const resetStudentForm = () => {
    setStudentFormData({
      name: '',
      email: '',
      university: '',
      status: 'Active',
      joined: '',
    });
  };

  const handleAddStudent = () => {
    const newId = Math.max(...students.map(s => s.id), 0) + 1;
    const newStudent = {
      id: newId,
      name: studentFormData.name,
      email: studentFormData.email,
      university: studentFormData.university,
      status: studentFormData.status,
      joined: studentFormData.joined || new Date().toISOString().split('T')[0],
    };
    setStudents([...students, newStudent]);
    resetStudentForm();
    setIsAddStudentOpen(false);
  };

  const handleEditStudentClick = (student: typeof students[0]) => {
    setEditingStudent(student);
    setIsEditStudentOpen(true);
    setStudentFormData({
      name: student.name,
      email: student.email,
      university: student.university,
      status: student.status,
      joined: student.joined,
    });
  };

  const handleUpdateStudent = () => {
    if (!editingStudent) return;
    
    const updatedStudents = students.map(s =>
      s.id === editingStudent.id
        ? {
            ...s,
            name: studentFormData.name,
            email: studentFormData.email,
            university: studentFormData.university,
            status: studentFormData.status,
            joined: studentFormData.joined,
          }
        : s
    );
    setStudents(updatedStudents);
    resetStudentForm();
    setEditingStudent(null);
    setIsEditStudentOpen(false);
  };

  const handleDeleteStudentClick = (id: number) => {
    setDeleteStudentId(id);
  };

  const handleDeleteStudentConfirm = () => {
    if (deleteStudentId) {
      setStudents(students.filter(s => s.id !== deleteStudentId));
      setDeleteStudentId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl text-foreground">Admin Dashboard</h1>
            <Badge className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white border-0">
              Administrator
            </Badge>
          </div>
          <p className="text-muted-foreground">Manage universities, students, and platform content</p>
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
              <Card className="p-6 shadow-lg border border-border bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl text-foreground">{stat.value}</p>
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
          <TabsList className="bg-card shadow-sm border border-border">
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
            <Card className="shadow-lg border border-border bg-card">
              <div className="p-6 border-b border-border">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search universities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Dialog open={isAddUniversityOpen} onOpenChange={setIsAddUniversityOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500"
                        onClick={() => {
                          resetForm();
                          setEditingUniversity(null);
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add University
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New University</DialogTitle>
                        <DialogDescription>
                          Fill in the details to add a new university to the platform
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>University Name *</Label>
                            <Input 
                              placeholder="e.g., Cairo University" 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Arabic Name *</Label>
                            <Input 
                              placeholder="e.g., جامعة القاهرة" 
                              value={formData.arabicName}
                              onChange={(e) => setFormData({...formData, arabicName: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>City *</Label>
                            <Input 
                              placeholder="e.g., Cairo" 
                              value={formData.city}
                              onChange={(e) => setFormData({...formData, city: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Type *</Label>
                            <Select 
                              value={formData.type} 
                              onValueChange={(value: 'Public' | 'Private') => setFormData({...formData, type: value})}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Public">Public</SelectItem>
                                <SelectItem value="Private">Private</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Founded Year *</Label>
                            <Input 
                              type="number" 
                              placeholder="e.g., 1908" 
                              value={formData.founded}
                              onChange={(e) => setFormData({...formData, founded: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Number of Students *</Label>
                            <Input 
                              placeholder="e.g., 155,000+" 
                              value={formData.students}
                              onChange={(e) => setFormData({...formData, students: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Ranking</Label>
                            <Input 
                              type="number" 
                              placeholder="e.g., 1" 
                              value={formData.ranking}
                              onChange={(e) => setFormData({...formData, ranking: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Rating</Label>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="e.g., 4.5" 
                              value={formData.rating}
                              onChange={(e) => setFormData({...formData, rating: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Tuition Range</Label>
                            <Input 
                              placeholder="e.g., EGP 1,500 - 15,000" 
                              value={formData.tuitionRange}
                              onChange={(e) => setFormData({...formData, tuitionRange: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Image URL</Label>
                            <Input 
                              placeholder="https://..." 
                              value={formData.image}
                              onChange={(e) => setFormData({...formData, image: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Programs (comma-separated)</Label>
                          <Input 
                            placeholder="e.g., Medicine, Engineering, Law, Business" 
                            value={formData.programs}
                            onChange={(e) => setFormData({...formData, programs: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea 
                            rows={4} 
                            placeholder="University description..." 
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                          />
                        </div>
                        <div className="flex justify-end gap-3">
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setIsAddUniversityOpen(false);
                              resetForm();
                            }}
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            Cancel
                          </Button>
                          <Button 
                            className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 transition-colors"
                            onClick={handleAddUniversity}
                            disabled={!formData.name || !formData.arabicName || !formData.city}
                          >
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
                      <TableHead>Rating</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUniversities.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                          No universities found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredUniversities.map((uni) => (
                        <TableRow key={uni.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900 to-emerald-600 flex items-center justify-center">
                                <GraduationCap className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <div className="text-foreground font-medium">{uni.name}</div>
                                <div className="text-sm text-muted-foreground">{uni.arabicName}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-foreground">{uni.city}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-border">{uni.type}</Badge>
                          </TableCell>
                          <TableCell className="text-foreground">{uni.students}</TableCell>
                          <TableCell className="text-foreground">{uni.programs.length}</TableCell>
                          <TableCell>
                            <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700 border">
                              {uni.rating} ⭐
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Dialog open={isEditUniversityOpen && editingUniversity?.id === uni.id} onOpenChange={(open) => {
                                if (!open) {
                                  setIsEditUniversityOpen(false);
                                  setEditingUniversity(null);
                                  resetForm();
                                }
                              }}>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleEditClick(uni)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle>Edit University</DialogTitle>
                                    <DialogDescription>
                                      Update the university information
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label>University Name *</Label>
                                        <Input 
                                          placeholder="e.g., Cairo University" 
                                          value={formData.name}
                                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Arabic Name *</Label>
                                        <Input 
                                          placeholder="e.g., جامعة القاهرة" 
                                          value={formData.arabicName}
                                          onChange={(e) => setFormData({...formData, arabicName: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>City *</Label>
                                        <Input 
                                          placeholder="e.g., Cairo" 
                                          value={formData.city}
                                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Type *</Label>
                                        <Select 
                                          value={formData.type} 
                                          onValueChange={(value: 'Public' | 'Private') => setFormData({...formData, type: value})}
                                        >
                                          <SelectTrigger>
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="Public">Public</SelectItem>
                                            <SelectItem value="Private">Private</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Founded Year *</Label>
                                        <Input 
                                          type="number" 
                                          placeholder="e.g., 1908" 
                                          value={formData.founded}
                                          onChange={(e) => setFormData({...formData, founded: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Number of Students *</Label>
                                        <Input 
                                          placeholder="e.g., 155,000+" 
                                          value={formData.students}
                                          onChange={(e) => setFormData({...formData, students: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Ranking</Label>
                                        <Input 
                                          type="number" 
                                          placeholder="e.g., 1" 
                                          value={formData.ranking}
                                          onChange={(e) => setFormData({...formData, ranking: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Rating</Label>
                                        <Input 
                                          type="number" 
                                          step="0.1"
                                          placeholder="e.g., 4.5" 
                                          value={formData.rating}
                                          onChange={(e) => setFormData({...formData, rating: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Tuition Range</Label>
                                        <Input 
                                          placeholder="e.g., EGP 1,500 - 15,000" 
                                          value={formData.tuitionRange}
                                          onChange={(e) => setFormData({...formData, tuitionRange: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Image URL</Label>
                                        <Input 
                                          placeholder="https://..." 
                                          value={formData.image}
                                          onChange={(e) => setFormData({...formData, image: e.target.value})}
                                        />
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Programs (comma-separated)</Label>
                                      <Input 
                                        placeholder="e.g., Medicine, Engineering, Law, Business" 
                                        value={formData.programs}
                                        onChange={(e) => setFormData({...formData, programs: e.target.value})}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Description</Label>
                                      <Textarea 
                                        rows={4} 
                                        placeholder="University description..." 
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                      />
                                    </div>
                                    <div className="flex justify-end gap-3">
                                      <Button 
                                        variant="outline" 
                                        onClick={() => {
                                          setIsEditUniversityOpen(false);
                                          setEditingUniversity(null);
                                          resetForm();
                                        }}
                                        className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                      >
                                        Cancel
                                      </Button>
                                      <Button 
                                        className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 transition-colors"
                                        onClick={handleUpdateUniversity}
                                        disabled={!formData.name || !formData.arabicName || !formData.city}
                                      >
                                        Update University
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                                onClick={() => handleDeleteClick(uni.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students">
            <Card className="shadow-lg border border-border bg-card">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl text-foreground">Student Profiles</h2>
                  <Dialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 transition-colors"
                        onClick={() => {
                          resetStudentForm();
                          setEditingStudent(null);
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Student
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>
                          Fill in the details to add a new student to the platform
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Name *</Label>
                            <Input 
                              placeholder="e.g., Ahmed Hassan" 
                              value={studentFormData.name}
                              onChange={(e) => setStudentFormData({...studentFormData, name: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Email *</Label>
                            <Input 
                              type="email"
                              placeholder="e.g., ahmed@example.com" 
                              value={studentFormData.email}
                              onChange={(e) => setStudentFormData({...studentFormData, email: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>University *</Label>
                            <Input 
                              placeholder="e.g., Cairo University" 
                              value={studentFormData.university}
                              onChange={(e) => setStudentFormData({...studentFormData, university: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Status *</Label>
                            <Select 
                              value={studentFormData.status} 
                              onValueChange={(value: 'Active' | 'Pending') => setStudentFormData({...studentFormData, status: value})}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Joined Date</Label>
                            <Input 
                              type="date"
                              value={studentFormData.joined}
                              onChange={(e) => setStudentFormData({...studentFormData, joined: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-3">
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setIsAddStudentOpen(false);
                              resetStudentForm();
                            }}
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            Cancel
                          </Button>
                          <Button 
                            className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 transition-colors"
                            onClick={handleAddStudent}
                            disabled={!studentFormData.name || !studentFormData.email || !studentFormData.university}
                          >
                            Add Student
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
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>University</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          No students found
                        </TableCell>
                      </TableRow>
                    ) : (
                      students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="text-foreground">{student.name}</TableCell>
                          <TableCell className="text-foreground">{student.email}</TableCell>
                          <TableCell className="text-foreground">{student.university}</TableCell>
                          <TableCell>
                            <Badge className={student.status === 'Active' ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 border' : 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700 border'}>
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-foreground">{student.joined}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Dialog open={isEditStudentOpen && editingStudent?.id === student.id} onOpenChange={(open) => {
                                if (!open) {
                                  setIsEditStudentOpen(false);
                                  setEditingStudent(null);
                                  resetStudentForm();
                                }
                              }}>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleEditStudentClick(student)}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Edit Student</DialogTitle>
                                    <DialogDescription>
                                      Update the student information
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label>Name *</Label>
                                        <Input 
                                          placeholder="e.g., Ahmed Hassan" 
                                          value={studentFormData.name}
                                          onChange={(e) => setStudentFormData({...studentFormData, name: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Email *</Label>
                                        <Input 
                                          type="email"
                                          placeholder="e.g., ahmed@example.com" 
                                          value={studentFormData.email}
                                          onChange={(e) => setStudentFormData({...studentFormData, email: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>University *</Label>
                                        <Input 
                                          placeholder="e.g., Cairo University" 
                                          value={studentFormData.university}
                                          onChange={(e) => setStudentFormData({...studentFormData, university: e.target.value})}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Status *</Label>
                                        <Select 
                                          value={studentFormData.status} 
                                          onValueChange={(value: 'Active' | 'Pending') => setStudentFormData({...studentFormData, status: value})}
                                        >
                                          <SelectTrigger>
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="Active">Active</SelectItem>
                                            <SelectItem value="Pending">Pending</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Joined Date</Label>
                                        <Input 
                                          type="date"
                                          value={studentFormData.joined}
                                          onChange={(e) => setStudentFormData({...studentFormData, joined: e.target.value})}
                                        />
                                      </div>
                                    </div>
                                    <div className="flex justify-end gap-3">
                                      <Button 
                                        variant="outline" 
                                        onClick={() => {
                                          setIsEditStudentOpen(false);
                                          setEditingStudent(null);
                                          resetStudentForm();
                                        }}
                                        className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                      >
                                        Cancel
                                      </Button>
                                      <Button 
                                        className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 transition-colors"
                                        onClick={handleUpdateStudent}
                                        disabled={!studentFormData.name || !studentFormData.email || !studentFormData.university}
                                      >
                                        Update Student
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                onClick={() => handleDeleteStudentClick(student.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card className="p-8 shadow-lg border border-border bg-card">
              <h2 className="text-2xl text-foreground mb-6">Platform Analytics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-100 dark:from-blue-900/50 to-blue-200 dark:to-blue-800/50 rounded-lg border border-border">
                  <h3 className="text-lg text-foreground mb-2">User Engagement</h3>
                  <p className="text-3xl text-blue-900 dark:text-blue-400 mb-2">89%</p>
                  <p className="text-sm text-muted-foreground">Active users this month</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-100 dark:from-emerald-900/50 to-emerald-200 dark:to-emerald-800/50 rounded-lg border border-border">
                  <h3 className="text-lg text-foreground mb-2">New Registrations</h3>
                  <p className="text-3xl text-emerald-900 dark:text-emerald-400 mb-2">127</p>
                  <p className="text-sm text-muted-foreground">Students joined this month</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-100 dark:from-purple-900/50 to-purple-200 dark:to-purple-800/50 rounded-lg border border-border">
                  <h3 className="text-lg text-foreground mb-2">University Views</h3>
                  <p className="text-3xl text-purple-900 dark:text-purple-400 mb-2">5,432</p>
                  <p className="text-sm text-muted-foreground">Total page views</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-100 dark:from-orange-900/50 to-orange-200 dark:to-orange-800/50 rounded-lg border border-border">
                  <h3 className="text-lg text-foreground mb-2">Comparisons Made</h3>
                  <p className="text-3xl text-orange-900 dark:text-orange-400 mb-2">892</p>
                  <p className="text-sm text-muted-foreground">Universities compared</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Delete University Confirmation Dialog */}
      <AlertDialog open={deleteUniversityId !== null} onOpenChange={(open) => {
        if (!open) {
          setDeleteUniversityId(null);
        }
      }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete University</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-foreground">
                {deleteUniversityId && universities.find(u => u.id === deleteUniversityId)?.name}
              </span>
              ? This action cannot be undone and will permanently remove the university from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              onClick={() => setDeleteUniversityId(null)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700 dark:hover:bg-red-800 text-white focus:ring-red-600 transition-colors"
            >
              Delete University
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Student Confirmation Dialog */}
      <AlertDialog open={deleteStudentId !== null} onOpenChange={(open) => {
        if (!open) {
          setDeleteStudentId(null);
        }
      }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Student</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-foreground">
                {deleteStudentId && students.find(s => s.id === deleteStudentId)?.name}
              </span>
              {" "}({deleteStudentId && students.find(s => s.id === deleteStudentId)?.email})? This action cannot be undone and will permanently remove the student from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              onClick={() => setDeleteStudentId(null)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteStudentConfirm}
              className="bg-red-600 hover:bg-red-700 dark:hover:bg-red-800 text-white focus:ring-red-600 transition-colors"
            >
              Delete Student
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
