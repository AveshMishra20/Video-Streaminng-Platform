

import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./component/Body";
import Head from "./component/Head";
import MainConatianer from "./component/MainConatianer";
import WatchPage from "./component/WatchPage";
import store from "./uitils/store";

const appRouter=createBrowserRouter([
  { path : "/",
  element: <Body/>,
   children:
  [ {
    path:"/",
    element:<MainConatianer/>
   } ,
   {
    path:"watch",
    element:<WatchPage/>,
   } ,
  ],

 },
 
])

function App() {
  return (
    <Provider store={store}>
    <div >
      <h1 className="bg-red-900 text-3xl">Ram Ram 🙏🙏</h1>
    
     <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
