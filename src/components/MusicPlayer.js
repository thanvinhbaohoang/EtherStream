import { HiOutlineHeart,HiHeart } from 'react-icons/hi';
import { FaStepBackward,FaPlay,FaStepForward, FaVolumeUp} from 'react-icons/fa';



export const MusicPlayer = () => {
    return(
        <div className="music-player">
            <div class='music-controls'>
                <div class='music-controls-items'>
                    <div class='song-pic'>Song Pic</div>

                    <div class='song-info'>
                        <div class='song-info-name'>Song Name</div>
                        <div class='song-info-artist'>Artists</div>
                    </div>
                    <div class='song-like-button'>
                        <HiOutlineHeart/>
                    </div>
                </div>

               <div class='music-player-mid'>
                <div class='music-player-items'>
                        <div class='music-player-item'><FaStepBackward/></div>
                        <div class='music-player-item play-button'><FaPlay/></div>
                        <div class='music-player-item'><FaStepForward/></div>
                    </div>
                    
                    <div class='music-player-bar'></div>
               </div>


                <div class='music-volume-container'>
                    <div class='music-volume-logo'><FaVolumeUp/></div>
                    <div class='music-volume-bar'></div>
                </div>
            </div>
        </div>
    )
}
