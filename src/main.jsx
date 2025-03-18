import React, { StrictMode, Suspense } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css'
import ErrorBoundary from './Advanced Concepts/error-boundaries/ErrorBoundary.jsx'

import App from './App.jsx'
import Basic from './Pages/Basic.jsx'
import Advanced from './Pages/Advanced.jsx'
import HooksNav from './Pages/HooksNav.jsx'


const Zustand = React.lazy(() => import('./Advanced Concepts/state-management/Zustand/ZustandApp.jsx'))
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './Advanced Concepts/state-management/Redux/ReduxStore.jsx'
const Redux = React.lazy(() => import('./Advanced Concepts/state-management/Redux/ReduxApp.jsx'))

const queryClient = new QueryClient( 
  // { defaultOptions: {queries: {staleTime: 1000 * 2}}}
)

// import Register from './Auth/Register.jsx'
// import Login from './Auth/Login.jsx'
import ManualLogin from './Auth/ManualLogin.jsx'

// -----------------------------------------------------------------------------------------------------------------------------------------

// #region: Basic Concepts
const Props = React.lazy(() => import('./Basic Concepts/props/StudentApp.jsx'))
const ConditionalRendering = React.lazy(() => import('./Basic Concepts/conditional-rendering/AppUG.jsx'))
const RenderLists = React.lazy(() => import('./Basic Concepts/render-list/AppList.jsx'))
const ClickEvents = React.lazy(() => import('./Basic Concepts/click-event/CeApp.jsx'))

const UseStatesNav = React.lazy(() => import('./Pages/UseStatesNav.jsx'))
const UseState = React.lazy(() => import('./Basic Concepts/react-hooks/UseState/UseState.jsx'))
const UpdateArray = React.lazy(() => import('./Basic Concepts/react-hooks/UseState/UpdateArrays.jsx'))
const UpdateObject = React.lazy(() => import('./Basic Concepts/react-hooks/UseState/UpdateObjects.jsx'))
const UpdateArrayOfObject = React.lazy(() => import('./Basic Concepts/react-hooks/UseState/UpdateArraysOfObjects.jsx'))
const Counter = React.lazy(() => import('./Basic Concepts/react-hooks/UseState/Counter.jsx'))


const OnChange = React.lazy(() => import('./Basic Concepts/react-hooks/OnChange/AppOnChange.jsx'))
const UseEffect = React.lazy(() => import('./Basic Concepts/react-hooks/UseEffect/UseEffect.jsx'))
const UseContext = React.lazy(() => import('./Basic Concepts/react-hooks/UseContext/UseContext.jsx'))
const UseRef = React.lazy(() => import('./Basic Concepts/react-hooks/UseRef/UseRef.jsx'))
//#endregion

// --------------------------------------------------------------------------------------------------------------------------------------------

// #region: Advanced Concepts
const UseCustomHooks = React.lazy(() => import('./Advanced Concepts/custom-hooks/Demo.jsx'))
const ErrorBoundaryApp = React.lazy(() => import('./Advanced Concepts/error-boundaries/ErrorBoundaryApp.jsx'))

const PerformanceOptimization = React.lazy(() => import('./Pages/PerformancesNav.jsx'))
const ReactMemo = React.lazy(() => import('./Advanced Concepts/performance-optimization/ReactMemo.jsx'))
const UseMemo = React.lazy(() => import('./Advanced Concepts/performance-optimization/UseMemo.jsx'))
const UseCallback = React.lazy(() => import('./Advanced Concepts/performance-optimization/UseCallback.jsx'))
const ReactWindow = React.lazy(() => import('./Advanced Concepts/performance-optimization/ReactWindow.jsx'))

const StateManagers = React.lazy(() => import('./Pages/StateManagersNav.jsx'))

const ReactQueryApp = React.lazy(() => import('./Pages/ReactQuery.jsx'))
const AustinReactQuery = React.lazy(() => import('./Advanced Concepts/react-query/austin-davis/AustinReactQueryApp.tsx'))
const WdsReactQueryApp = React.lazy(() => import('./Advanced Concepts/react-query/wds/WdsReactQueryApp.jsx'))

const ReactHookForm = React.lazy(() => import('./Advanced Concepts/react-hook-form/RhfApp.tsx'))
const ZodApp = React.lazy(() => import('./Advanced Concepts/zod/ZodApp.tsx'))
// #endregion


//  #region: UI Kits
//  --------------------------------------------------------------------------------------------------------------
const UI = React.lazy(() => import('./Pages/UIsNav.jsx'))
const Table = React.lazy(() => import('./Components/UIkit/Table/Table.jsx'))
// #endregion

const router = createBrowserRouter([


  { path: '/', element: <App /> },
  { path: '/state-managers/zustand', element: <Zustand /> },
  { path: '/state-managers/redux', element: <Redux /> },
  { path: '/login', element: <ManualLogin /> },
  
  { path: '/basic', element: <Basic /> },
  { path: '/hooks', element: <HooksNav /> },
  { path: '/props', element: <Props /> },
  { path: '/conditional-rendering', element: <ConditionalRendering /> },
  { path: '/render-lists', element: <RenderLists /> },
  { path: '/click-events', element: <ClickEvents /> },

  { path: '/use-states-nav', element: <UseStatesNav /> },
  { path: '/use-state', element: <UseState /> },
  { path: '/use-state/update-array', element: <UpdateArray /> },
  { path: '/use-state/update-object', element: <UpdateObject /> },
  { path: '/use-state/update-array-of-object', element: <UpdateArrayOfObject /> },
  { path: '/use-state/counter', element: <Counter /> },
  { path: '/on-change', element: <OnChange /> },
  { path: '/use-effect', element: <UseEffect /> },
  { path: '/use-context', element: <UseContext /> },
  { path: '/use-ref', element: <UseRef /> },


  { path: '/advanced', element: <Advanced /> },
  { path: '/use-custom-hooks', element: <UseCustomHooks /> },
  { path: '/error-boundaries', element: <ErrorBoundaryApp /> },

  { path: '/performance-optimization', element: <PerformanceOptimization /> },
  { path: '/performances/react-memo', element: <ReactMemo /> },
  { path: '/performances/use-memo', element: <UseMemo /> },
  { path: '/performances/use-callback', element: <UseCallback /> },
  { path: '/performances/react-window', element: <ReactWindow /> },
  { path: '/state-managers', element: <StateManagers /> },

  { path: '/react-query', element: <ReactQueryApp /> },
  { path: '/react-query/austin', element: <AustinReactQuery /> },
  { path: '/react-query/wds', element: <WdsReactQueryApp /> },

  { path: '/react-hook-form', element: <ReactHookForm /> },


  { path: '/UI', element: <UI /> },
  { path: '/UI/table', element: <Table /> },
  { path: '/use-custom-hooks', element: <p></p> },
  { path: '/zod', element: <ZodApp /> },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ErrorBoundary fallback = "there is an error">
        <Suspense fallback={<div><p>Loading...</p></div>}>


           <QueryClientProvider client={queryClient}>
            
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router}/>
                <ReactQueryDevtools/>
              </PersistGate>
            </Provider>

          </QueryClientProvider>


        </Suspense>
      </ErrorBoundary>
  </StrictMode>
)
