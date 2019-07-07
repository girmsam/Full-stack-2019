import React from 'react';
import axios from 'axios';
import ShowCountries from './components/facts.js';

  const App = (props) => {
    const [ countries, setCountries] = useState([]) 
    const [ filter, setfilter ] = useState('')

  componentDidMount() ;{
    axios
      .get('https://restcountries.eu/rest/v2/all'
        + '?fields=name;nativeName;capital;population;flag')
      .then(response => setCountries({ countries: response.data }));
  };
  handleFilterChange = (event) => {
    setfilter({ filter: event.target.value });
  };
    const results = countries
      .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        <h1>Information on countries</h1>
        <div>
          find countries:
          <input value={filter}
            onChange={handleFilterChange} />
        </div>
        <ShowCountries countries={results} />
      </div>
    )
  }

export default App;