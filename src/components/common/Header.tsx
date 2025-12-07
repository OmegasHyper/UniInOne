import { useState } from 'react';
import { Button } from '../ui/button';
import { Globe, Menu, X, User, LogIn, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isAuthenticated?: boolean;
  user?: { name: string; role: 'student' | 'admin' } | null;
  onLogout?: () => void;
}

export function Header({ 
  currentPage, 
  onPageChange,
  isAuthenticated = false,
  user = null,
  onLogout,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'universities', label: 'Universities' },
    { id: 'faculties', label: 'Faculties' },
    { id: 'compare', label: 'Compare' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">U</span>
            </div>
            <span className="text-xl font-bold text-gray-900">UniInOne</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Actions & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                {user.role === 'admin' && (
                  <Button
                    onClick={() => onPageChange('admin-dashboard')}
                    variant="outline"
                    size="sm"
                    className="hidden lg:flex"
                  >
                    Dashboard
                  </Button>
                )}
                <div
                  className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => onPageChange('profile')}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gradient-to-br from-blue-900 to-emerald-600 text-white text-xs">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
                <Button
                  onClick={onLogout}
                  variant="outline"
                  size="sm"
                  className="hidden md:flex text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={() => onPageChange('login')}
                size="sm"
                className="hidden md:flex bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
            
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {isAuthenticated && user ? (
                <>
                  <button
                    onClick={() => {
                      onPageChange('profile');
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-2 rounded-md text-left text-gray-600 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                  >
                    Profile
                  </button>
                  {user.role === 'admin' && (
                    <button
                      onClick={() => {
                        onPageChange('admin-dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="px-3 py-2 rounded-md text-left text-gray-600 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                    >
                      Dashboard
                    </button>
                  )}
                  <button
                    onClick={() => {
                      onLogout?.();
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-2 rounded-md text-left text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onPageChange('login');
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-left text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  Login / Register
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}