import React from 'react';
import { Home } from '../Home/Home';
import './App.scss';
import {
    BrowserRouter as Router,
    Route,
	Routes
  } from "react-router-dom";
import { ButtonsList } from '../../components/Buttons/ButtonsList';
import { DataWithApi } from '../DataWithApi/DataWithApi';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { ToastsList } from '../Toasts/Toasts';
import { DataWithJSON } from '../DataWithJSON/DataWithJson';

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
						<Route path='/checkboxes' element={<Checkboxes/>} />
						<Route path='/toasts' element={<ToastsList/>} />
						<Route path='/data-with-json' element={<DataWithJSON/>} />
					</Routes>
				</Router>
			</div>
		</>	
	);
}

export default App;
