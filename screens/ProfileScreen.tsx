
import React from 'react';

interface Props {
  onBack: () => void;
}

const ProfileScreen: React.FC<Props> = ({ onBack }) => {
  const badges = [
    { title: 'Early Backer', subtitle: 'Joined beta', icon: 'rocket_launch', color: 'bg-orange-100 text-orange-600' },
    { title: 'Consistent', subtitle: '12mo streak', icon: 'savings', color: 'bg-emerald-100 text-emerald-600' },
    { title: 'Guide', subtitle: 'Helped 5 newbies', icon: 'diversity_3', color: 'bg-purple-100 text-purple-600' },
  ];

  const activity = [
    { text: 'Contribution made', sub: 'Family Vacation Circle • Week 4', time: '2d ago', icon: 'check_circle', color: 'text-primary' },
    { text: 'Cycle Completed', sub: 'Supported 8 rounds early', time: '1w ago', icon: 'celebration', color: 'text-emerald-600' },
    { text: 'Unlocked "Guide" Badge', sub: 'Invited 3 trusted friends', time: '2w ago', icon: 'lock_open', color: 'text-primary' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <button onClick={onBack} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Community History</h2>
        <div className="flex w-12 items-center justify-end text-text-sub">
          <span className="material-symbols-outlined">help</span>
        </div>
      </div>

      <div className="flex flex-col items-center p-4 pt-2">
        <div className="relative group mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-full blur opacity-40"></div>
          <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-4 border-background-light bg-gray-200" style={{ backgroundImage: "url('https://picsum.photos/seed/amara/200/200')" }}></div>
          <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-4 border-background-light flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px] material-symbols-filled">verified</span>
          </div>
        </div>
        <h1 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-center">Amara Okafor</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-text-sub text-sm font-medium">Member since 2021</span>
          <span className="w-1 h-1 rounded-full bg-text-sub"></span>
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Supporter Status</span>
        </div>
      </div>

      <div className="px-6 py-2">
        <h2 className="tracking-tight text-[22px] font-bold leading-tight text-center">Your support makes neighbors stronger.</h2>
        <p className="text-text-sub text-center mt-2 text-sm">Your reliable contributions have enabled liquidity for 24 community members.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 py-6">
        <div className="bg-white dark:bg-surface-dark rounded-xl p-4 flex flex-col gap-3 shadow-sm border border-transparent">
          <div className="flex items-center justify-between">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <span className="material-symbols-outlined material-symbols-filled">all_inclusive</span>
            </div>
            <span className="text-[10px] font-bold text-text-sub uppercase tracking-wider">Completed</span>
          </div>
          <div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-[11px] text-slate-500 leading-tight">Full cycles finished</p>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-xl p-4 flex flex-col gap-3 shadow-sm border border-transparent">
          <div className="flex items-center justify-between">
            <div className="bg-emerald-100/50 p-2 rounded-full text-emerald-600">
              <span className="material-symbols-outlined material-symbols-filled">volunteer_activism</span>
            </div>
            <span className="text-[10px] font-bold text-text-sub uppercase tracking-wider">Impact</span>
          </div>
          <div>
            <p className="text-2xl font-bold">14</p>
            <p className="text-[11px] text-slate-500 leading-tight">Times acted as late supporter</p>
          </div>
        </div>

        <div className="col-span-2 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20 rounded-xl p-5 flex flex-row items-center gap-4 shadow-sm border border-primary/10">
          <div className="bg-white dark:bg-white/10 p-3 rounded-full text-primary shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px] material-symbols-filled">handshake</span>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">Community Supporter Legacy</p>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
              You've contributed to <span className="font-bold text-primary">52 rounds</span> total, supporting neighbors through interest-free liquidity.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-2">
        <h3 className="text-lg font-bold leading-tight">Badges & Roles</h3>
        <button className="text-primary text-sm font-bold">View all</button>
      </div>

      <div className="flex overflow-x-auto pb-4 px-4 gap-3 no-scrollbar">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col gap-3 rounded-xl min-w-[140px] bg-white dark:bg-surface-dark p-3 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className={`w-full aspect-[4/3] rounded-lg flex items-center justify-center relative overflow-hidden ${badge.color}`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30"></div>
              <span className="material-symbols-outlined text-4xl material-symbols-filled">{badge.icon}</span>
            </div>
            <div>
              <p className="text-sm font-bold leading-normal">{badge.title}</p>
              <p className="text-text-sub text-[10px] font-normal leading-normal">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h3 className="text-lg font-bold leading-tight">Recent Activity</h3>
      </div>

      <div className="flex flex-col px-4 pb-24 gap-4">
        {activity.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 ${item.color}`}>
              <span className="material-symbols-outlined text-[20px] material-symbols-filled">{item.icon}</span>
            </div>
            <div className="flex flex-1 flex-col pt-0.5">
              <p className="text-sm font-bold leading-snug">{item.text}</p>
              <p className="text-text-sub text-xs font-normal leading-normal">{item.sub}</p>
            </div>
            <p className="text-text-sub text-[10px] font-medium pt-1">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
