import axios from 'axios';
import { useState } from 'react';

function UploadForm({ setData }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8000/upload', formData);
      const res = await axios.get('http://localhost:8000/summary');
      setData(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to upload or fetch data.");
    }
  };

  return (
    <div className="mb-6">
      <input type="file" accept=".txt" onChange={e => setFile(e.target.files[0])} />
      <button
        className="ml-4 px-4 py-1 bg-blue-500 text-white rounded"
        onClick={handleUpload}
      >
        Upload & Analyze
      </button>
    </div>
  );
}

export default UploadForm;
