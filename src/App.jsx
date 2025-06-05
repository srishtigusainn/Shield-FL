import React from 'react';
import LogViewer from './components/LogViewer';
import MetricsChart from './components/MetricsChart';
import SimulationPanel from './components/SimulationPanel';

const App = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">ShieldFL Dashboard</h1>
      <SimulationPanel />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <LogViewer />
        <MetricsChart />
      </div>
    </div>
  );
};

export default App;
