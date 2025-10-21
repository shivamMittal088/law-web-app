import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"


import About from './About';
import MainPage from './MainPage';
import FormPage from './FormPage';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/" ,
            element : < MainPage />,
        } ,

        {
            path : "/About" ,
            element : <About />
        } ,

        {
            path : "/Form",
            element : <FormPage />
        }

    ]);

  return (
    <div>
        <RouterProvider router ={appRouter} />
    </div>

  )
}

export default Body;