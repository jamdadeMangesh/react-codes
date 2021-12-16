import React from 'react';
import { Home } from '../Home/Home';
import './App.scss';
import {
    BrowserRouter as Router,
    Route,
	Routes,
	Navigate,
	Link
  } from "react-router-dom";
import { ButtonsList } from '../../components/Buttons/ButtonsList';
import { Navigation } from '../Navigation/Navigation';
import { DataWithApi } from '../DataWithApi/DataWithApi';

function App() {
	return (
		<>
			<div className="container">
				<Router>
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/home' element={<Home/>} />
						<Route path='/buttons' element={<ButtonsList/>} />
						<Route path='/data-with-api' element={<DataWithApi/>} />
					</Routes>
				</Router>
			</div>
		</>	
	);
}

export default App;
