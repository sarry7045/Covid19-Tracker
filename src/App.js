import React, { useEffect } from "react";
import Cardd from "./Components/Cardd";
import Chart from "./Components/Chart";
import CountryPicker from "./Components/CountryPicker";
import fetchData from "./Components/Api";
import "./App.css";
import { Card, Grid } from "@material-ui/core";

// function App() {

//   const componentDidMount = async () => {
//     const data = await fetchData();
//     console.log(data);
//   };

//   useEffect(() => {
//     componentDidMount()
//     console.log(fetchData());
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <Card />
//         <Chart />
//         <CountryPicker />
//       </div>
//     </>
//   );
// }

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="App-container">
        <img className="App-image" src="./Images/CV.jpg" alt="COVID-19" />
        <Cardd data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
