import EpisodeList from "./components/EpisodeList";
import MainFooter from "./components/MainFooter";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <h1>Game Of Thrones Episodes</h1>
      <EpisodeList />
      <MainFooter />
    </>
  );
}

export default App;
