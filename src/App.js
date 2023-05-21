import './App.css';
import { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState(
    [ 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

    const addColor = (newColor) => {
      setColors([...colors, newColor]);
    };

   

  const colorMap = colors.map((color, i) => <ColorBlock color={color} key={i}
   /> );

   return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}


export default App;


    