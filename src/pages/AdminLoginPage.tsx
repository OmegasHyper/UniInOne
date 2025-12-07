import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Shield, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

interface AdminLoginPageProps {
  onAdminLogin: (email: string) => void;
  onPageChange: (page: string) => void;
}

export function AdminLoginPage({ onAdminLogin, onPageChange }: AdminLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin authentication
    onAdminLogin(email);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20 dark:opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500 dark:bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full mb-4 shadow-2xl"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-3xl text-white mb-2">Admin Access</h1>
            <p className="text-blue-200">Secure portal for administrators</p>
          </div>

          <Card className="p-8 shadow-2xl border-0 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md text-white dark:text-foreground">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Alert className="bg-blue-900/50 dark:bg-blue-800/50 border-blue-400/50 dark:border-blue-500/50 text-blue-100 dark:text-blue-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  This area is restricted to authorized administrators only.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email" className="text-white">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@uniinone.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/10 dark:bg-gray-700/50 border-white/20 dark:border-gray-600/50 text-white dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="admin-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-white/10 dark:bg-gray-700/50 border-white/20 dark:border-gray-600/50 text-white dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="access-code" className="text-white">Access Code</Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <Input
                      id="access-code"
                      type="text"
                      placeholder="XXXX-XXXX-XXXX"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="pl-10 bg-white/10 dark:bg-gray-700/50 border-white/20 dark:border-gray-600/50 text-white dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white border-0 group"
              >
                Access Dashboard
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => onPageChange('login')}
                  className="text-sm text-blue-200 dark:text-blue-300 hover:text-white dark:hover:text-gray-100 transition-colors"
                >
                  ← Back to Student Login
                </button>
              </div>
            </form>
          </Card>

          <p className="text-center text-blue-200 dark:text-blue-300 text-sm mt-6">
            Protected by advanced security measures
          </p>
        </motion.div>
      </div>
    </div>
  );
}
