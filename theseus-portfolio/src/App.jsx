import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
// import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ProjectListPage from './pages/ProjectListPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';

const routes = [{
  path: '/',
  errorElement: <NotFoundPage />,
  element: <Layout />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/projects',
    element: <ProjectListPage />
  }, {
    path: '/project/:name',
    element: <ProjectPage />
  }]
}]

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
