import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

import { useStateContext } from '../context';

const activeLink =
  'flex items-center gap-5 pl-5 pt-3 pb-2.5 rounded-lg text-white text-md m-2 ';

const normalLink =
  'flex items-center gap-5 pl-5 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

const Sidebar = () => {
  const { activeMenue, setActiveMenue, screenSize, currentColor, handleClose } =
    useStateContext();

  const handleCLoseSideBar = () => {
    if (activeMenue && screenSize <= 900) {
      setActiveMenue(false);
    }
  };

  const hanldeSideNavClick = () => {
    handleClose();
    handleCLoseSideBar();
  };

  return (
    <>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenue && (
          <>
            <div className="flex justify-between items-center">
              <Link
                to="/"
                onClick={handleCLoseSideBar}
                className="items-center flex gap-2 mt-4 text-xl font-extrabold dark:text-white text-slate-900 ml-3 tracking-tight"
              >
                <SiShopware /> <span>Shoppy</span>
              </Link>
              <TooltipComponent position="BottomCenter" content="Menue">
                <button
                  className="text-xl text-center rounded-full mt-4 mr-2 hover:bg-light-gray p-3"
                  onClick={() => setActiveMenue((prev) => !prev)}
                  type="button"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="uppercase text-gray-400 m-3 mt-4">
                    {item.title}
                  </p>

                  {item.links.map((item) => (
                    <NavLink
                      key={item.name}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      to={`/${item.name}`}
                      onClick={hanldeSideNavClick}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                    >
                      {item.icon}
                      <span className="capitalize">{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
