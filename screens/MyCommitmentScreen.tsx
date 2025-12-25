
import React from 'react';

interface Props {
  onBack: () => void;
}

const MyCommitmentScreen: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <div className="flex items-center bg-white p-4 justify-between sticky top-0 z-20 shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2 hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Circle Home</h2>
        <button className="p-2 -mr-2 text-text-main">
          <span className="material-symbols-outlined text-[24px]">info</span>
        </button>
      </div>

      <div className="px-5 py-4 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">Supporter</span>
          <span className="text-xs text-text-sub font-medium">Monthly Cycle</span>
        </div>
        <h1 className="tracking-tight text-[32px] font-extrabold leading-tight">My Commitment</h1>
      </div>

      <div className="px-5 pb-6 bg-white">
        <div className="flex flex-col items-stretch rounded-3xl shadow-sm bg-white overflow-hidden border border-slate-100 relative">
          <div className="w-full h-40 bg-cover bg-center relative" style={{ backgroundImage: "url('https://picsum.photos/seed/commit/600/300')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-white/60 to-white"></div>
          </div>
          <div className="flex w-full flex-col gap-1 -mt-20 px-6 pb-6 relative z-10">
            <div className="flex justify-start mb-3">
              <div className="bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Payment Due Soon</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-text-sub text-sm font-medium mb-1">Due Date</p>
                <h2 className="text-4xl font-extrabold tracking-tight">Oct 15</h2>
                <p className="text-text-sub text-base font-medium mt-1">Amount: <span className="text-text-main font-bold text-lg">$200.00</span></p>
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-primary-blue shadow-sm ring-4 ring-white">
                <span className="material-symbols-outlined text-[32px] material-symbols-filled">calendar_month</span>
              </div>
            </div>

            <div className="mb-5 p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
              <div className="bg-white p-2 rounded-full shadow-sm text-rose-500">
                <span className="material-symbols-outlined text-[20px] material-symbols-filled">volunteer_activism</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                Your contribution creates opportunity. This month, you are supporting <span className="font-bold">Sarah's</span> goal.
              </p>
            </div>

            <button className="flex w-full items-center justify-center rounded-xl h-14 bg-primary-blue hover:bg-blue-600 text-white font-bold text-lg shadow-lg active:scale-95 transition-all">
              Mark as Paid <span className="material-symbols-outlined ml-2">check</span>
            </button>
            <button className="w-full mt-3 text-xs text-slate-400">Report an issue with this payment</button>
          </div>
        </div>
      </div>

      <div className="px-5 pb-8 bg-white">
        <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-emerald-600 shadow-sm">
              <span className="material-symbols-outlined text-[24px] material-symbols-filled">workspace_premium</span>
            </div>
            <div>
              <p className="text-emerald-950 font-bold">Trust Score</p>
              <p className="text-emerald-700/80 text-xs font-medium">Top 10% of contributors</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-emerald-700 tracking-tight">850</p>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Points</p>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white border-t border-slate-100">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-lg font-bold">Cycle Progress</h3>
              <p className="text-text-sub text-sm">Month 3 of 12</p>
            </div>
            <span className="text-2xl font-bold text-primary-blue">25%</span>
          </div>
          <div className="relative pt-2">
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-primary-blue transition-all" style={{ width: '25%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-text-sub mt-2 font-medium">
              <span>Start</span>
              <span>Finish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCommitmentScreen;
