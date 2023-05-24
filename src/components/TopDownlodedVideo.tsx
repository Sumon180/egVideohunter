import { Button } from "@material-tailwind/react";

const TopDownlodedVideo = ({ videos }: any) => {
  return (
    <>
      <section className="flex items-center justify-center flex-col sm:w-full md:w-2/3 mx-auto mt-20">
        <h3 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Top Downloaded Videos
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-4 mb-5">
          {videos.map((video: any) => {
            <video key={video.id} width="350" height="100" controls>
              <source src={video.url} type="video/mp4" />
            </video>;
          })}
          ;
        </div>
        <Button className="text-2lg">More...</Button>
      </section>
    </>
  );
};

export default TopDownlodedVideo;
