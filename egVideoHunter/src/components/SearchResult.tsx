import { FiVideo } from "react-icons/fi";
import ShareDownloadLink from "./ShareDownloadLink";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const SearchResult = ({ searchResults }: any) => {
  const { title, details } = searchResults;

  //   console.log(details);

  return (
    <>
      <div className="flex items-center justify-center sm:w-full md:w-2/3 mx-auto mt-20">
        <div>
          <h2 className="text-center text-5xl">{title}</h2>;
          <div className="flex justify-center flex-wrap gap-2">
            <div>
              <video width="350" height="150" controls>
                <source src={""} type="video/mp4" />
              </video>
            </div>
            <div className="pt-3">
              <ul className="flex items-center justify-center flex-wrap gap-2">
                {details.map((detail: any) => (
                  <li
                    key={detail.id}
                    className=" w-[150px] h-[100px] bg-[#D93B55] text-white text-center p-4 cursor-pointer"
                  >
                    <p>{detail.pixel}</p>
                    <p>{detail.size}</p>
                    <p className="flex items-center justify-center gap-1">
                      <FiVideo />
                      {detail.type}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ShareDownloadLink link={"link"} />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
