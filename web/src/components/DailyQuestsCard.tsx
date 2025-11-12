import React from 'react';

export function DailyQuestsCard() {
  const mockQuests = [
    { id: '1', title: 'Practice Active Listening', xp: 50, status: 'pending' },
    { id: '2', title: 'Complete Morning Meditation', xp: 25, status: 'accepted' },
    { id: '3', title: 'Read 20 Pages', xp: 75, status: 'pending' },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink">Today's Quests</h2>
        <span className="text-sm text-ink/50">{mockQuests.length} available</span>
      </div>
      <div className="space-y-3">
        {mockQuests.map((quest) => (
          <div
            key={quest.id}
            className={`flex items-center justify-between rounded-xl p-4 ${
              quest.status === 'accepted'
                ? 'border border-amber-400 bg-amber-50'
                : 'bg-background'
            }`}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-ink">{quest.title}</h3>
              <p className="text-sm font-semibold text-amber-500">+{quest.xp} XP</p>
            </div>
            <button
              className={`rounded-lg px-5 py-2.5 font-semibold text-white transition ${
                quest.status === 'accepted'
                  ? 'bg-amber-500 hover:bg-amber-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              {quest.status === 'accepted' ? 'Complete' : 'Accept'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}




