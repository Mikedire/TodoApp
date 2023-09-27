const Planet1 = (props) => {
  return (
    <div>
      {props.name} {props.isGasPlanet}
    </div>
  );
};

export default Planet1;

// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className="App">
//       {planets.map((Planet, key) => {
//         // if (Planet.isGasPlanet) {
//         //   return <h1>{Planet.name}</h1>;
//         // }
//         // return null;

//         const result = !Planet.isGasPlanet ? (
//           <Planet1 key={key} name={Planet.name} />
//         ) : (
//           ""
//         );
//         return result;
//       })}
// <div />
