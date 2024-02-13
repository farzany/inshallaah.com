import React from 'react';
import bmc from './images/bmc.png';
import heart from './images/heart.png';
import nyt from './images/nyt.png';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-y-scroll py-12 font-inter text-gray-800 lg:py-48">
      <div className="flex h-fit w-[600px] flex-col items-center justify-center p-6 lg:p-0">
        <h1 className="ml-[-13.5px] w-full font-merienda text-7xl font-bold lg:text-8xl">
          Inshallah
        </h1>
        <div id="tags" className="mt-8 flex w-full gap-3">
          <span className="rounded bg-gray-500 px-2 py-0.5 text-xl font-bold text-white">
            Arabic Expression
          </span>
        </div>
        <span className="ml-[-5px] w-full pt-4 text-3xl font-medium text-gray-500">
          [ in · shāʾ · Allāh ]
        </span>
        <p className="mt-6 w-full border-l-4 border-gray-400 pl-2 text-2xl font-medium text-gray-700">
          {`Literally, "if God wills it" or "God willing".`}
        </p>
        <p className="mt-8 w-full text-xl">
          {`A heartfelt expression that intertwines hope with the acceptance of divine will. It's used warmly to convey optimism for the future, acknowledging that everything happens according to a greater plan. Whether making plans, facing uncertainties, or expressing hopes and wishes, "Inshallah" is a gentle reminder of our reliance on and trust in the divine. It's a phrase that brings comfort and fosters a sense of peace, reminding us that we are not alone in our journey through life.`}
        </p>
        <div className="w-full pt-12">
          <h2 className="text-2xl font-semibold">
            Examples & Use Cases
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="mt-4 border-l-4 border-gray-500 pl-2 text-lg">
              <span className="text-xl font-semibold">
                Hope for Future Events
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  {`"Inshallah we go on vacation this summer!"`}
                </span>
              </div>
            </li>
            <li className="mt-4 border-l-4 border-gray-500 pl-2 text-lg">
              <span className="text-xl font-semibold">
                Gentle Decline
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  {`"Mom, can we go on vacation this summer?"`}
                </span>
                <span>
                  {`"Inshallah, habibi."`}
                </span>
              </div>
            </li>
            <li className="mt-4 border-l-4 border-gray-500 pl-2 text-lg">
              <span className="text-xl font-semibold">
                Responding to Uncertainty
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  {`"Honey, are you sure we can afford a vacation?"`}
                </span>
                <span>
                  {`"I think so. Things will work out, Inshallah."`}
                </span>
              </div>
            </li>
            <li className="mt-4 border-l-4 border-gray-500 pl-2 text-lg">
              <span className="text-xl font-semibold">
                Success in Endeavors
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  {`"Inshallah I pass my exams so we can go on vacation."`}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <a
          className="mt-12 flex w-full flex-col overflow-hidden rounded-lg bg-gray-50 p-4 text-xl hover:cursor-pointer hover:bg-gray-100"
          href="https://www.nytimes.com/2022/01/25/magazine/inshallah.html"
          rel="noreferrer"
          target="_blank"
        >
          <img src={nyt} alt="New York Times Logo" className="-mb-8 -mt-12 w-[275px]" />
          <h3 className="font-merriweather text-[28px] font-bold leading-9">
            Are Better Things Coming? <span className="bg-yellow-200 px-2">Inshallah.</span>
          </h3>
          <p className="mt-3 text-xl">
            Whatever language you speak, “inshallah” can bring you hope. When I was growing up, my family used ...
          </p>
        </a>
        <div className="mb-20 mt-12 flex w-full flex-col items-center lg:mb-0 lg:mt-20">
          <h4 className="mb-6 text-center text-3xl font-semibold">
            {"Inshallah you'll buy me a coffee 🤲"}
          </h4>
          <a
            className="flex w-fit items-center justify-center gap-2 rounded-lg bg-yellow-200 px-5 py-3"
            href="https://www.buymeacoffee.com/farzany"
            rel="noreferrer"
            target="_blank"
          >
            <img src={bmc} className="h-[26px]" alt="Buy Me a Coffee logo"/>
            <span className="text-2xl font-semibold">
              Buy me a coffee {'<3'}
            </span>
          </a>
        </div>
        <footer className="absolute bottom-0 pb-8 text-lg font-medium">
          <span className="flex items-center justify-center">
            Made with
            <img src={heart} className="h-5 px-[6px]" alt="Love"/>
            by
            <a className="pl-[6px] underline decoration-2" href="https://www.youtube.com/@farzany" target="_blank" rel="noreferrer">Farzan Yazdanjou</a>
          </span>
        </footer>
      </div>
    </div>
  );
}
