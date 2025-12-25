
import React from 'react';
import { MOCK_CIRCLES, CATEGORIES } from '../constants';
import { Circle } from '../types';

interface Props {
  onSelect: (circle: Circle) => void;
}

const ExploreScreen: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="p-4 pb-0 sticky top-0 z-20 bg-background-light dark:bg-background-dark">
        <div className="flex items-center h-12 justify-between">
          <div className="flex items-center gap-2"></div>
          <button className="text-text-main dark:text-white">
            <span className="material-symbols-outlined text-3xl">notifications</span>
          </button>
        </div>
        <h1 className="text-text-main dark:text-white tracking-tight text-[28px] font-bold leading-tight">Explore Circles</h1>
      </div>

      {/* Search */}
      <div className="px-4 py-3 sticky top-[90px] z-10 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex w-full items-center rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 h-12 px-4 shadow-sm">
          <span className="material-symbols-outlined text-text-sub mr-2">search</span>
          <input 
            type="text" 
            placeholder="Try 'Travel' or 'Under $200'" 
            className="flex-1 bg-transparent border-none focus:ring-0 text-base placeholder:text-text-sub dark:text-white"
          />
          <span className="material-symbols-outlined text-primary cursor-pointer">tune</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat, idx) => (
          <button 
            key={cat}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-3 shadow-sm transition-all active:scale-95 text-sm font-medium ${idx === 1 ? 'bg-primary text-white' : 'bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-text-main dark:text-white'}`}
          >
            {cat}
            {idx === 0 && <span className="material-symbols-outlined text-lg">expand_more</span>}
            {idx === 1 && <span className="material-symbols-outlined text-lg">close</span>}
          </button>
        ))}
      </div>

      {/* Circles List */}
      <div className="flex flex-col gap-5 p-4">
        {MOCK_CIRCLES.map((circle) => (
          <div 
            key={circle.id}
            onClick={() => onSelect(circle)}
            className="flex flex-col rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] bg-surface-light dark:bg-surface-dark overflow-hidden border border-gray-100 dark:border-gray-800 cursor-pointer group hover:shadow-md transition-all"
          >
            {circle.image ? (
              <div className="relative w-full h-32 bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${circle.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-0.5 text-xs font-semibold text-text-main backdrop-blur-md">
                    <span className="material-symbols-outlined text-[14px]">storefront</span>
                    {circle.category}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex p-4 gap-4 items-start">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined text-4xl">flight_takeoff</span>
                </div>
                <div className="flex flex-col flex-1 gap-1">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{circle.category}</span>
                    <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> {circle.status}
                    </span>
                  </div>
                  <h3 className="text-text-main dark:text-white text-lg font-bold">{circle.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-text-main dark:text-white font-bold text-lg">${circle.contribution}</span>
                    <span className="text-text-sub text-sm">/ {circle.frequency === 'monthly' ? 'month' : 'week'} • {circle.duration} Rounds</span>
                  </div>
                </div>
              </div>
            )}

            {circle.image && (
              <div className="p-4 flex flex-col gap-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-text-main dark:text-white text-lg font-bold">{circle.name}</h3>
                    {circle.spotsLeft && <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full text-xs font-bold">{circle.spotsLeft} Spots Left</span>}
                  </div>
                  <p className="text-text-sub text-sm">Starts {circle.startDate} • {circle.frequency === 'monthly' ? 'Monthly' : 'Weekly'} Payouts</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-background-light dark:bg-background-dark/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-text-sub text-xs font-medium">Contribution</span>
                    <span className="text-text-main dark:text-white font-bold text-base">${circle.contribution} <span className="text-xs font-normal text-text-sub">/ mo</span></span>
                  </div>
                  <div className="flex flex-col border-l border-gray-200 dark:border-gray-600 pl-3">
                    <span className="text-text-sub text-xs font-medium">Duration</span>
                    <span className="text-text-main dark:text-white font-bold text-base">{circle.duration} Rounds</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3 mt-1">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <img src={circle.admin.avatar} className="w-8 h-8 rounded-full bg-gray-300" alt="" />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-white w-3 h-3"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-text-main dark:text-white text-xs font-bold">{circle.admin.name}</span>
                      <div className="flex items-center gap-0.5 text-primary">
                        <span className="material-symbols-outlined text-[12px]">verified_user</span>
                        <span className="text-[10px] font-medium uppercase tracking-wider">{circle.admin.role}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary/10 hover:bg-primary/20 text-primary rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors">
                    View
                  </button>
                </div>
              </div>
            )}

            {!circle.image && (
               <div className="px-4 pb-4 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <div className="flex -space-x-2 overflow-hidden">
                   <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-200"></div>
                   <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-300 flex items-center justify-center text-[10px] font-bold text-text-sub">+3</div>
                 </div>
                 <span className="text-xs text-text-sub">{circle.membersJoined} joined</span>
               </div>
               <button className="bg-primary hover:bg-orange-600 text-white rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-colors">
                 Details
               </button>
             </div>
            )}
          </div>
        ))}

        <div className="flex flex-col items-center justify-center py-6 gap-2">
          <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <p className="text-text-sub text-sm">That's all for now</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
