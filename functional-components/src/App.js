import logo from './logo.svg';
import Movies from './movies/movies';
import './App.css';

const myData = [
  { Framework: "Boostrap"} ,
  { Framework: "Material"} ,
  { Framework: "Tailwind"} ,
  { Framework: "Next"}
]
//[ "Bootstrap", "Material", "Tailwind", "Next" ];

/*function SumoDosNumero(a,b ){
  return a+b;
}*/

// Repaso funcion anonima/arrow function
/*const SumoDosNumero = (a,b) => {
  return a+b;
}*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function App() {

  const filterResult = words.filter(word => word.length > 6);

  const myDataList = myData.map( (element) => {
      return ( <h2> { element.Framework } </h2> )
  } );

  /* <h2> { myData[0].Framework } </h2>
      <h2> { myData[1].Framework } </h2>
      <h2> { myData[2].Framework } </h2>
      <h2> { myData[3].Framework } </h2>
*/
  return (
    <div className="App">
      { myDataList }
      <Movies data={ filterResult } ></Movies>
    </div>
  );
}

export default App;
