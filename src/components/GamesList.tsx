import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

import IVideoGame from '../interfaces/IVideoGame';
import ILimitYear from '../interfaces/ILimitYear';

// FRONT-END INTERFACE REQUIRED //
interface GamesListProps {
  id: number;
  idGameType: number;
  idLimitYear: number;
  title: string;
  backgroundImage: string;
  iconImage: string;
}

interface LimitYearProps {
  id: number;
  name: string;
  iconImage: string;
}

interface Props {
  setBackground: React.Dispatch<React.SetStateAction<string>>;
}

const GamesList = ({ setBackground }: Props) => {
  // I CREATE A USESTATE TO STORE THE DATA FROM THE AXIOS CALL //
  const [videoGames, setVideoGames] = useState<IVideoGame[]>();
  const [limitYears, setLimitYears] = useState<ILimitYear[]>();

  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  // CALL API AXIOS //
  const getContent = async () => {
    // CALL ITEM AXIOS.GET FROM THE URL INTERFACE //
    const videoGames = await axios.get<IVideoGame[]>(
      `http://localhost:8000/api/videogames`,
    );
    const limitYears = await axios.get<ILimitYear[]>(
      `http://localhost:8000/api/limityears`,
    );
    // I USE MY USESTATE AND ITS DATA WITH THE SET //
    setVideoGames(videoGames.data);
    setBackground(videoGames[0]);
    setLimitYears(limitYears.data);
  };

  // WHEN LOADING THE COMPONENT, I EXECUTE THE GETCONTENT FUNCTION //
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="list">
      <Swiper
        className="list__carousel"
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        slideToClickedSlide={true}>
        {videoGames &&
          videoGames.map((videoGame) => (
            <SwiperSlide className="list__carousel__slide" key={videoGame?.id}>
              {({ isActive }) => (
                <img
                  className={
                    isActive
                      ? 'list__carousel__slide--img list__carousel__slide--big'
                      : 'list__carousel__slide--img'
                  }
                  src={videoGame?.iconImage}
                  alt={videoGame?.title}
                  onClick={() => {
                    // swiper.slideNext();
                    setBackground(videoGame?.backgroundImage);
                  }}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default GamesList;
