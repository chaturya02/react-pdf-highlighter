import React from 'react';

const AnalysisPanel = ({ onHighlightRequest }) => {
  const handleReferenceClick = (referenceId) => {
    if (referenceId === '3') {
      onHighlightRequest('gain-on-sale');
    }
  };

  return (
    <div className="analysis-content">
      <h2>Analysis</h2>
      <p>
        No extraordinary or one-off items affecting EBITDA were reported in Maersk's Q2 2025 results. 
        The report explicitly notes that EBITDA improvements stemmed from operational performance- 
        including volume growth, cost control, and margin improvement across Ocean, Logistics & Services, 
        and Terminals segments <span className="reference" onClick={() => handleReferenceClick('1')}>[1]</span>
        <span className="reference" onClick={() => handleReferenceClick('2')}>[2]</span>. 
        Gains or losses from asset sales, which could qualify as extraordinary items, are shown separately 
        under EBIT and not included in EBITDA. The gain on sale of non-current assets was USD 25 m in Q2 2025, 
        significantly lower than USD 208 m in Q2 2024, but these affect EBIT, not EBITDA{' '}
        <span className="reference" onClick={() => handleReferenceClick('3')}>[3]</span>. 
        Hence, Q2 2025 EBITDA reflects core operating activities without one-off extraordinary adjustments.
      </p>

      <div className="findings-section">
        <h3>Findings</h3>
        
        <div className="evidence-item">
          <strong>Page 3 - Highlights Q2 2025</strong>
          <p>
            EBITDA increase (USD 2.3 bn vs USD 2.1 bn prior year) attributed to operational improvements; 
            no mention of extraordinary or one-off items. <span className="reference" onClick={() => handleReferenceClick('1')}>[1]</span>
          </p>
        </div>

        <div className="evidence-item">
          <strong>Page 5 - Review Q2 2025</strong>
          <p>
            EBITDA rise driven by higher revenue and cost control across all segments; no extraordinary 
            gains or losses included. <span className="reference" onClick={() => handleReferenceClick('2')}>[2]</span>
          </p>
        </div>

        <div className="evidence-item">
          <strong>Page 15 - Condensed Income Statement</strong>
          <p>
            Gain on sale of non-current assets USD 25 m (vs USD 208 m prior year) reported separately 
            below EBITDA; therefore, not part of EBITDA. <span className="reference" onClick={() => handleReferenceClick('3')}>[3]</span>
          </p>
        </div>
      </div>

      <div className="evidence-section">
        <h3>Supporting Evidence</h3>
        
        <div className="evidence-item">
          <p>
            <strong><span className="reference" onClick={() => handleReferenceClick('1')}>[1]</span> A.P. Moller - Maersk Q2 2025 Interim Report (7 Aug 2025) - Page 3</strong>
          </p>
          <div className="quote">
            "Maersk's results continued to improve year-on-year ... EBITDA of USD 2.3 bn (USD 2.1 bn) ... 
            driven by volume and other revenue growth in Ocean, margin improvements in Logistics & Services 
            and significant top line growth in Terminals."
          </div>
        </div>

        <div className="evidence-item">
          <p>
            <strong><span className="reference" onClick={() => handleReferenceClick('2')}>[2]</span> A.P. Moller - Maersk Q2 2025 Interim Report (7 Aug 2025) - Page 5</strong>
          </p>
          <div className="quote">
            "EBITDA increased to USD 2.3 bn (USD 2.1 bn) ... driven by higher revenue and cost management
            ... Ocean's EBITDA ... slightly increased by USD 36 m ... Logistics & Services contributed 
            significantly with a USD 71 m increase ... Terminals' EBITDA increased by USD 50 m."
          </div>
        </div>

        <div className="evidence-item">
          <p>
            <strong><span className="reference" onClick={() => handleReferenceClick('3')}>[3]</span> A.P. Moller - Maersk Q2 2025 Interim Report (7 Aug 2025) - Page 15</strong>
          </p>
          <div className="quote">
            "Gain on sale of non-current assets, etc., net 25 (208) ... Profit before depreciation, 
            amortisation and impairment losses, etc. (EBITDA) 2,298"
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
        <p><strong>💡 Tip:</strong> Click on any reference number (like <span className="reference">[3]</span>) to highlight the corresponding text in the PDF.</p>
      </div>
    </div>
  );
};

export default AnalysisPanel;