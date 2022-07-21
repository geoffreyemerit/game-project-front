import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GamesList from '../components/GamesList';
import ILimitYear from '../interfaces/ILimitYear';
import IVideoGame from '../interfaces/IVideoGame';

const Games = () => {
  const [background, setBackground] = useState<string>('');

  console.log(background);

  return (
    <div className="games">
      <img className="games--background" src={background} alt="" />

      <GamesList setBackground={setBackground} />
    </div>
  );
};

export default Games;
