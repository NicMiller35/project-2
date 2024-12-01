import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
