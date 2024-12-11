import { User } from '../types';
import usersData from '../data/users.json';

let users = [...usersData.users];

export const loadUsers = async () => {
  return users;
};

export const saveUser = async (userData: Omit<User, 'id'>) => {
  const newUser = {
    ...userData,
    id: (users.length + 1).toString(),
  };
  
  users.push(newUser);
  return newUser;
};

export const updateUser = async (userId: string, userData: Partial<User>) => {
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    throw new Error('User not found');
  }

  const updatedUser = {
    ...users[userIndex],
    ...userData,
  };

  users[userIndex] = updatedUser;
  return updatedUser;
};

export const findUserByEmail = async (email: string) => {
  return users.find(user => user.email === email);
};