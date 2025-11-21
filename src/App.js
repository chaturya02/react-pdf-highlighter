import React, { useState } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer';
import AnalysisPanel from './components/AnalysisPanel';

function App() {
  const [highlightTarget, setHighlightTarget] = useState(null);

  const handleHighlightRequest = (target) => {
    setHighlightTarget(target);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Maersk Q2 2025 Interim Report Analysis</h1>
      </header>
      <div className="main-content">
        <div className="pdf-section">
          <PDFViewer highlightTarget={highlightTarget} />
        </div>
        <div className="analysis-section">
          <AnalysisPanel onHighlightRequest={handleHighlightRequest} />
        </div>
      </div>
    </div>
  );
}

export default App;