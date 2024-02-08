import React from 'react';

export default function Output({ bmi, desc }) {
  return (
    <section className="output">
      <h3>Your BMI is</h3>
      <p id="bmi">{bmi}</p>
      <p id="desc">{desc}</p>
    </section>
  );
}
