import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"


import About from './About';
import MainPage from './MainPage';
import FormPage from './FormPage';
import PrivacyPolicy from './PrivacyPolicyPage';
import PracticeAreasPage from './PracticeAreasPage';
import ConsultationPage from './ConsultationPage';

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
            path : "/ConsultationPage",
            element : <ConsultationPage />
        },

        {
            path : "/privacy-policy",
            element : <PrivacyPolicy />
        },

        {
            path : "/PracticeAreas",
            element : <PracticeAreasPage />
        }

    ]);

  return (
    <div>
        <RouterProvider router ={appRouter} />
    </div>

  )
}

export default Body;