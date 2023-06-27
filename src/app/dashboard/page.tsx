import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <div className="max-w-sm mx-auto p-6 bg-yellow-600 rounded-xl shadow-xl flex items-center space-x-4">
        <div className="shrink-0">
          <img src="vercel.svg" alt="next" className="bg-red-400 h-12 w-12" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new messeage!</p>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-blue-400 rounded-xl shadow-lg space-y-2 sm:py-4 flex items-center sm:space-y-0 sm:space-x-6">
        <img
          src="next.svg"
          alt="next"
          className="block mx-auto h-24 rounded-full"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin LindFord</p>
            <p className="text-salet-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <template>
        <button></button>
      </template>
    </>
  );
};

export default Home;
