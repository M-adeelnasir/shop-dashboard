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
    </div>
  );
};

export default Ecommerce;
