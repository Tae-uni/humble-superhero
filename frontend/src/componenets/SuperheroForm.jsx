import { useState } from "react";
import PropTypes from "prop-types";

const API_URL = "http://localhost:3000/api/superheroes";

export const SuperheroForm = ({ onHeroAdded }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);

    const newHero = {
      name,
      superpower,
      humilityScore: Number(humilityScore),
    }

    console.log("Sending..", newHero);

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
          throw new Error(data.details.map(err => `${err.field}: ${err.issue}`).join(", "));
        }
        throw new Error(data.message || `Error: ${res.status}`);
      }

      onHeroAdded();

      setName('');
      setSuperpower('');
      setHumilityScore('');
    } catch (err) {
      setError([err.message]);
    };
  };

  return (
    <div className="containerList">
      <h2>Add a Superhero</h2>

      {error.length > 0 && (
        <div style={{ color: "red" }}>
          {error.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Superpower" value={superpower} onChange={(e) => setSuperpower(e.target.value)} required />
        <input type="number" placeholder="Humility Score (1-10)" value={humilityScore} onChange={(e) => setHumilityScore(e.target.value)} required />
        <button type="submit">Add Superhero</button>
      </form>
    </div>
  )
}

SuperheroForm.propTypes = {
  onHeroAdded: PropTypes.func.isRequired,
}