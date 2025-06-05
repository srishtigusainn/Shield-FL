import React from 'react';

const dummyLogs = [
  "Round 1: Attack simulated",
  "Defense applied: Krum",
  "Model accuracy: 84.2%",
];

const LogViewer = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    <h2 className="text-xl font-semibold mb-3">Simulation Logs</h2>
    <div className="text-sm font-mono space-y-1">
      {dummyLogs.map((log, idx) => (
        <div key={idx} className="text-gray-800">{log}</div>
      ))}
    </div>
  </div>
);

export default LogViewer;
