import MakerShoutouts from "./Components/makerShoutout";
// import Navbar from "./Components/header";
import Navbar1 from "./Components/header_test";
import CommentSection from "./Components/Comment";
import TrendingLaunches from "./Components/trending_lauches";
import LaunchInfo from "./Components/aboutthisLaunch";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="">
      {/* <Navbar/> */}
      {/* <Navbar1/> */}
      <Intro/>
      <MakerShoutouts/>
      <CommentSection/>
      <LaunchInfo/>
      <TrendingLaunches/>
      
    </div>
  );
}

export default App;
