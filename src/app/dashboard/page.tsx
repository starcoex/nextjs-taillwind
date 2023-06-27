import { NextPage } from "next";

interface Props {}
interface IPerson {
  name: string;
  email: string;
  imageUrl: string;
}
const person: IPerson[] = [
  {
    name: "ko",
    email: "starcoex.naver.com",
    imageUrl: "1.png",
  },
  {
    name: "ko",
    email: "starcoex.naver.com",
    imageUrl: "2.png",
  },
  {
    name: "ko",
    email: "starcoex.naver.com",
    imageUrl: "3.png",
  },
];

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
      <div>
        <button className="bg-sky-500 rounded-2xl px-4 py-1 hover:bg-sky-700">
          Save Change
        </button>
        <button className="bg-violet-500 rounded-full hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Hover,focus and active
        </button>
      </div>
      <ul className="p-6 divide-slate-200 divide-y" role="list">
        {/* {person.map((value) => {
          <li>{value.imageUrl}</li>;
        })} */}
        <li className="flex py-4 first:pt-0 last:pb-0">
          <img src="1.png" alt="" className="h-10 w-10 rounded-full" />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">ko</p>
            <p className="text-sm text-slate-500 truncate">
              starcoex@naver.com
            </p>
          </div>
        </li>
        <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
          <img src="1.png" alt="" />
          <div>
            <a href="">
              <p>ko</p>
            </a>
            <p>Title</p>
            <a
              href="tel:01066921359"
              className="group/edit invisible hover:bg-slate-200 group-hover/item:visible"
            >
              <span className="group-hover/edit:text-gray-700">Call</span>
            </a>
          </div>
        </li>
        <li>
          <img src="1.png" alt="" />
          <div>
            <p>ko</p>
            <p>starcoex@naver.com</p>
          </div>
        </li>
      </ul>
      <form action="">
        <label htmlFor="" className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            value="Ko"
            disabled
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
"
          />
        </label>
      </form>
      <a
        href="#"
        className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3
        hover:bg-sky-500 hover:ring-sky-950"
      >
        {/* <svg
          className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          hi
        </svg> */}
        <h3>New Project</h3>
        <p className="group-hover:text-slate-500">
          Create a new Projext form a variety of starting templates.
        </p>
      </a>
      <template>
        <button className="bg-blue-500 p-6">
          <slot />
        </button>
      </template>
    </>
  );
};

export default Home;
