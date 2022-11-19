import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div style={{padding:20}}>
      <Header name="comp1" title="first card"/>
      <hr />
      <Header name="comp2" title="second card"/>
      <hr />
      <h1>This is App component</h1>
      <p>this is paragraph ,  i'm currently learning reactjs</p>
      <p>because i want to integrate spring boot rest api with reactjs</p>
      <hr />
      <Header name="comp3" title="third card"/>
    </div>


  );
}

export default App;
