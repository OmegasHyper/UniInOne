import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { University, universities as initialUniversities } from '../data/universities';

interface UniversitiesContextType {
  universities: University[];
  addUniversity: (university: University) => void;
  updateUniversity: (id: number, university: University) => void;
  deleteUniversity: (id: number) => void;
  getUniversityById: (id: number) => University | undefined;
}

const UniversitiesContext = createContext<UniversitiesContextType | undefined>(undefined);

const STORAGE_KEY = 'uniinone_universities';

export function UniversitiesProvider({ children }: { children: ReactNode }) {
  const [universities, setUniversities] = useState<University[]>(() => {
    // Load from localStorage or use initial data
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.length > 0 ? parsed : initialUniversities;
      }
    } catch (error) {
      console.error('Error loading universities from localStorage:', error);
    }
    return initialUniversities;
  });

  // Save to localStorage whenever universities change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(universities));
    } catch (error) {
      console.error('Error saving universities to localStorage:', error);
    }
  }, [universities]);

  const addUniversity = (university: University) => {
    setUniversities(prev => {
      const newId = Math.max(...prev.map(u => u.id), 0) + 1;
      return [...prev, { ...university, id: newId }];
    });
  };

  const updateUniversity = (id: number, university: University) => {
    setUniversities(prev => 
      prev.map(u => u.id === id ? { ...university, id } : u)
    );
  };

  const deleteUniversity = (id: number) => {
    setUniversities(prev => prev.filter(u => u.id !== id));
  };

  const getUniversityById = (id: number): University | undefined => {
    return universities.find(u => u.id === id);
  };

  return (
    <UniversitiesContext.Provider
      value={{
        universities,
        addUniversity,
        updateUniversity,
        deleteUniversity,
        getUniversityById,
      }}
    >
      {children}
    </UniversitiesContext.Provider>
  );
}

export function useUniversities() {
  const context = useContext(UniversitiesContext);
  if (context === undefined) {
    throw new Error('useUniversities must be used within a UniversitiesProvider');
  }
  return context;
}



