import { useState } from 'react';
import UploadForm from './components/UploadForm';
import Chart from './components/Chart';
import ActiveUsersTable from './components/ActiveUsersTable'; 

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 WhatsApp Chat Analyzer</h1>
      <UploadForm setData={setData} />
      {data && (
        <>
          <Chart chartData={data.chartData} />
          <ActiveUsersTable users={data.active_4_days_users} /> 
        </>
      )}
    </div>
  );
}

export default App;
