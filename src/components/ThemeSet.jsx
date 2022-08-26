import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../context';

const ThemeSet = () => {
  const {
    setActiveMenue,
    setMode,
    setColor,
    currentColor,
    setCurrentColor,
    currentMode,
    setCurrentMode,
    themeSetings,
    setThemeSettings,
  } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="p-2 hover:bg-light-gray rounded-full text-xl text-gray-600"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 mr-4">
          <p className="text-lg font-semibold">Choose Theme</p>
          <div className="mt-3">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label
              htmlFor="light"
              className="ml-1 cursor-pointer text-sm text-center "
            >
              Light
            </label>
          </div>
          <div className="mt-3">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label
              htmlFor="dark"
              className="ml-1 cursor-pointer text-sm text-center "
            >
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4 mr-4">
          <p className="text-lg font-semibold">Choose Theme Color</p>
          <div className="flex gap-2">
            {themeColors.map((color, index) => (
              <TooltipComponent
                key={index}
                content={color.name}
                position="BottomCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: color.color }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        true ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSet;
