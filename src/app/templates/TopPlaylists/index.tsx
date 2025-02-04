
import { chunkArray } from '@app/helpers';
import image1 from '@app/assets/images/image1.png';
import image2 from '@app/assets/images/image2.jpg';
import AppCarousel from '@app/components/Carousel';
import SubItem from './SubItem';

const TopPlaylists = () => {
    const items = [
        {
            position: 1,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 2,
            image: image2,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 3,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 4,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 5,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 6,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 7,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 8,
            image: image2,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 9,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 10,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 11,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 12,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 13,
            image: image2,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 14,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 15,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 16,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 17,
            image: image2,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 18,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        },
        {
            position: 19,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://musicgpt.s3.us-east-1.amazonaws.com/user_audio/b6b7cb17-7f8b-4600-8d8f-f9f707afdd51_BestFriend.mp3"
        },
        {
            position: 20,
            image: image1,
            title: "Nevada",
            userName: "@username",
            totalPlays: 13000000,
            fileUrl: "https://lalals.s3.amazonaws.com/music/Gentle Touch.wav"
        }
    ];
    const dataItems = chunkArray(items, 4);
    return (
        <div className='pt-5'>
            <div className="title-section mb-3">
                <h2 className="text-white text-[20px]">Global Top 15</h2>
                <p className="text-[#777A80]">Songs created using MusicGPT</p>
            </div>
            <AppCarousel itemsPerPage={4} loop={false}>
                {dataItems?.length > 0 && dataItems.map((subitems, index: number) => (<SubItem key={index} items={subitems} />))}
            </AppCarousel>
        </div>
    );
}
export default TopPlaylists;