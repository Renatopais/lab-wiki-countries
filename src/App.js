import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import {Link} from 'react-router-dom'

const apiURL = "https://ih-countries-api.herokuapp.com/countries"


function App() {

  const [fetching, setFetching] = useState(false);
  
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get(apiURL).then((response)=>{
        // Listing all the apartments in State.
        setCountries(response.data);
        // Give BUENO status to Data Fetch. 
        setFetching(true);
    })
})

return (
  <div>
      <h3>Countries List</h3>
      {!fetching && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>}
      {countries.map((country)=>{
          return(
              <div key={country._id}>
                  <Link to={`/countries/${country.alpha3Code}`}>
                      {country.name.common}
                  </Link>
              </div>
          )
      })}
    <Navbar/>

  </div>
  
)
}
export default App;
