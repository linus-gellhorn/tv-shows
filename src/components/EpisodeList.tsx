import Episode from "./Episode";
import episodes from "../data/episodes.json";

export default function EpisodeList(): JSX.Element {
  return (
    <>
      {episodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </>
  );
}
