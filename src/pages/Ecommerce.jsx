import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Sparked, Button } from '../components';
import { useStateContext } from '../context';

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';

const Ecommerce = () => {
  return (
    <div className="mt-5">
      <div className="flex items-start flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 h-44 m-3 dark:bg-secondary-dark-bg w-full pt-9 bg-hero-pattern bg-no-repeat">
          <div className="flex rounded-lg justify-start items-center">
            <div>
              <p className="capitalize font-bold text-gray-400 ">earnings</p>
              <p className="text-2xl">$100,9,00</p>
              <Button
                text="Download"
                color="white"
                bgColor="blue"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-3 flex-wrap lg:flex-nowrap justify-center gap-3 items-center">
        {earningData.map((item) => (
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            key={item.title}
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="p-4 rounded-full text-2xl hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="ml-2">{item.amount}</span>
              <span className={`ml-1 text-sm ${item.pcColor}`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-gray-500 text-sm ml-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
