import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const PlayItem = ({ item }: any) => {
    return (
        <>
            <AudioPlayer
                autoPlay
                src={item.fileUrl}
            />
        </>
    );
}
export default PlayItem;