import React from 'react';
import ReactDOM from 'react-dom/client';
import Signin from './signin';
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import Home from './home';
import Termsofuse from './termsofuse';
import HelpCenter from './helpcenter';
import CorporateInfo from './corporateinfo';
import LegalNotices from './legalnotices';
import { Provider } from 'react-redux';
import ReduxStore from './ReduxStore';
import GPTSearch from './GPTSearch';
import WaysToWatch from './waystowatch';


//to start project just write npm start
const AppLayout=()=>{
  //this is the component which call all other components
  return(
    <Provider store={ReduxStore}>
      <div>
          <Outlet/>
     </div>
    </Provider>  
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/signin",
        element:<Signin/>
      },
      {
        path:"/termsofuse",
        element:<Termsofuse/>
      },
      {
        path:"/helpcenter",
        element:<HelpCenter/>
      },
      {
        path:"/corporateinfo",
        element:<CorporateInfo/>
      },
      {
        path:"/legalnotices",
        element:<LegalNotices/>
      },
      {
        path:"/gptsearch",
        element:<GPTSearch/>
      },
      {
        path:"/waystowatch",
        element:<WaysToWatch/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);



