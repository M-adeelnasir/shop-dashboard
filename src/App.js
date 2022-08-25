import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'


const App = () => {
  const activeMenue = true
  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4'>
          <TooltipComponent position='Top' content="Settings" >
            <button className='text-3xl p-3 text-white rounded-full hover:drop-shadow-xl hover:bg-light-gray' style={{ background: 'blue' }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenue ?
          <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white' style={{ boxShadow: ' rgb(113 122 131 / 11 %) 0px 7px 30px 0px' }}>
            sidebar
          </div> :
          <div className='w-0 '>
            side-bar
          </div>}
        <div className={`dark:bg-main-bg bg-main-bg min-h-full w-full ${activeMenue ? 'md:ml-72' : 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg dark:bg-secondary-dark-bg navbar w-full">
            Navbar
          </div>

          <div>
            <Routes>
              <Route path='/' element="Ecommerce" />
              <Route path='/ecommerce' element="Ecommerce" />

              {/* pages */}
              <Route path='/orders' element="orders" />
              <Route path='/employees' element="employees" />
              <Route path='/customers' element="customers" />

              {/* apps */}
              <Route path='/kanban' element="kanban" />
              <Route path='/editor' element="editor" />
              <Route path='/calender' element="calender" />
              <Route path='/color-picker' element="color-picker" />

              {/* charts */}
              <Route path='/line' element="line" />
              <Route path='/arae' element="arae" />
              <Route path='/bar' element="bar" />
              <Route path='/pie' element="pie" />
              <Route path='/pyramid' element="pyramid" />
              <Route path='/financial' element="financial" />
              <Route path='/color-mapping' element="color-mapping" />

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App