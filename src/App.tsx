import React from 'react';
import nyt from './nyt.png';

function App() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen font-inter text-gray-800 overflow-y-scroll my-12 lg:my-48">
      <div className='flex justify-center flex-col items-center h-fit w-[600px] p-6 lg:p-0'>
        <h1 className='w-full font-merienda font-bold text-7xl lg:text-8xl'>
          Inshallah
        </h1>
        <div id='tags' className='w-full mt-8 flex gap-3'>
          <span className="text-xl bg-gray-500 py-0.5 px-2 rounded font-bold text-white">
            Arabic Expression
          </span>
        </div>
        <span className='w-full text-3xl ml-[-5px] font-medium pt-4 text-gray-500'>
          [ in · shāʾ · Allāh ]
        </span>
        <p className="w-full border-l-4 pl-2 border-gray-400 text-2xl font-medium mt-6 text-gray-700">
          Literally, "if God wills it" or "God willing".
        </p>
        <p className="w-full mt-8 text-xl">
          A heartfelt expression that intertwines hope with the acceptance of divine will. It's used warmly to convey optimism for the future, acknowledging that everything happens according to a greater plan. Whether making plans, facing uncertainties, or expressing hopes and wishes, "Inshallah" is a gentle reminder of our reliance on and trust in the divine. It's a phrase that brings comfort and fosters a sense of peace, reminding us that we are not alone in our journey through life.
        </p>
        <div className="w-full pt-12">
          <h2 className="text-2xl font-semibold">
            Examples & Use Cases
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="border-l-4 pl-2 border-gray-500 text-lg mt-4">
              <span className="font-semibold text-xl">
                Hope for Future Events
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  "Inshallah we go to Disney Land next year!"
                </span>
              </div>
            </li>
            <li className="border-l-4 pl-2 border-gray-500 text-lg mt-4">
              <span className="font-semibold text-xl">
                Gentle Decline
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  "Mom, can we go to Disney Land?"
                </span>
                <span>
                  "Inshallah, habibi"
                </span>
              </div>
            </li>
            <li className="border-l-4 pl-2 border-gray-500 text-lg mt-4">
              <span className="font-semibold text-xl">
                Responding to Uncertainty
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  "Honey, are you sure we can afford a trip to Disney Land?"
                </span>
                <span>
                  "I think so. Things will work out, Inshallah."
                </span>
              </div>
            </li>
            <li className="border-l-4 pl-2 border-gray-500 text-lg mt-4">
              <span className="font-semibold text-xl">
                Success in Endeavors
              </span>
              <div className="flex flex-col gap-2">
                <span className="mt-2">
                  "Inshallah I pass my exams so we can go to Disney Land."
                </span>
              </div>
            </li>
          </ul>
        </div>
        <a target='_blank' href="https://www.nytimes.com/2022/01/25/magazine/inshallah.html" className="w-full flex flex-col mt-12 text-xl p-4 rounded-lg bg-gray-50 hover:bg-gray-100" rel="noreferrer">
          <img src={nyt} alt='New York Times Logo' className="w-[275px] -mb-8 -mt-12" />
          <h3 className="font-merriweather font-bold text-[28px] leading-9">
            Are Better Things Coming? <span className="bg-yellow-200 px-2">Inshallah.</span>
          </h3>
          <p className="mt-3 text-xl">
            Whatever language you speak, “inshallah” can bring you hope. When I was growing up, my family used ...
          </p>
        </a>
      </div>
    </div>
  );
}

export default App;
