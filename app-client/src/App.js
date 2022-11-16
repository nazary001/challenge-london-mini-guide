import { useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import ChooseCitySelect from './ChooseCitySelect'
import CategoryBlock from './CategoryBlock';
import Table from './Table';

function App() {
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [cityAndCategoryData, setCityAndCategoryData] = useState([]);

  const cityChange = city => {
    setCity(city);
  };

  const categoryChange = category => {
    if(city){
      setCategory(category);
      fetch(`http://localhost:4000/${city}/${category}`)
      .then(response => response.json())
      .then(data => setCityAndCategoryData(data))
    }
    else{
      alert('Choose city first');
    }
  }

  return (
    <div className = 'app'>
      <Header/>
      <ChooseCitySelect onChange={cityChange}/>
      <CategoryBlock onClick={categoryChange}/>
      <Table cityAndCategoryData = {cityAndCategoryData}/>
    </div>
  );
}

export default App;
