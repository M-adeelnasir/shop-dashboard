import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';

import { Cart, Notifications, Chat, Userprofile } from '.';

import { useStateContext } from '../context';

const NavButton = ({ color, dotColor, title, cusFunc, icon }) => (
  <TooltipComponent position="BottomCenter" content={title}>
    <button
      type="button"
      style={{ color }}
      onClick={cusFunc}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: dotColor }}
        // className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenue, setActiveMenue, isClicked, setIsClicked, handleClick } =
    useStateContext();

  return (
    <>
      <div className="flex items-center justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menue"
          cusFunc={() => setActiveMenue((prev) => !prev)}
          color="blue"
          icon={<AiOutlineMenu />}
        />
        <div className="flex">
          <NavButton
            title="Cart"
            cusFunc={() => handleClick('cart')}
            color="blue"
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            cusFunc={() => handleClick('chat')}
            color="blue"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notifications"
            cusFunc={() => handleClick('notifications')}
            color="blue"
            icon={<RiNotification3Line />}
          />
          <div>
            <TooltipComponent
              position="BottomCenter"
              content="Profile"
              onClick={() => handleClick('userProfile')}
            >
              <div className="flex items-center p-1 hover:bg-light-gray rounded-lg gap-2 cursor-pointer">
                <img src={avatar} alt="img" className="w-8 h-8 rounded-full " />
                <span>Hi, </span> <span>Adeel</span>
                <span>{<MdKeyboardArrowDown />}</span>
              </div>
            </TooltipComponent>
            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notifications && <Notifications />}
            {isClicked.userProfile && <Userprofile />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
