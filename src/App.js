//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
<Navbar title="TextUtils" aboutText="about Textutils"/>
<div className="container">
  <TextForm heading ="enter the text analysis"/>

</div>

    </>
    
  );
}

export default App;
