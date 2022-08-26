import React, { useEffect } from 'react'
import { Affix } from 'antd';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'
import { Navbar, Sidebar, Footer, ThemeSet } from './components'
import {
  Ecommerce, Calender, ColorMapping, Customer, ColorPicker, Editor, Employees, Kanban, Order, Area, Bar, Financial, LineChart, Pie, Pyramid, Stacked
} from './pages'

import { useStateContext } from './context'

const App = () => {

  const { activeMenue, themeSetings, setThemeSettings, currentColor } = useStateContext()

  // useEffect(() => {
  //   console.log(activeMenue);
  // }, [activeMenue])

  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' onClick={() => setThemeSettings(true)} >
          <TooltipComponent position='Top' content="Settings">
            <button className='text-3xl p-3 text-white rounded-full hover:drop-shadow-xl hover:bg-light-gray' style={{ background: currentColor }} >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenue ?
          <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white' style={{ boxShadow: ' rgb(113 122 131 / 11 %) 0px 7px 30px 0px' }}>
            <Sidebar />
          </div> :
          <div className='w-0 '>
            <Sidebar />
          </div>}
        <div className={`dark:bg-main-bg bg-main-bg min-h-full w-full ${activeMenue ? 'md:ml-72' : 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg dark:bg-secondary-dark-bg navbar w-full">

            <Navbar />
          </div>
          <div>
            {themeSetings && <ThemeSet />}
            <Routes>
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* pages */}
              <Route path='/orders' element={<Order />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customer />} />

              {/* apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calender' element={<Calender />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* charts */}
              <Route path='/line' element={<LineChart />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App