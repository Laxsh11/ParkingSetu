
import React, { useState, useEffect, useCallback } from 'react';
import { User, UserRole, Booking, ParkingSlot } from './types';
import LoginPage from './components/LoginPage';
import SeekerDashboard from './components/SeekerDashboard';
import ProviderDashboard from './components/ProviderDashboard';
import { getCurrentUser, logoutUser } from './services/api';
import { CarIcon } from './components/icons';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkUserSession = useCallback(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
  };

  const handleSlotAdded = (newSlot: ParkingSlot) => {
    // In a real app, this would trigger a re-fetch or update state
    // For this simulation, we can update the current user's slots
    if (currentUser && currentUser.role === UserRole.Provider) {
      const updatedUser = {
        ...currentUser,
        parkingSlots: [...(currentUser.parkingSlots || []), newSlot.id],
      };
      setCurrentUser(updatedUser);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <CarIcon className="w-16 h-16 text-indigo-600 animate-bounce" />
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading ParkEasy...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {!currentUser ? (
        <LoginPage onLogin={handleLogin} />
      ) : currentUser.role === UserRole.Seeker ? (
        <SeekerDashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <ProviderDashboard user={currentUser} onLogout={handleLogout} onSlotAdded={handleSlotAdded}/>
      )}
    </div>
  );
};

export default App;
