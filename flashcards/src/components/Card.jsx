import React, { useState } from 'react';

function Card({ leagueChampions }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  const currentChampion = leagueChampions[currentCardIndex];

  const handleNext = () => {
    setCurrentCardIndex((currentCardIndex + 1) % leagueChampions.length);
    setShowHint(true);
  };

  const handleFlip = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="card-container">
      <div className={`card ${showHint ? '' : 'flipped'}`}>
        <div className="card-content">
          {showHint ? (
            <div>
              <p>Hint: {currentChampion.hint}</p>
              <p>Difficulty: {currentChampion.difficulty}</p>
            </div>
          ) : (
            <div>
              <h3>Champion: {currentChampion.champion}</h3>
              {/* <img src={currentChampion} alt={currentChampion.champion} /> */}
            </div>
          )}
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={handleFlip}>Flip Card</button>
        <button onClick={handleNext}>Next Card</button>
      </div>
    </div>
  );
}

export default Card;
