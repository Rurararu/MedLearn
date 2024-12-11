import { create } from 'zustand';
import { User } from '../types';
import { findUserByEmail, saveUser, updateUser } from '../utils/authUtils';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id'>) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: async (email, password) => {
    const user = await findUserByEmail(email);
    
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    set({ user: userWithoutPassword });
  },
  register: async (userData) => {
    try {
      const existingUser = await findUserByEmail(userData.email);
      
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      const newUser = await saveUser(userData);
      const { password: _, ...userWithoutPassword } = newUser;
      set({ user: userWithoutPassword });
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  updateProfile: async (userData) => {
    const currentUser = get().user;
    if (!currentUser?.id) {
      throw new Error('No user logged in');
    }

    const updatedUser = await updateUser(currentUser.id, userData);
    const { password: _, ...userWithoutPassword } = updatedUser;
    set({ user: userWithoutPassword });
  },
  logout: () => set({ user: null }),
}));