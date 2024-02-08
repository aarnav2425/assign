import React, { useState } from 'react';

export default function CalculatorForm({ onSubmit, onReset }) {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState(); // Default to male

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseFloat(weight), parseFloat(height), gender);
  };

  const handleReset = () => {
    setWeight();
    setHeight();
    setGender(); // Reset gender to male
    onReset();
  };

  return (
    <form className="calculator" onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <label htmlFor="weight">Weight (kg)</label>
        <input type="number" id="weight" min="0" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div>
        <label htmlFor="height">Height (cm)</label>
        <input type="number" id="height" min="0" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <div>
        <label>Gender:</label>
        <div>
          <label>
            <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            Female
          </label>
        </div>
      </div>

      <div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
