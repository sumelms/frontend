import { useKeycloak } from '@react-keycloak/web';
import { Rating } from 'flowbite-react';
import React from 'react';

import Container from '../../../../components/Container';

const Dashboard: React.FC = () => {
  const { keycloak } = useKeycloak();
  return (
    <Container spaced>
      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2">
          <div className="my-8 mt-0">
            <h1 className="mb-4 text-4xl font-bold">
              Hi, {keycloak.tokenParsed?.given_name}.
            </h1>
            <span className="text-lg text-gray-400">
              Let today be the start of something new.
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-8">
            <div className="flex w-full h-40 p-4 bg-white rounded-xl">
              <span className="m-auto">CHART 1</span>
            </div>
            <div className="flex w-full h-40 p-4 bg-white rounded-xl">
              <span className="m-auto">CHART 2</span>
            </div>
            <div className="flex w-full h-40 p-4 bg-white rounded-xl">
              <span className="m-auto">CHART 3</span>
            </div>
            <div className="flex w-full h-40 p-4 bg-white rounded-xl">
              <span className="m-auto">CHART 4</span>
            </div>
          </div>

          <div className="my-8">
            <div className="mb-4">
              <h3 className="mb-1 text-xl font-bold">My Courses</h3>
              <span className="text-gray-400 text-md">
                You can easily resume your last activities from here.
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex w-full h-40 p-4 bg-white rounded-l-lg">
                <span className="m-auto">COURSE CARD 1</span>
              </div>
              <div className="flex w-full h-40 p-4 bg-white rounded-l-lg">
                <span className="m-auto">COURSE CARD 2</span>
              </div>
            </div>
            <div className="p-4 text-center">
              <button className="px-2 py-1 bg-white border border-gray-800 border-solid">
                Show more
              </button>
            </div>
          </div>

          <div className="my-8">
            <div className="mb-4">
              <h3 className="mb-1 text-xl font-bold">Tasks Today</h3>
              <span className="text-gray-400 text-md">
                You can easily resume your last activities from here.
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[1, 2].map((i) => (
                <div key={i} className="flex w-full p-4 bg-white rounded-l-lg">
                  <span className="m-auto">TASK {i}</span>
                </div>
              ))}
            </div>
            <div className="p-4 text-center">
              <button className="px-2 py-1 bg-white border border-gray-800 border-solid">
                Show more
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <div className="flex w-full p-4 bg-white h-80">
              <span className="m-auto">CALENDAR</span>
            </div>
          </div>

          <div className="my-4">
            <div className="flex justify-between mb-8">
              <h2 className="font-bold">Recent Activities</h2>
              <a className="text-sm" href="#">
                <div className="flex items-center justify-center px-2 py-1 m-1 text-base font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-full">
                  <div className="flex-initial max-w-full text-xs font-normal leading-none">
                    See more
                  </div>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="relative flex flex-wrap justify-between p-2 space-x-0 overflow-hidden bg-white rounded sm:flex-no-wrap sm:space-x-2"
                >
                  <div className="absolute inset-0 border-l-4 border-red-400"></div>
                  <div className="flex flex-col flex-grow text-center sm:text-left">
                    <span className="m-auto">ACTIVITY {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-4">
            <div className="mb-8">
              <div className="flex justify-between">
                <h2 className="font-bold">Upcoming Events</h2>
                <a className="text-sm" href="#">
                  <div className="flex items-center justify-center px-2 py-1 m-1 text-base font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-full">
                    <div className="flex-initial max-w-full text-xs font-normal leading-none">
                      See more
                    </div>
                  </div>
                </a>
              </div>
              <span className="text-sm text-gray-400">Tomorrow, May 2</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative flex flex-wrap justify-between p-2 space-x-0 overflow-hidden bg-white rounded sm:flex-no-wrap sm:space-x-2"
                >
                  <div className="absolute inset-0 border-l-4 border-red-400"></div>
                  <div className="flex flex-col flex-grow text-center sm:text-left">
                    <span className="m-auto">EVENT {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
