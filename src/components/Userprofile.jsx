import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context';

import avatar from '../data/avatar.jpg';

const Userprofile = () => {
  const { handleClose } = useStateContext();

  return (
    <>
      <div className="absolute top-14 right-5 border-color border-1 block w-72 bg-white">
        <div className="p-2 flex justify-between mb-2">
          <div className="flex items-center">
            <span>
              <img className="w-10 h-10 rounded-full" src={avatar} alt="" />
            </span>
            <div className="pl-2">
              <span className="text-xl font-semibold">Adeel Nasir</span>
              <p className="text-sm">adeelnasirkbw@gmail.com</p>
              <Link to="/" className="text-sm pt-3 text-blue-500">
                Manage Your Account
              </Link>
            </div>
          </div>
          <span className="cursor-pointer p-2 rounded-full hover:bg-light-gray h-8">
            {<MdOutlineCancel onClick={() => handleClose('userProfile')} />}
          </span>
        </div>
        <div className="border-t-1 border-color ">
          <ul>
            <li className="p-2 mt-2 hover:bg-gray-200 cursor-pointer">
              What's up
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              Update Settings
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Admin</li>
            <li className="p-2 mb-2 hover:bg-gray-200 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
