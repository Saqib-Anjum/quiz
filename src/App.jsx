import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createHashRouter } from "react-router-dom";

// import Questions from './pages/Questions';
import Questions from './Questions';
import QuizDashboard from './QuizDashboard';
import AddQuestion from './AddQuestion';
import Dashboard from './components/Dashboard';
// import Settings from './pages/Settings';
import QuizCatalog from './components/Quiz/QuizCatalog';
import { categories } from './components/Quiz/data';

const router = createHashRouter([

  {
    path: "/",
    element: <Dashboard /> ,

    children: [
      {
        path: "/quiz",
        element:  <QuizCatalog categories={categories} />,
      },


    ]}
  
  
]);


export default router;




