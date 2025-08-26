import type { VideoGame } from '../models/VideoGame';
import GameItem from './GameItem';

interface Props {
  games: VideoGame[];
}

const VideoGameGrid = ({ games }: Props) => {

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className='title'>Featured Games</h1>
        <div className='grid-container'>
          {games.map((game) => (
           <GameItem key={game.id} {...game} />
          ))}

        </div>
      </div>
    </div>
  )
};


export default VideoGameGrid;
