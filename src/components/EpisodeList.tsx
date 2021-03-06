import EpisodeView from "./EpisodeView";
import { useState, useEffect } from "react";
import { IEpisode } from "./EpisodeView";

export default function EpisodeList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    async function fetchAsSaveEpisodes() {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const episodesFromBody: IEpisode[] = await response.json();
      setEpisodes(episodesFromBody);
    }

    fetchAsSaveEpisodes();
  }, []);

  console.log(episodes);

  const filteredEpisodes =
    selected !== ""
      ? episodes.filter((episode) => episode.name === selected)
      : episodes.filter(
          (episode) =>
            episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleReset = () => {
    return setSelected("");
  };

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
      <button onClick={handleReset}>Reset</button>
      {filteredEpisodes.map((episode) => (
        <EpisodeView key={episode.id} episode={episode} />
      ))}
    </>
  );
}
