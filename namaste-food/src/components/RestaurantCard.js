import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
	const { resData } = props; // destructuring

	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
		resData?.info;
	return (
		<div className="res-card">
			<img
				className="card-img"
				src={CDN_URL + cloudinaryImageId}
				alt="food image"
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<p>{avgRating} Star</p>
			<p>{costForTwo}</p>
		</div>
	);
};

export default RestaurantCard;
