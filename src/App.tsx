import episodes from "./episodes.json";
import Episode from "./Episode";

function App(): JSX.Element {
  return (
    <>
      <h1>TV Shows App</h1>
      {episodes.map((episode) => (
        <Episode
          key={episode.id}
          id={episode.id}
          name={episode.name}
          season={episode.season}
          number={episode.number}
          image={episode.image}
          summary={episode.summary}
          type={episode.type}
          airdate={episode.airdate}
          airtime={episode.airtime}
          airstamp={episode.airstamp}
          runtime={episode.runtime}
          url={episode.url}
          _links={episode._links}
        />
      ))}
    </>
  );
}

export default App;
