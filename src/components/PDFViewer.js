import React, { useState, useEffect, useRef } from 'react';

const PDFViewer = ({ highlightTarget }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    if (highlightTarget === 'gain-on-sale') {
      setIsHighlighted(true);
      
      // Scroll to the highlighted section
      const highlightedRow = pageRef.current?.querySelector('.highlighted-row');
      if (highlightedRow) {
        highlightedRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [highlightTarget]);

  // PDF-like content representation
  const PDFContent = () => (
    <div className="pdf-content" style={{ 
      border: '2px solid #ddd', 
      borderRadius: '8px', 
      padding: '30px',
      backgroundColor: '#fefefe',
      fontFamily: 'Times New Roman, serif',
      fontSize: '13px',
      lineHeight: '1.6',
      maxHeight: '700px',
      overflow: 'auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'bold', fontSize: '16px' }}>
        A.P. Moller - Maersk Q2 2025 Interim Report<br/>
        <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Page 15 - Condensed Income Statement</span>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <strong>HIGHLIGHTS Q2 2025</strong><br/>
        <div style={{ marginLeft: '10px', fontSize: '12px', color: '#444' }}>
          EBITDA increase (USD 2.3 bn vs USD 2.1 bn prior year) attributed to operational 
          improvements; no mention of extraordinary or one-off items.
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <strong>REVIEW Q2 2025</strong><br/>
        <div style={{ marginLeft: '10px', fontSize: '12px', color: '#444' }}>
          EBITDA rise driven by higher revenue and cost control across all segments; 
          no extraordinary gains or losses included.
        </div>
      </div>

      <div>
        <strong style={{ fontSize: '14px' }}>CONDENSED INCOME STATEMENT</strong><br/>
        <div style={{ fontSize: '11px', marginTop: '5px', marginBottom: '15px', color: '#666' }}>
          Amounts in USD million
        </div>
        <table style={{ 
          marginTop: '10px', 
          borderCollapse: 'collapse', 
          width: '100%',
          border: '1px solid #ccc'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #333' }}>
              <th style={{ textAlign: 'left', padding: '8px', fontSize: '11px', fontWeight: 'bold' }}></th>
              <th style={{ textAlign: 'right', padding: '8px', fontSize: '11px', fontWeight: 'bold' }}>Q2<br/>2025</th>
              <th style={{ textAlign: 'right', padding: '8px', fontSize: '11px', fontWeight: 'bold' }}>Q2<br/>2024</th>
              <th style={{ textAlign: 'right', padding: '8px', fontSize: '11px', fontWeight: 'bold' }}>6M<br/>2025</th>
              <th style={{ textAlign: 'right', padding: '8px', fontSize: '11px', fontWeight: 'bold' }}>6M<br/>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px' }}>Revenue</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>13,130</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>12,771</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>26,451</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>25,126</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px' }}>Operating costs</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(10,832)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(10,627)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(21,443)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(21,392)</td>
            </tr>
            <tr style={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px', fontWeight: 'bold' }}>
                Profit before depreciation, amortisation and<br/>
                impairment losses, etc. (EBITDA)
              </td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px', fontWeight: 'bold' }}>2,298</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px', fontWeight: 'bold' }}>2,144</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px', fontWeight: 'bold' }}>5,008</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px', fontWeight: 'bold' }}>3,734</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px' }}>
                Depreciation, amortisation and<br/>
                impairment losses, etc.
              </td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(1,426)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(1,168)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(2,883)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(2,579)</td>
            </tr>
            <tr className="highlighted-row" style={{ 
              backgroundColor: isHighlighted ? '#ffff00' : 'transparent',
              borderBottom: '1px solid #eee',
              transition: 'background-color 0.5s ease'
            }}>
              <td style={{ 
                padding: '5px 8px', 
                fontSize: '12px', 
                fontWeight: isHighlighted ? 'bold' : 'normal',
                color: isHighlighted ? '#d63384' : 'black'
              }}>
                Gain on sale of non-current assets, etc.
              </td>
              <td style={{ 
                textAlign: 'right', 
                padding: '5px 8px', 
                fontSize: '12px',
                fontWeight: isHighlighted ? 'bold' : 'normal'
              }}>25</td>
              <td style={{ 
                textAlign: 'right', 
                padding: '5px 8px', 
                fontSize: '12px',
                fontWeight: isHighlighted ? 'bold' : 'normal'
              }}>208</td>
              <td style={{ 
                textAlign: 'right', 
                padding: '5px 8px', 
                fontSize: '12px',
                fontWeight: isHighlighted ? 'bold' : 'normal'
              }}>80</td>
              <td style={{ 
                textAlign: 'right', 
                padding: '5px 8px', 
                fontSize: '12px',
                fontWeight: isHighlighted ? 'bold' : 'normal'
              }}>215</td>
            </tr>
            <tr style={{ borderTop: '2px solid #333', backgroundColor: '#f8f9fa' }}>
              <td style={{ padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>
                Profit before financial items (EBIT)
              </td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>845</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>963</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>2,098</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>1,140</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px' }}>Financial items, net</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(111)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>13</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>66</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>164</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px' }}>Profit before tax</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>734</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>976</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>2,164</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>1,304</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px 8px', fontSize: '12px' }}>Tax</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(95)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(143)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(318)</td>
              <td style={{ textAlign: 'right', padding: '5px 8px', fontSize: '12px' }}>(263)</td>
            </tr>
            <tr style={{ borderTop: '2px solid #000', fontWeight: 'bold', backgroundColor: '#e9ecef' }}>
              <td style={{ padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>Profit for the period</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>639</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>833</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>1,846</td>
              <td style={{ textAlign: 'right', padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>1,041</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="pdf-viewer-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem',
        padding: '10px 15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3 style={{ margin: 0, color: '#495057' }}>
          📄 Maersk Q2 2025 Interim Report.pdf
        </h3>
        <div style={{ fontSize: '0.9em', color: '#6c757d' }}>
          Page 15 of 25
        </div>
      </div>
      
      <div ref={pageRef}>
        <PDFContent />
      </div>

      {isHighlighted && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '15px', 
          backgroundColor: '#d1ecf1', 
          borderRadius: '8px',
          textAlign: 'center',
          border: '2px solid #bee5eb'
        }}>
          🎯 <strong style={{ color: '#0c5460' }}>Successfully Highlighted!</strong>
          <div style={{ marginTop: '8px', fontSize: '14px', color: '#0c5460' }}>
            "<strong>Gain on sale of non-current assets, etc.</strong>" is now highlighted in yellow
          </div>
          <div style={{ fontSize: '12px', marginTop: '5px', color: '#6c757d' }}>
            Q2 2025: USD 25m (significantly lower than Q2 2024: USD 208m)
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;