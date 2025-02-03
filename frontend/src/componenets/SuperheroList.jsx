import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/superheroes';

export const SuperheroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || `Error: ${res.status}`);
        }
        setHeroes(data.heroes || []);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container">
      <h1>Humble Superheroes</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {heroes.length > 0 ? (
        <ul>
          {heroes.map((hero, index) => (
            <li key={index}>
              <strong>{hero.name}</strong> - {hero.superpower}
            </li>
          ))}
        </ul>
      ) : !error && <p>An expected error occurred.</p>}
    </div>
  )
}