import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
	const [restaurantData, setRestaurantData] = useState([
		{
			info: {
				id: '41095',
				name: 'Nandhini Deluxe',
				cloudinaryImageId: 'ylmpwj2vbvfqsiyspfd7',
				locality: 'Gandhi Nagar',
				areaName: 'Taj Mahal Building',
				cuisines: [
					'Andhra',
					'Biryani',
					'Chinese',
					'North Indian',
					'South Indian',
				],
				avgRating: 3.1,
			},
		},
		{
			info: {
				id: '41096',
				name: 'KFC',
				cloudinaryImageId: 'ylmpwj2vbvfqsiyspfd7',
				locality: 'Gandhi Nagar',
				areaName: 'Taj Mahal Building',
				cuisines: [
					'Andhra',
					'Biryani',
					'Chinese',
					'North Indian',
					'South Indian',
				],
				avgRating: 4.1,
			},
		},
	]);
	return (
		<div className="body">
			<div className="search">
				<button
					className="search-filter"
					onClick={() => {
						let filteredListRestaurant = restaurantData.filter(
							(res) => res.info.avgRating > 4,
						);
						setRestaurantData(filteredListRestaurant);
					}}
				>
					Filter Top Restaurant
				</button>
			</div>
			<div className="res-container">
				{restaurantData.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
