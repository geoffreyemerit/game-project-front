import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IVideoGame from '../interfaces/IVideoGame';

// FRONT-END INTERFACE REQUIRED //
interface VideoGameListProps {
  id: number;
  idGameType: number;
  idLimitYear: number;
  title: string;
  backgroundImage: string;
  iconImage: string;
}

const VideoGameList = () => {
  // I CREATE A USESTATE TO STORE THE DATA FROM THE AXIOS CALL //
  const [videoGames, setVideoGames] = useState<IVideoGame[]>();

  // CALL API AXIOS //
  const getContent = async () => {
    // CALL ITEM AXIOS.GET FROM THE URL INTERFACE //
    const videoGames = await axios.get<IVideoGame[]>(
      `http://localhost:8000/api/videogames`,
    );

    // I USE MY USESTATE AND ITS DATA WITH THE SET //
    setVideoGames(videoGames.data);
  };

  // WHEN LOADING THE COMPONENT, I EXECUTE THE GETCONTENT FUNCTION //
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="list">
      {videoGames &&
        videoGames.map((videoGame) => (
          <div>
            id={videoGame.id} name={videoGame.title} key={videoGame.id}
            <img src={videoGame.iconImage} alt="" />
            <img src={videoGame.backgroundImage} alt="" />
          </div>
        ))}
    </div>
  );
};

export default VideoGameList;
