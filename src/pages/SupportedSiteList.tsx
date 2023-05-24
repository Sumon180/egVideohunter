import { Tooltip } from "@material-tailwind/react";

function SupportedSiteList({ images }: any) {
  return (
    <>
      <div className="sm:w-full md:w-2/3 mx-auto mt-20">
        <div className="text-center mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Supported websites
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            You can download the videos from these website only, <br />
            We're working hard to increase our border...:)
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {images.map((img: any, i: any) => {
            return (
              <Tooltip
                key={i}
                content={
                  "You can download videos (and audios) from " + img.name
                }
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <div className="border m-2 p-2 min-w-[131.44px] rounded-md hover:scale-110 hover:bg-blue-gray-100 hover:text-black transition-all duration-300">
                  <div className="bg-light rounded py-4 text-center">
                    <img
                      className="d-block mx-auto"
                      height="36"
                      width="36"
                      src={img.img}
                      alt="9GAG video downloader"
                      title="9GAG"
                    />
                    {img.name}
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SupportedSiteList;
