import React from 'react';

export default function BMIScale() {
  return (
    <section className="bmi-scale">
      <div style={{ '--color': 'var(--underweight)' }}>
        <h4>Underweight</h4>
        <p>&lt; 18.5</p>
      </div>

      <div style={{ '--color': 'var(--normal)' }}>
        <h4>Normal</h4>
        <p>18.5 – 25</p>
      </div>

      <div style={{ '--color': 'var(--overweight)' }}>
        <h4>Overweight</h4>
        <p>25 – 30</p>
      </div>

      <div style={{ '--color': 'var(--obese)' }}>
        <h4>Obese</h4>
        <p>≥ 30</p>
      </div>
      
    </section>
    
  );
}
