import React from 'react';
import './App.css';
import Card from './components/Card';

const leagueChampions = [
  { hint: 'This champion is a yordle known as a hero who can disappear at whim .', champion: 'Teemo', difficulty: 'Easy' },
  { hint: 'This champion wields two huge axes and is known for spinning wildly into battle, also has a loud brother.', champion: 'Darius', difficulty: 'Medium' },
  { hint: 'This champion is a highly skilled marksman, hard to play.', champion: 'Vayne', difficulty: 'Hard' },
  { hint: 'This champion is able to heal in a large circle, normally seen flying around.', champion: 'Janna', difficulty: 'Medium' }
];

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>League Champion Heads Up</h2>
        <h3>How much league have you played? Guess the champion based on the information given</h3>
        <h4>Number of Total Cards: {leagueChampions.length}</h4>
        {/* Pass the data as a prop named "leagueChampions" */}
        <Card leagueChampions={leagueChampions} />
      </div>
    </div>
  );
}

export default App;
