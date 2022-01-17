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
import ReduxMovies from '../ReduxMovies/ReduxMovies';
import MovieDetail from './../../components/Movies/MovieDetail/MovieDetail';
import { PostAPI } from '../PostAPI/PostAPI';
import { AddData } from '../PostAPI/AddData/AddData';
import { EditData } from '../PostAPI/EditData/EditData';
import { PaginationView } from '../Pagination/PaginationView';
import { RadioButtons } from '../RadioButtons/RadioButtons';
import { FilterWithApi } from '../FilterWithApi/FilterWithApi';
import PageNotFound from './../../components/PageNotFound/PageNotFound';
import ProgressiveWebApp from './../../components/ProgressiveWebApp/ProgressiveWebApp';

function App() {
	return (
		<>
			<div className="container">
				<Router>
					<Routes>
						<Route path='*' element={<PageNotFound />} />
						<Route path='/' element={<Home/>} />
						<Route path='/home' element={<Home/>} />
						<Route path='/buttons' element={<ButtonsList/>} />
						<Route path='/data-with-api' element={<DataWithApi/>} />
						<Route path='/checkboxes' element={<Checkboxes/>} />
						<Route path='/toasts' element={<ToastsList/>} />
						<Route path='/data-with-json' element={<DataWithJSON/>} />
						<Route path='/redux' element={<ReduxMovies />} />
						<Route path='/movie-details' element={<MovieDetail />} />
						<Route path='/post-api' element={<PostAPI />} />
						<Route path='/post-api/add' element={<AddData />} />
						<Route path='/post-api/edit/:id' element={<EditData />} />
						<Route path='/pagination' element={<PaginationView />} />
						<Route path='/radio' element={<RadioButtons />} />
						<Route path='/filter-data-with-api' element={<FilterWithApi />} />
						<Route path='/progressive-web-app' element={<ProgressiveWebApp />} />
						
					</Routes>
				</Router>
			</div>
		</>	
	);
}

export default App;
