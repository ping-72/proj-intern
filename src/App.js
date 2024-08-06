import MakerShoutouts from "./Components/makerShoutout";
import CommentSection from "./Components/Comment";
import TrendingLaunches from "./Components/trending_lauches";
import LaunchInfo from "./Components/aboutthisLaunch";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="">
      <Intro/>
      <MakerShoutouts/>
      <CommentSection/>
      <LaunchInfo/>
      <TrendingLaunches/>
      
    </div>
  );
}

export default App;
