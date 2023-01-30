import './App.css';
import { InfoComponent, CardComponent } from './Component';
function App() {
  return (
    <div className="App">
      <InfoComponent/>
      <CardComponent firstname="Kevin" ofici="Pastiser" shortdesc="lorem ipsum do aitem"/>
      <CardComponent firstname="Raul" ofici="Flequer" shortdesc="zelver or latsum oinet"/>
    </div>
  );
}

export default App;
