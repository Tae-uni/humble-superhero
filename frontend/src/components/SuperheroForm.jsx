import { useState } from "react";
import PropTypes from "prop-types";

import "../layouts/SuperheroForm.css";

const API_URL = "http://localhost:3000/api/superheroes";

export const SuperheroForm = ({ onHeroAdded }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const newHero = {
      name,
      superpower,
      humilityScore: Number(humilityScore),
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHero),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        if (Array.isArray(data.details)) {
          const fieldErrors = {};
          data.details.forEach(err => {
            fieldErrors[err.field] = err.issue;
          });
          setErrors(fieldErrors);
          return;
        }
        throw new Error(data.message || `Error: ${res.status}`);
      }

      onHeroAdded();

      setName('');
      setSuperpower('');
      setHumilityScore('');
    } catch (err) {
      setErrors({ general: err.message });
    };
  };

  return (
    <div className="form-container">
      <h2>Register a Superhero</h2>

      {errors.general && <p className="error-text">{errors.general}</p>}

      <form onSubmit={handleSubmit} className="hero-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter the Hero name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Superpower</label>
          <input
            type="text"
            placeholder="Enter the hero of Superpower"
            value={superpower}
            onChange={(e) => setSuperpower(e.target.value)}
            required
          />
          {errors.superpower && <p className="error-text">{errors.superpower}</p>}
        </div>

        <div className="form-group">
          <label>Humility Score (1-10)</label>
          <input
            type="number"
            placeholder="Enter the Humility Score (1-10)"
            value={humilityScore}
            onChange={(e) => setHumilityScore(e.target.value)}
            required
            min="1"
            max="10"
          />
          {errors.humilityScore && <p className="error-text">{errors.humilityScore}</p>}
        </div>

        <button type="submit" className="submit-btn">Add Superhero</button>
      </form>
    </div>
  );
};

SuperheroForm.propTypes = {
  onHeroAdded: PropTypes.func.isRequired,
};
