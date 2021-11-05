import "./App.css";
import EpisodeList from "./components/EpisodeList";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

function App(): JSX.Element {
  return (
    <>
      <MainHeader />
      <EpisodeList />
      <MainFooter />
    </>
  );
}

export default App;
