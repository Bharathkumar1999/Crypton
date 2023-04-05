import logo from './logo.svg';
import './App.css';
import WidgetOrderStats from './Components/WidgetOrderStats';
import CourseApp from './Components/CourseApp';
import HomeScreen from './Components/HomeScreen';
import TransactionsApp from './Components/TransactionsApp';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <WidgetOrderStats /> */}
      {/* <CourseApp /> */}
      {/* <HomeScreen /> */}
      {/* <TransactionsApp /> */}
      
    </div>
  );
}

export default App;
