import EpisodeView from "./EpisodeView";
import episodes from "../data/episodes.json";
import { useState } from "react";

export default function EpisodeList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes = episodes.filter(
    (episode) =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search for episode(s)"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <p>
        Showing results for: {filteredEpisodes.length} / {episodes.length}{" "}
        episodes.
      </p>
      {filteredEpisodes.map((episode) => (
        <EpisodeView key={episode.id} episode={episode} />
      ))}
    </>
  );
}
