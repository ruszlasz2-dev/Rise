import React from 'react';

interface RiseScoreCardProps {
  score: number;
}

export function RiseScoreCard({ score }: RiseScoreCardProps) {
  const percentage = (score / 1000) * 100;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-6 shadow-lg">
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/90">
          Rise Score
        </p>
        <div className="mb-4 flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-white">{score}</span>
          <span className="text-lg text-white/70">/ 1000</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/30">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}



