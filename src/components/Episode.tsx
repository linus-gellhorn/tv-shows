export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface EpisodeProps {
  episode: IEpisode;
}

export default function Episode(props: EpisodeProps): JSX.Element {
  const episode = props.episode;

  return (
    <>
      <h2>
        {/* taking advantage of type coercion! */}
        {episode.name} - S0{episode.season}E
        {episode.number > 9 ? episode.number : "0" + episode.number}
      </h2>
      <img src={episode.image.medium} alt="" />
      <p>
        {episode.summary
          .replace("<p>", "")
          .replace("</p>", "")
          .replace("<br><br>", "")}
      </p>
    </>
  );
}
