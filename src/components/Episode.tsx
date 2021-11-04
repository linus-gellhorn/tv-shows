interface EpisodeProps {
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

export default function Episode(props: EpisodeProps): JSX.Element {
  return (
    <>
      <h2>
        {props.name} - Season: {props.season} Episode: {props.number}
      </h2>
      <img src={props.image.medium} alt="" />
      <p>
        {props.summary
          .replace("<p>", "")
          .replace("</p>", "")
          .replace("<br><br>", "")}
      </p>
    </>
  );
}
