import './App.css';
import React, {useState,useEffect} from 'react'
import {Link,navigate,Router} from '@reach/router'
import People from './components/People';
import World from './components/World';
import Starship from './components/Starship';
import axios from 'axios';
import ErrorPage from './components/ErrorPage';
import ViewInfo from './components/ViewInfo';

function App() {
	
	const [selectSearchType, setSelectSearchType] = useState("")
	const [selectIndexNumber, setSelectIndexNumber] = useState("")
	const [searchResult, setSearchResult] = useState({})
	const [homeworld, setHomeworld] = useState([])
	const [homeID, setHomeID] = useState("")


	const handleSearch = (e) =>{
		e.preventDefault();
		navigate(`/${selectSearchType}/${selectIndexNumber}/`)
}

	const goToHomeworld = (home) =>{
		axios.get(`https://swapi.dev/api/planets/${home}/`)
		.then(response=>{
			setSearchResult(response.data)
			navigate(`/planets/${home}/`)
		.catch(err=>{
			navigate('/error/')
			});
		})
	}
return (
	<div className="App">
		<Link to="/">Back To Home</Link>
	<h1>API Walker</h1>
	
	<form onSubmit={handleSearch}>
		<label htmlFor="select">Select a type to search</label><br></br>
		<select name="select" id="select" onChange={e => setSelectSearchType(e.target.value)}>
			<option defaultValue>Select your option</option>
			<option value="people">People</option>
			<option value="planets">Planet</option>
			<option value="starships">Starship</option>
		</select><br></br>
		<label htmlFor="idNumber">Enter and ID number</label><br></br>
		<input style={{width:"35px"}} type="number" name="idNumber"  value={selectIndexNumber}onChange={e => setSelectIndexNumber(e.target.value)}/>
		<input type="submit" value="Search"/>
		
	</form>
	{/* {JSON.stringify(selectSearchType)}
	{JSON.stringify(selectIndexNumber)} */}
	{/* {JSON.stringify(searchResult)} */}
	{JSON.stringify(homeID)}
	
	<Router>
		<ViewInfo path='/:type/:id/' />

		{/* <People path='/people/:id/' searchResult={searchResult} homeworld={homeworld} homeID={homeID} goToHomeworld={goToHomeworld}/>
		<World path='/planets/:id/' searchResult={searchResult}/>
		<Starship path='/starships/:id/' searchResult={searchResult}/> */}
		<ErrorPage path='/error/' />
		
	</Router>
	</div>
);
}

export default App;
