import { Switch, Button, Tooltip } from "@material-tailwind/react";

function HomePageSearchBox() {
  return (
    <>
      <section className="text-gray-600 body-font my-auto mt-10">
        <div className="px-5 py-24 mx-auto sm:w-full md:w-1/2 ">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            ></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your video URL..."
                required
              />
              <Button className="absolute home-search-btn rounded">
                Fetch the video
              </Button>
            </div>
            <Tooltip
              content={"If you want only audio instead of video, turn it on."}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div className="py-1 flex items-center justify-center w-fit mx-auto">
                <Switch
                  id="auto-update"
                  label="I want to download only audio."
                />
              </div>
            </Tooltip>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePageSearchBox;
