import './App.css';
import React, {useState} from 'react'
import {Link,navigate,Router} from '@reach/router'
import People from './components/People';
import World from './components/World';
import Starship from './components/Starship';
import axios from 'axios';
import ErrorPage from './components/ErrorPage';

function App() {
	
	const [selectSearchType, setSelectSearchType] = useState("")
	const [selectIndexNumber, setSelectIndexNumber] = useState("")
	const [searchResult, setSearchResult] = useState([])
	const [homeworld, setHomeworld] = useState([])



	const handleSearch = (e) =>{
		e.preventDefault();
		console.log("IDX==========>",selectIndexNumber)
		console.log("TYPE=========>",selectSearchType)
		axios.get(`https://swapi.dev/api/${selectSearchType}/${selectIndexNumber}/`)
			.then(response=>{
				setSearchResult([response.data])
		if(selectSearchType === "people"){
			const homeworldUrl = response.data.homeworld;
			axios.get(homeworldUrl)
				.then(response=>{
					setHomeworld([response.data.name])})
				.catch(err=>{navigate('/error/')
			})
			
		}
		navigate(`/${selectSearchType}/${selectIndexNumber}/`)
		.catch(err=>{
			navigate('/error/')
			});
		})

		console.log(searchResult)
		// let translate =[searchResult]
		// setSearchResult(translate)
		setSelectSearchType("");
		setSelectIndexNumber("");
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
	{JSON.stringify(searchResult)}
	{JSON.stringify(homeworld)}
	
	<Router>
		<People path='/people/:id/' searchResult={searchResult} homeworld={homeworld}/>
		<World path='/planets/:id/' searchResult={searchResult}/>
		<Starship path='/starships/:id/' searchResult={searchResult}/>
		<ErrorPage path='/error/' />
		
	</Router>
	</div>
);
}

export default App;
