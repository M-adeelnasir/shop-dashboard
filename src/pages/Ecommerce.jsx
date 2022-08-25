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
    <div className="mt-5 sm:mt-10">
      {/* <div className="flex items-start flex-wrap lg:flex-nowrap justify-center ml-10">
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
      </div> */}
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
      <div className="flex flex-wrap lg:flex-nowrap justify-start gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-around">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <p className="flex items-center gap-2">
              <span>
                <GoPrimitiveDot />
              </span>
              <span>Expense</span>
              <p className="flex items-center gap-2 text-green-300">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </p>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$88,000,5</span>
                  <span className="text-sm p-1 rounded-full bg-green-400 text-center cursor-pointer hover:drop-shadow-xl text-white ml-2">
                    55%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$88,000,5</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
