
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import CourseForm from './components/CourseForm/CourseForm';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route path="/home">
      <Home></Home>

        </Route>
        <Route path="/about">
     <About></About>

        </Route>
        <Route path="/courses">
    <Courses></Courses>

        </Route>
        <Route path="/form">
         
         <CourseForm></CourseForm>
        </Route>
      
       
       
        <Route exact path="/">
        <Home></Home>

        </Route>
        <Route exact path="*">
        <NotFound></NotFound>

        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
  
    </div>
  );
}

export default App;
