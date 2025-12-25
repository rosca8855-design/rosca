
import React from 'react';

interface Props {
  onBack: () => void;
}

const MembersScreen: React.FC<Props> = ({ onBack }) => {
  const members = [
    { name: 'Sarah J.', turn: 1, status: 'Paid', avatar: 'https://picsum.photos/seed/sarah/100/100', admin: true },
    { name: 'David K.', turn: 2, status: 'Paid', avatar: 'https://picsum.photos/seed/david/100/100' },
    { name: 'Elena R.', turn: 5, status: 'Pending', avatar: 'https://picsum.photos/seed/elena/100/100' },
    { name: 'Anita P.', turn: 6, status: 'Pending', avatar: 'https://picsum.photos/seed/anita/100/100' },
    { name: 'Robert M.', turn: 7, status: 'Pending', avatar: 'https://picsum.photos/seed/robert/100/100' },
    { name: 'James L.', turn: 11, status: 'Paid', avatar: 'https://picsum.photos/seed/james/100/100', supporting: true },
    { name: 'Michael T.', turn: 12, status: 'Paid', avatar: 'https://picsum.photos/seed/michael/100/100', supporting: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-surface-dark backdrop-blur-md border-b border-slate-200">
        <div className="px-4 h-14 flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2 text-text-main dark:text-white">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-[17px] font-bold text-text-main dark:text-white tracking-tight">Family Savings Group</h1>
          <button className="p-2 -mr-2 text-text-sub">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>
        <div className="flex px-2">
          <button onClick={onBack} className="flex-1 pb-3 pt-2 text-sm font-semibold text-text-sub text-center border-b-[3px] border-transparent">Overview</button>
          <button className="flex-1 pb-3 pt-2 text-sm font-bold text-primary-blue text-center border-b-[3px] border-primary-blue">Members</button>
          <button className="flex-1 pb-3 pt-2 text-sm font-semibold text-text-sub text-center border-b-[3px] border-transparent">Activity</button>
        </div>
      </header>

      <div className="px-4 pt-6 pb-24 flex flex-col gap-6">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">Total Pool</span>
            <span className="text-3xl font-extrabold text-text-main dark:text-white tracking-tight">$12,000</span>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-primary-blue rounded-full">
              <span className="material-symbols-outlined text-[16px] material-symbols-filled">calendar_month</span>
              <span className="text-xs font-bold uppercase tracking-wide">Oct 15</span>
            </div>
            <span className="text-[11px] font-medium text-text-sub">Next Payout</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-text-main dark:text-white">Circle Members</h2>
            <span className="text-sm font-medium text-text-sub">(12)</span>
          </div>
          <span className="text-xs font-semibold text-primary-blue bg-blue-50 px-2.5 py-1 rounded-full">Cycle 4 of 12</span>
        </div>

        {/* User Card Highlight */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-lg border border-primary-blue/20 relative overflow-hidden ring-1 ring-primary-blue/5">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-blue"></div>
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-cover bg-center border-[3px] border-white shadow-sm" style={{ backgroundImage: "url('https://picsum.photos/seed/me/100/100')" }}></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-text-main dark:text-white">You</h3>
                <span className="text-xs font-bold text-primary-blue bg-blue-50 px-2 py-0.5 rounded">Turn 4</span>
              </div>
              <p className="text-sm text-text-sub leading-snug">It's almost your turn to receive the pool.</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-text-sub uppercase tracking-wider">Status</span>
              <span className="text-sm font-semibold text-text-main dark:text-white">Awaiting payment</span>
            </div>
            <button className="bg-primary-blue hover:bg-blue-600 text-white text-sm font-bold py-2 px-5 rounded-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
              Pay $250
            </button>
          </div>
        </div>

        {/* Other Members */}
        <div className="flex flex-col gap-3">
          {members.map((m, idx) => (
            <div key={idx} className="bg-white dark:bg-surface-dark rounded-xl p-4 flex items-center justify-between shadow-sm border border-transparent hover:border-slate-200 transition-all">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <img src={m.avatar} className={`w-11 h-11 rounded-full bg-slate-100 shrink-0 ${m.status === 'Pending' ? 'grayscale opacity-80' : ''}`} alt="" />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[15px] font-bold text-text-main dark:text-white truncate">{m.name}</p>
                    {m.admin && <span className="material-symbols-outlined text-[14px] text-primary-blue material-symbols-filled">verified_user</span>}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs text-text-sub font-medium">Turn {m.turn}</p>
                    {m.supporting && (
                      <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[12px] material-symbols-filled">spa</span>
                        <span className="text-[10px] font-bold uppercase tracking-wide">Supporting</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${m.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                <span className="material-symbols-outlined text-[16px] material-symbols-filled">{m.status === 'Paid' ? 'check_circle' : 'hourglass_empty'}</span>
                <span className="text-xs font-bold">{m.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-text-sub/70 max-w-xs mx-auto leading-relaxed">
            Everyone plays a part. Your reliable payments help the circle thrive for all members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembersScreen;
