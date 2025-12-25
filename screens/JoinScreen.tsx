
import React, { useState } from 'react';
import { Circle } from '../types';

interface Props {
  circle: Circle;
  onBack: () => void;
  onComplete: () => void;
}

const JoinScreen: React.FC<Props> = ({ circle, onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [committed, setCommitted] = useState(false);
  const [informedConsent, setInformedConsent] = useState(false);

  if (step === 1) {
    return (
      <div className="flex flex-col min-h-screen bg-background-light">
        <div className="flex items-center px-4 py-3 justify-between bg-background-light">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-gray-900 text-lg font-bold">Join Circle</h2>
          <p className="text-gray-500 text-xs font-bold uppercase">Step 1</p>
        </div>
        <div className="px-6 pb-2">
          <div className="rounded-full bg-gray-200 h-1.5 w-full overflow-hidden">
            <div className="h-full rounded-full bg-primary-blue transition-all" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="flex-1 px-6 pt-6 pb-32">
          <h1 className="text-gray-900 tracking-tight text-3xl font-extrabold mb-3">What is your goal?</h1>
          <p className="text-gray-600 text-base mb-8">Let the group know why you are saving. Sharing your goal helps build trust.</p>
          <div className="flex flex-col gap-3">
            <label className="text-gray-900 text-base font-semibold ml-1">Why are you joining?</label>
            <textarea 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              maxLength={140}
              placeholder="e.g., Saving for a wedding, paying off debt..."
              className="w-full resize-none rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary-blue min-h-[120px] p-5 shadow-sm"
            />
            <div className="flex justify-between items-center px-1">
              <p className="text-gray-500 text-sm">Visible to group admin</p>
              <span className="text-xs text-gray-400 font-medium">{goal.length}/140 chars</span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-gradient-to-t from-background-light to-transparent">
          <button 
            disabled={!goal}
            onClick={() => setStep(2)}
            className="flex w-full items-center justify-center rounded-full bg-primary-blue hover:bg-blue-600 text-white font-bold h-14 shadow-lg shadow-blue-500/20 active:scale-95 transition-all disabled:opacity-50"
          >
            Continue
          </button>
          <button onClick={() => setStep(2)} className="w-full mt-3 h-12 text-gray-500 font-medium text-sm">Skip for now</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      <header className="flex items-center p-4 justify-between">
        <button onClick={() => setStep(1)} className="p-2 hover:opacity-70">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-12">Join Circle</h2>
      </header>

      <div className="flex items-center justify-center gap-3 py-4">
        <div className="h-1.5 w-8 rounded-full bg-primary-yellow"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary-yellow"></div>
        <div className="h-1.5 w-2 rounded-full bg-gray-200"></div>
      </div>

      <main className="flex-1 flex flex-col px-6 pt-4 pb-32">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold pb-2">Review your Circle</h2>
          <p className="text-slate-500 text-base">Please confirm the details before committing.</p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark border border-slate-100 p-8 items-center text-center shadow-sm">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Total Payout Estimate</p>
            <p className="text-primary-yellow tracking-tight text-5xl font-extrabold mb-1">${circle.contribution * circle.duration}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-primary-blue/5 rounded-2xl p-4 border border-primary-blue/10">
            <label className="flex items-start gap-4 cursor-pointer">
              <input 
                type="checkbox" 
                checked={informedConsent}
                onChange={(e) => setInformedConsent(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-blue focus:ring-primary-blue cursor-pointer" 
              />
              <div className="flex-1">
                <p className="font-bold text-slate-900 dark:text-white text-sm">Role Acknowledgment</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                  I understand that my payout position determines my role: early positions provide liquidity, while later positions provide community support.
                </p>
              </div>
            </label>
          </div>

          <div className="bg-primary-yellow/10 rounded-2xl p-4 border border-primary-yellow/20">
            <label className="flex items-start gap-4 cursor-pointer">
              <input 
                type="checkbox" 
                checked={committed}
                onChange={(e) => setCommitted(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-yellow focus:ring-primary-yellow cursor-pointer" 
              />
              <div className="flex-1">
                <p className="font-bold text-slate-900 dark:text-white text-sm">Group Commitment</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                  Missing a payment affects everyone. I commit to making all contributions on time.
                </p>
              </div>
            </label>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white dark:bg-surface-dark border-t border-slate-100">
        <button 
          disabled={!committed || !informedConsent}
          onClick={onComplete}
          className="flex w-full items-center justify-center rounded-xl bg-primary-yellow hover:bg-yellow-500 text-stone-900 font-bold h-14 shadow-lg active:scale-95 transition-all disabled:opacity-50"
        >
          Confirm & Join
        </button>
      </div>
    </div>
  );
};

export default JoinScreen;
