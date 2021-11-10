import EpisodeView from "./EpisodeView";
import episodes from "../data/episodes.json";
import { useState } from "react";

export default function EpisodeList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("");

  const filteredEpisodes =
    selected !== ""
      ? episodes.filter((episode) => episode.name === selected)
      : episodes.filter(
          (episode) =>
            episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <>
      <label htmlFor="episodes">Choose a specifc episode: </label>
      <select name="episode" onChange={(e) => setSelected(e.target.value)}>
        <option key={0} value="">
          Choose
        </option>
        {episodes.map((episode) => (
          <option key={episode.id} value={episode.name}>
            S0{episode.season}E
            {episode.number > 9 ? episode.number : "0" + episode.number} -{" "}
            {episode.name}
          </option>
        ))}
      </select>
      <p>Or search:</p>
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
