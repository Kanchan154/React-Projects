import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setSummary(data.summary || 'No summary returned');
    } catch (error) {
      console.error('Error:', error);
      setSummary('Error generating summary.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Text Summarizer</h1>
      <textarea
        rows="10"
        cols="80"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
      />
      <br />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default App;
