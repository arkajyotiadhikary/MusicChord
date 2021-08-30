import axios from "axios";
import { yt_token } from "./config.json";
const endpoint = "http://localhost:8000";

const yt_search = `https://www.googleapis.com/youtube/v3/search?key=${yt_token}&type=video&part=snippet&maxResults=10&q=`;

const search_song = async (songName) => {
    const url = yt_search + songName;
    try {
        const yt_details = await axios.get(url);
        const songId = yt_details.data.items[0].id.videoId;

        await axios.get(`${endpoint}/music/${songId}`);
        return songId;
    } catch (error) {}
};

export { search_song };
