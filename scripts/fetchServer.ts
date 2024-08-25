import axios from "axios";

const SERVER_URL = "https://api.mcsrvstat.us/3/play.asram-wojak.my.id";

interface ServerData {
  isOnline: boolean;
  playerCount: number;
  maxPlayer: number;
  version: string;
  software: string;
}

async function fetchServerData(): Promise<ServerData> {
  const { data } = await axios.get(SERVER_URL);
  console.log(data)
  return {
    isOnline: data.online,
    playerCount: data.players?.online || 0,
    maxPlayer: data.players?.max || 0,
    version: data.version || "Unknown",
    software: data.software || "Unknown"
  };
}

export default fetchServerData;
