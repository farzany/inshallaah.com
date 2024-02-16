import React from 'react';
import VideoModal from './VideoModal';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-y-scroll pb-48 pt-16 font-inter text-gray-800 selection:bg-yellow-200 lg:pt-48">
      <div className="flex h-fit w-[600px] flex-col items-center justify-center p-6 lg:p-0">
        <h1 className="ml-[-9.6px] w-full font-merienda text-6xl font-bold sm:ml-[-11px] sm:text-7xl lg:ml-[-13.5px] lg:text-8xl">
          Inshallah
        </h1>
        <div id="tags" className="mt-8 flex w-full gap-3">
          <span className="select-none rounded bg-gray-500 px-2 text-lg font-bold text-white sm:py-0.5 sm:text-xl">
            Arabic Expression
          </span>
        </div>
        <div className="m-auto ml-[-2.8px] flex w-fit items-center justify-center pt-4 sm:ml-[-3.4px]">
          <span className="text-2xl font-medium text-gray-500 sm:text-3xl">
            [ in · shāʾ · Allāh ]
          </span>
          <VideoModal />
        </div>
        <p className="mt-6 w-full border-l-4 border-gray-500 pl-2 text-2xl font-medium text-gray-700">
          {`Literally, "if God wills it" or "God willing".`}
        </p>
        <p className="mt-8 w-full text-xl">
          {`A heartfelt expression that intertwines hope with the acceptance of divine will. It's used warmly to convey optimism for the future, acknowledging that everything happens according to a greater plan. Whether making plans, facing uncertainties, or expressing hopes and wishes, "Inshallah" is a gentle reminder of our reliance on and trust in the divine. It's a phrase that brings comfort and fosters a sense of peace, reminding us that we are not alone in our journey through life.`}
        </p>
        <div className="mb-10 mt-12 flex w-full flex-col items-center">
          <h4 className="mb-6 text-[26px] font-semibold sm:text-3xl">
            <span className="bg-yellow-200 px-2">Inshallah</span>{' you achieve all of your goals and wildest dreams 🤲'}
          </h4>
          <h5 className="mb-6 text-[26px] font-semibold sm:text-3xl">
            <span className="bg-yellow-200 px-2">Inshallah</span>{' you and your loved ones live 100 joyful years with good health 🤲'}
          </h5>
        </div>
        <div className="w-full">
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
          <img src="images/nyt.png" alt="New York Times Logo" className="-mb-8 -mt-12 w-[275px]" />
          <h3 className="font-merriweather text-[26px] font-bold leading-9 sm:text-[28px]">
            Are Better Things Coming? <span className="bg-yellow-200 px-2">Inshallah.</span>
          </h3>
          <p className="mt-3 text-lg sm:text-xl">
            Whatever language you speak, “inshallah” can bring you hope. When I was growing up, my family used ...
          </p>
        </a>
        <footer className="absolute bottom-0 z-0 flex flex-col items-center pb-8 text-lg font-medium">
          <a
            className="mb-8 flex w-fit items-center justify-center gap-2 rounded-lg bg-yellow-200 px-5 py-3"
            href="https://www.buymeacoffee.com/farzany"
            rel="noreferrer"
            target="_blank"
          >
            <img src="images/bmc.png" className="h-[24px]" alt="Buy Me a Coffee logo"/>
            <span className="text-xl font-semibold">
              Buy me a coffee {'<3'}
            </span>
          </a>
          <span className="flex items-center justify-center">
            Made with
            <img src="images/heart.png" className="h-5 px-[6px]" alt="Love"/>
            by
            <a className="pl-[6px] underline decoration-2" href="https://www.youtube.com/@farzany" target="_blank" rel="noreferrer">Farzan Yazdanjou</a>
          </span>
        </footer>
      </div>
    </div>
  );
}
