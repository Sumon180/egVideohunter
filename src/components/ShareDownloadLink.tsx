import {Button} from "@material-tailwind/react";
import { FiFacebook } from "react-icons/fi";


function ShareDownloadLink(props: {link: string}) {
    const downloadLink = props.link
    return (
        <>
            <div className="flex items-center justify-center sm:w-full md:w-2/3 mx-auto mt-20">
                <div>
                    <div className="flex items-center justify-center mt-10">
                        <div>
                            <h3 className="text-center text-3xl flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                                <span className="pl-1">
                                    Share download link
                                </span>
                            </h3>
                            <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
                                <Button>
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                                         stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                         className="css-i6dzq1">
                                        <path
                                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Button>
                                <Button>
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                                         stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                         className="css-i6dzq1">
                                        <path
                                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShareDownloadLink;
