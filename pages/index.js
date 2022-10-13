import { IoIosArrowForward } from "react-icons/io";
import { HomeImg } from "../components/RegisterImg";
import Link from "next/link";

function Home() {
  return (
    <body className="h-screen">
      <div className="absolute w-[30%] h-full  right-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 z-0">
        </div> 
      {/* <div className="bg-gradient-to-r w-full text-gray-800" /* from-violet-500 to-fuchsia-500 > */}
        <div className="absolute flex justify-center items-center ml-[250px] max-w-6xl h-full max-h-[calc(100vh_-_84px)] z-10">
          <div className="grid md:grid-cols-2  p-9 ">
            {/* Chart on the left side of the screen */}
            <div className="text-left text-grey-500 my-auto">
              <h1
                className="text-5xl font-bold leading-[30ppx]"
              >
                Let's help track everywhere <br />
                your dime goes
              </h1>
              <div className="mt-1 w-[80px] h-[6px] bg-indigo-500 ml-5 rounded-full"></div>
              <p className="py-3 my-4">
                {" "}
                When you know the impact of little expenses, you will <br />{" "}
                realize that there is nothing little in this world.
              </p>
              <div>
                <Link href="/login">
                  <button className="global-btn w-[30%] flex justify-around items-center px-4">
                    <span>Get Started</span>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <HomeImg />
            </div>

            {/* //Input Forms on the right side of the screen */}
          </div>
        </div>
      {/* </div> */}
    </body>
  );
}

export default Home;
