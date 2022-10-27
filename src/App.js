import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './layout/Main';
import Faq from './components/FAQ/Faq';
import Courses from './layout/Courses';
import Course from './components/Courses/Course/Course';
import CourseDetails from './components/Courses/Course/CourseDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          children: [
            {
              path: '/courses',
              element: <Course></Course>
            }
          ]
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/courses/:id',
          element:<CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`https://learning-platform-server-side-olive.vercel.app/courses-categories/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://learning-platform-server-side-olive.vercel.app/courses-categories/${params.id}`)
        }
      ]
    },
    {path: '/*', element: <ErrorPage></ErrorPage>}

  ])


  return (
    <div className="bg-violet-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
