import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context';
import { GoPrimitiveDot } from 'react-icons/go';

import profile from '../data/profile.jpg';

const Notifications = () => {
  const { handleClose } = useStateContext();

  return (
    <div className="absolute top-14 right-28 border-color border-1 block w-96 bg-white z-50 hover:overflow-scroll h-screen">
      <div className="flex justify-between items-center p-2 border-b-1">
        <p className="font-bold">Notifications</p>
        <p
          className="p-2 hover:hover:bg-light-gray rounded-full cursor-pointer "
          onClick={() => handleClose('notiications')}
        >
          <MdOutlineCancel />
        </p>
      </div>
      <div className="flex-col items-center border-b-1 mb-2">
        <div className="flex justify-between">
          <p className="p-1 pr-2 font-semibold">New</p>
          <p className="p-1 pr-2 text-sm text-blue-400 cursor-pointer">
            See all
          </p>
        </div>
        <div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200 ">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <span className="text-sm">
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit.
                Omnis, pariatur?
              </span>
              <p className="text-blue-500 text-sm">Just Now</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <div className="flex justify-between">
                <span className="text-sm">
                  Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing
                  elit. Omnis, pariatur? hllo th...
                </span>
                <span className="self-end mr-3 text-blue-500">
                  <GoPrimitiveDot />
                </span>
              </div>
              <p className="text-blue-500 text-sm">53min ago</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <span className="text-sm">
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit.
                Omnis, pariatur?
              </span>
              <p className="text-blue-500 text-sm">about one hour</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col items-center border-b-1 mb-2">
        <div className="flex justify-between">
          <p className="p-1 pr-2 font-semibold">Older ones</p>
          <p className="p-1 pr-2 text-sm text-blue-400 cursor-pointer">
            See all
          </p>
        </div>
        <div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200 ">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <span className="text-sm">
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit.
                Omnis, pariatur?
              </span>
              <p className="text-blue-500 text-sm">Just Now</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200 ">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <span className="text-sm">
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit.
                Omnis, pariatur?
              </span>
              <p className="text-blue-500 text-sm">Just Now</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <div className="flex justify-between">
                <span className="text-sm">
                  Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing
                  elit. Omnis, pariatur? hllo th...
                </span>
                <span className="self-end mr-3 text-blue-500">
                  <GoPrimitiveDot />
                </span>
              </div>
              <p className="text-blue-500 text-sm">53min ago</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center hover:hover:bg-gray-200">
            <span>
              <img
                className="h-16 w-16 rounded-full"
                src={profile}
                alt="profile"
              />
            </span>
            <div className=" flex-col justify-center items-center p-2 pt-0">
              <span className="text-sm">
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit.
                Omnis, pariatur?
              </span>
              <p className="text-blue-500 text-sm">about one hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
