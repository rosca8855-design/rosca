
import React, { useState } from 'react';
import { ScreenType, Circle } from './types';
import { MOCK_CIRCLES } from './constants';
import ExploreScreen from './screens/ExploreScreen';
import DetailScreen from './screens/DetailScreen';
import JoinScreen from './screens/JoinScreen';
import TimelineScreen from './screens/TimelineScreen';
import ProfileScreen from './screens/ProfileScreen';
import MembersScreen from './screens/MembersScreen';
import MyCommitmentScreen from './screens/MyCommitmentScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('explore');
  const [selectedCircle, setSelectedCircle] = useState<Circle | null>(null);

  const navigateTo = (screen: ScreenType, circle?: Circle) => {
    if (circle) setSelectedCircle(circle);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'explore':
        return <ExploreScreen onSelect={(c) => navigateTo('detail', c)} />;
      case 'detail':
        return <DetailScreen circle={selectedCircle || MOCK_CIRCLES[0]} onBack={() => setCurrentScreen('explore')} onJoin={() => setCurrentScreen('join')} />;
      case 'join':
        return <JoinScreen circle={selectedCircle || MOCK_CIRCLES[0]} onBack={() => setCurrentScreen('detail')} onComplete={() => setCurrentScreen('timeline')} />;
      case 'timeline':
        return <TimelineScreen onBack={() => setCurrentScreen('explore')} onMembers={() => setCurrentScreen('members')} />;
      case 'members':
        return <MembersScreen onBack={() => setCurrentScreen('timeline')} />;
      case 'profile':
        return <ProfileScreen onBack={() => setCurrentScreen('explore')} />;
      case 'my-commitment':
        return <MyCommitmentScreen onBack={() => setCurrentScreen('explore')} />;
      default:
        return <ExploreScreen onSelect={(c) => navigateTo('detail', c)} />;
    }
  };

  const showNav = ['explore', 'timeline', 'profile', 'members'].includes(currentScreen);

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-background-light dark:bg-background-dark shadow-xl overflow-x-hidden">
      <main className="flex-1 pb-20">
        {renderScreen()}
      </main>

      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe">
          <div className="max-w-md mx-auto flex items-center justify-around h-16 px-2">
            <button 
              onClick={() => setCurrentScreen('explore')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentScreen === 'explore' ? 'text-primary' : 'text-text-sub'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === 'explore' ? 'material-symbols-filled' : ''}`}>home</span>
              <span className="text-[10px] font-medium">Home</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('explore')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentScreen === 'explore' ? 'text-primary' : 'text-text-sub'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === 'explore' ? 'material-symbols-filled' : ''}`}>explore</span>
              <span className="text-[10px] font-medium">Explore</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('timeline')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${['timeline', 'members'].includes(currentScreen) ? 'text-primary' : 'text-text-sub'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${['timeline', 'members'].includes(currentScreen) ? 'material-symbols-filled' : ''}`}>groups</span>
              <span className="text-[10px] font-medium">My Circles</span>
            </button>
            <button 
              onClick={() => setCurrentScreen('profile')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentScreen === 'profile' ? 'text-primary' : 'text-text-sub'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === 'profile' ? 'material-symbols-filled' : ''}`}>person</span>
              <span className="text-[10px] font-medium">Profile</span>
            </button>
          </div>
        </nav>
      )}

      <style>{`
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </div>
  );
};

export default App;
