import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Login from './pages/Login.tsx';
import SavedQuotes from './pages/SavedQuotes.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/saved',
        element: <SavedQuotes />
      }
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
