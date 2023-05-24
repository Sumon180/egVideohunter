import Nav from "../components/Nav";
import HomePageSearchBox from "../components/HomePageSearchBox";
import Footer from "./Footer";
import SupportedSiteList from "./SupportedSiteList";
import { images, searchResult, videos } from "../data";
import TopDownlodedVideo from "../components/TopDownlodedVideo";
import SearchResult from "../components/SearchResult";

const Home = () => {
  return (
    <>
      <Nav />
      <HomePageSearchBox />
      <TopDownlodedVideo videos={videos} />
      <SearchResult searchResults={searchResult} />
      <SupportedSiteList images={images} />
      <Footer />
    </>
  );
};

export default Home;
