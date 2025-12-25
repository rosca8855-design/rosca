
import React from 'react';
import { MOCK_ACTIVITY } from '../constants';

interface Props {
  onBack: () => void;
  onMembers: () => void;
}

const TimelineScreen: React.FC<Props> = ({ onBack, onMembers }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-stone-200 transition-colors">
        <div className="flex items-center justify-between p-4 pb-2">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-stone-200">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-lg font-bold tracking-tight">Family Vacation Fund</h2>
            <p className="text-xs font-medium text-stone-500">10 Members • Monthly</p>
          </div>
          <button className="p-2 -mr-2 rounded-full hover:bg-stone-200">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div className="flex px-4 pt-1">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-stone-900 dark:text-white pb-3 pt-2 flex-1 font-bold text-sm">
            Timeline
          </button>
          <button onClick={onMembers} className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-stone-500 pb-3 pt-2 flex-1 font-bold text-sm hover:text-stone-700">
            Members
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4 pb-24">
        <div className="bg-white dark:bg-stone-900 rounded-xl p-5 shadow-sm border border-stone-100 dark:border-stone-800">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-stone-500 text-sm font-medium mb-1">Current Pot</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight">$1,000</span>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Secured</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-stone-500 text-sm font-medium mb-1">Next Payout</p>
              <p className="text-xl font-bold">Oct 15</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold">Round 3 of 10</span>
              <span className="text-xs font-semibold text-primary">30%</span>
            </div>
            <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: '30%' }}></div>
            </div>
            <p className="text-xs text-stone-500 mt-1">Expected completion: May 2024</p>
          </div>
        </div>

        <div className="px-1 flex items-center gap-2 mb-6 pt-2">
          <span className="material-symbols-outlined text-stone-400">history</span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">Activity Log</h3>
        </div>

        <div className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800 ml-3 space-y-10">
          {MOCK_ACTIVITY.map((act, idx) => (
            <div key={act.id} className="relative">
              <div className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full ring-4 ring-background-light dark:ring-background-dark ${idx === 0 ? 'bg-primary' : (act.type === 'summary' ? 'bg-emerald-500' : 'bg-stone-300')}`}></div>
              {act.date && <p className={`text-xs font-bold mb-4 uppercase tracking-wider ${idx === 0 ? 'text-primary' : 'text-stone-500'}`}>{act.date}</p>}
              
              {act.type === 'summary' ? (
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-800 rounded-lg text-emerald-600 dark:text-emerald-400 shrink-0">
                      <span className="material-symbols-outlined">emoji_events</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-bold text-emerald-900 dark:text-emerald-200">{act.statusText}</p>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{act.tag}</span>
                      </div>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">{act.description}</p>
                    </div>
                  </div>
                </div>
              ) : act.type === 'payout' ? (
                <div className="bg-amber-50 dark:bg-primary/10 p-4 rounded-xl border border-primary/20 shadow-sm relative overflow-hidden">
                  <div className="flex items-start gap-3">
                    <img src={act.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-bold">{act.user}</p>
                          <p className="text-xs text-stone-600 dark:text-stone-400">{act.statusText}</p>
                        </div>
                        <span className="text-lg font-bold text-primary">${act.amount}</span>
                      </div>
                      <div className="mt-3">
                        <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-1 text-xs font-medium text-stone-600 shadow-sm">
                          <span className="material-symbols-outlined text-[14px] mr-1 text-primary">celebration</span>
                          {act.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-stone-100 dark:border-stone-800 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      {act.avatar ? (
                        <img src={act.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">You</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold">{act.user}</p>
                          <p className="text-xs text-stone-500 mt-0.5">{act.statusText}</p>
                        </div>
                        <span className="text-sm font-bold">${Math.abs(act.amount || 0).toFixed(2)}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                        {act.time && <span className="text-[10px] text-stone-400">{act.time}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent flex justify-center pb-8 pt-12 pointer-events-none">
        <button className="pointer-events-auto flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-full shadow-xl w-full active:scale-95 transition-all">
          <span className="material-symbols-outlined">payments</span>
          Make Contribution
        </button>
      </div>
    </div>
  );
};

export default TimelineScreen;
