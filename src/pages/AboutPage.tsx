import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  GraduationCap,
  Target,
  Award,
  Users,
  Globe,
  Heart,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower students with comprehensive information and tools to make informed decisions about their higher education journey in Egypt.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in providing accurate, up-to-date information about universities, programs, and admission requirements.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Heart,
      title: 'Student First',
      description: 'Every feature we build puts students at the center, ensuring they have the best tools to explore and compare universities.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making higher education information accessible to everyone, including international students seeking to study in Egypt.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const stats = [
    { number: '42+', label: 'Universities' },
    { number: '300+', label: 'Programs' },
    { number: '1000+', label: 'Students Helped' },
    { number: '15+', label: 'Cities Covered' },
  ];

  const team = [
    { name: 'Dr. Ahmed Hassan', role: 'Educational Consultant', specialty: 'Higher Education' },
    { name: 'Sara Mohamed', role: 'Platform Manager', specialty: 'Student Services' },
    { name: 'Omar Ali', role: 'Data Analyst', specialty: 'University Rankings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-emerald-600 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl text-white mb-6">About UniInOne</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted companion in discovering and comparing universities across Egypt. 
              We're dedicated to making higher education accessible and transparent for every student.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
            >
              <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Card className="p-12 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                UniInOne was born from a simple observation: finding the right university shouldn't be complicated. 
                We noticed students spending countless hours searching across multiple websites, comparing scattered 
                information, and struggling to make informed decisions about their future.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we've created a centralized platform that brings together comprehensive information about 
                Egyptian universities, making it easier than ever for students—both local and international—to 
                explore their options, compare programs, and find their perfect academic home.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Values Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at UniInOne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals working to make your university search easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-900 to-emerald-600 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 mb-1">{member.role}</p>
                <p className="text-sm text-gray-500">{member.specialty}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="p-12 shadow-lg border-0 bg-gradient-to-r from-blue-900 to-emerald-600 text-center">
            <h2 className="text-3xl text-white mb-4">Ready to Find Your Perfect University?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already discovered their ideal academic path with UniInOne
            </p>
            <Button
              onClick={() => onPageChange('universities')}
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 group"
            >
              Explore Universities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
