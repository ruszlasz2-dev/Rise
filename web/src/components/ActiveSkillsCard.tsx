import React from 'react';

export function ActiveSkillsCard() {
  const mockSkills = [
    { id: '1', name: 'Communication', level: 5, progress: 65 },
    { id: '2', name: 'Mindfulness', level: 3, progress: 40 },
    { id: '3', name: 'Critical Thinking', level: 7, progress: 80 },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-ink">Active Skills</h2>
      <div className="space-y-4">
        {mockSkills.map((skill) => (
          <div key={skill.id}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-ink">{skill.name}</span>
              <span className="text-sm text-ink/50">Level {skill.level}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-amber-500 transition-all duration-500"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



