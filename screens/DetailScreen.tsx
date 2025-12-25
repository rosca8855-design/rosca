
import React from 'react';
import { Circle } from '../types';

interface Props {
  circle: Circle;
  onBack: () => void;
  onJoin: () => void;
}

const DetailScreen: React.FC<Props> = ({ circle, onBack, onJoin }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 border-b border-slate-100 dark:border-slate-800">
        <button onClick={onBack} className="p-2 -ml-2 hover:opacity-70">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold truncate px-2">{circle.name}</h2>
        <button className="p-2 -mr-2 hover:opacity-70 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="flex flex-col items-center pt-8 pb-6 px-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide mb-1">Monthly Contribution</p>
          <h1 className="text-slate-900 dark:text-white text-[40px] font-extrabold leading-tight tracking-tight text-center">
            ${circle.contribution} <span className="text-2xl text-slate-400 font-bold">/ {circle.frequency === 'monthly' ? 'mo' : 'wk'}</span>
          </h1>
          <div className="mt-3 inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-slate-500 text-sm">analytics</span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Liquidity Profile: {circle.liquidityProfile}</span>
          </div>
        </div>

        <div className="flex flex-row gap-3 px-4 pb-6 overflow-x-auto no-scrollbar">
          <div className="flex flex-1 min-w-[100px] flex-col gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-4 items-center text-center">
            <p className="text-primary-blue text-xl font-bold leading-tight">${circle.contribution * circle.duration}</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Total Payout</p>
          </div>
          <div className="flex flex-1 min-w-[100px] flex-col gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-4 items-center text-center">
            <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight">{circle.duration} mo</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Duration</p>
          </div>
          <div className="flex flex-1 min-w-[100px] flex-col gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-4 items-center text-center">
            <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight">{circle.startDate}</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Starts</p>
          </div>
        </div>

        <div className="px-4 pb-8">
          <div className="rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-blue text-[20px]">info</span>
              <p className="text-slate-900 dark:text-white text-sm font-bold">Economic Role Clarity</p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              This is an interest-free community circle. If you receive an <span className="font-bold">Early Payout</span>, you are accessing immediate liquidity. If you receive a <span className="font-bold">Late Payout</span>, you act as a supporter for others before receiving your own savings.
            </p>
          </div>
        </div>

        <div className="h-2 w-full bg-slate-50 dark:bg-slate-900/50"></div>

        <div className="p-4 pt-6">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Governance & Timeline</h3>
          <div className="flex relative pb-8 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 space-y-8">
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary-blue border-4 border-white dark:border-background-dark"></div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Start Date: {circle.startDate}, 2024</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">First contribution & payout occurs.</p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-background-dark"></div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">End Date: {circle.endDate}, 2025</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Circle completes after {circle.duration} rounds.</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 p-4 mb-4 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary-blue">
                <span className="material-symbols-outlined text-[20px]">gavel</span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-sm font-bold">Payout Order: {circle.payoutOrder}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  {circle.payoutOrder === 'Admin Assigned' ? 'The admin assigns payout order based on member needs and trust history.' : 'The payout order is randomized or handled via community bidding.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 w-full bg-slate-50 dark:bg-slate-900/50"></div>

        <div className="p-4 pt-6">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Meet the Admin</h3>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800/30 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <img className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src={circle.admin.avatar} alt="" />
                <div className="absolute -bottom-1 -right-1 bg-primary-blue text-white rounded-full p-[2px] border-2 border-white">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                </div>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base">{circle.admin.name}</h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-[10px] font-bold uppercase tracking-wider">{circle.admin.role}</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">format_quote</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                I'm starting this circle to fund my goal. Looking for reliable neighbors who want to save together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 p-4 pb-8 z-40 shadow-xl">
        <div className="flex items-center justify-between mb-3 text-xs text-slate-500 px-1">
          <span>By joining, you agree to the <a className="underline hover:text-primary" href="#">Circle Rules</a></span>
          <span>Waitlist: 2 people</span>
        </div>
        <button 
          onClick={onJoin}
          className="w-full h-12 bg-primary-blue hover:bg-primary-blue/90 rounded-lg text-white font-bold text-base shadow-lg shadow-primary-blue/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
        >
          <span>Request to Join</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default DetailScreen;
