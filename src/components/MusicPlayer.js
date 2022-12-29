import { HiOutlineHeart,HiHeart } from 'react-icons/hi';
import { FaStepBackward,FaPlay,FaStepForward, FaVolumeUp} from 'react-icons/fa';



export const MusicPlayer = () => {
    return(
        <div className="music-player">
            <div class='music-controls'>
                <div class='music-player-left'>
                        <HiOutlineHeart class='song-like-button music-player-item'/>
                        <HiOutlineHeart class='song-like-button music-player-item'/>
                        <HiOutlineHeart class='song-like-button music-player-item'/>
                </div>

               <div class='music-player-mid'>
                <div class='music-player-items'>
                        <div class='music-player-item'><FaStepBackward/></div>
                        <div class='music-player-item play-button'><FaPlay/></div>
                        <div class='music-player-item'><FaStepForward/></div>
                    </div>
                    
               </div>


                <div class='music-player-right'>
                    <div class='music-volume-logo'><FaVolumeUp/></div>
                    <div class='music-volume-bar'></div>
                </div>
            </div>


            <div class='music-player-bar'></div>

        </div>
    )
}
