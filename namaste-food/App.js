import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * 	-Logo
 * 	-Nav Items
 * Body
 * 	-Search
 * 	-RestaurantContainer
 * 		-RestaurantCard
 * Footer
 * 	-Footer
 * 	-Links
 * 	-Address
 * 	-Contact
 */

// Header component
const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<p className="logo">LOGO</p>
			</div>
			<div className="nav-item">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

// Restaurant Card Component
const RestaurantCard = (props) => {
	const { resData } = props; // destructuring

	const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
		resData?.info;
	return (
		<div className="res-card">
			<img
				className="card-img"
				src={
					'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
					cloudinaryImageId
				}
				alt="food image"
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<p>{avgRatingString} Star</p>
			<p>{costForTwo}</p>
		</div>
	);
};

// APi
const resList = [
	{
		info: {
			id: '41095',
			name: 'Nandhini Deluxe',
			cloudinaryImageId: 'ylmpwj2vbvfqsiyspfd7',
			locality: 'Gandhi Nagar',
			areaName: 'Taj Mahal Building',
			costForTwo: '₹550 for two',
			cuisines: [
				'Andhra',
				'Biryani',
				'Chinese',
				'North Indian',
				'South Indian',
			],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: '41095',
				fees: [
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '2451',
			avgRatingString: '4.1',
			totalRatingsString: '5K+',
			promoted: true,
			adTrackingId:
				'cid=6700674~p=1~eid=00000187-e19f-8d78-22af-e2f7004a0175~45826',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 2.9,
				serviceability: 'SERVICEABLE',
				slaString: '35 mins',
				lastMileTravelString: '2.9 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹100 OFF',
				subHeader: 'ABOVE ₹599',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=41095',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '43836',
			name: "McDonald's",
			cloudinaryImageId: 'ee5f8e06b300efc07c9fe3f4df40dfc4',
			locality: 'MG Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹400 for two',
			cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: '43836',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '630',
			avgRatingString: '4.2',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 0.7,
				serviceability: 'SERVICEABLE',
				slaString: '35 mins',
				lastMileTravelString: '0.7 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-04 00:45:00',
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C',
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									shortDescription: 'options available',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
								},
							},
						],
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=43836',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '30959',
			name: 'KFC',
			cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
			locality: 'Garuda Mall',
			areaName: 'Magrath Road',
			costForTwo: '₹400 for two',
			cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
			avgRating: 3.8,
			feeDetails: {
				restaurantId: '30959',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '547',
			avgRatingString: '3.8',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 46,
				lastMileTravel: 2.4,
				serviceability: 'SERVICEABLE',
				slaString: '46 mins',
				lastMileTravelString: '2.4 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=30959',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '667962',
			name: 'Paris Panini - Gourmet Sandwiches',
			cloudinaryImageId: '33101e2fff3a071cbd8b85e73c0d4f45',
			locality: 'Church Street',
			areaName: 'Central Bangalore',
			costForTwo: '₹500 for two',
			cuisines: ['Snacks', 'European', 'Salads', 'Beverages', 'Pastas'],
			avgRating: 4.5,
			feeDetails: {
				restaurantId: '667962',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '21019',
			avgRatingString: '4.5',
			totalRatingsString: '100+',
			promoted: true,
			adTrackingId:
				'cid=6576698~p=2~eid=00000187-e19f-8d78-22af-e2f8004a020a~45826',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 1.8,
				serviceability: 'SERVICEABLE',
				slaString: '35 mins',
				lastMileTravelString: '1.8 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:00:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1669879258/GFF_logo_new_xbycg6.png',
						description: 'gourmet',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: 'v1669879258/GFF_logo_new_xbycg6.png',
									description: 'gourmet',
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹150 OFF',
				subHeader: 'ABOVE ₹799',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=667962',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '23847',
			name: "Domino's Pizza",
			cloudinaryImageId: 'fjqcvqfgqlw6h0atques',
			locality: 'Rest House Road',
			areaName: 'Brigade Road',
			costForTwo: '₹400 for two',
			cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: '23847',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 2800,
			},
			parentId: '2456',
			avgRatingString: '4.1',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 25,
				serviceability: 'SERVICEABLE',
				slaString: '25 mins',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 22:59:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=23847',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '15870',
			name: 'All Saints Bakery',
			cloudinaryImageId: 'yij33zwbu97ulmh9yymy',
			locality: 'Brigade Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹200 for two',
			cuisines: ['Bakery', 'Snacks', 'Desserts'],
			avgRating: 4.5,
			feeDetails: {
				restaurantId: '15870',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '21659',
			avgRatingString: '4.5',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 34,
				lastMileTravel: 2.3,
				serviceability: 'SERVICEABLE',
				slaString: '34 mins',
				lastMileTravelString: '2.3 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 19:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=15870',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '579022',
			name: 'Sri Udupi Food Hub',
			cloudinaryImageId: 'hrdhnm5w0h1pejimro3y',
			locality: 'Gandhi Nagar',
			areaName: 'The Kanishka Grand Building',
			costForTwo: '₹200 for two',
			cuisines: [
				'South Indian',
				'North Indian',
				'Indian',
				'Chinese',
				'Chaat',
				'Ice Cream',
				'Desserts',
				'Beverages',
			],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: '579022',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 2800,
			},
			parentId: '7550',
			avgRatingString: '4.3',
			totalRatingsString: '100+',
			promoted: true,
			adTrackingId:
				'cid=6699047~p=3~eid=00000187-e19f-8d78-22af-e2f9004a032e~45826',
			sla: {
				deliveryTime: 32,
				lastMileTravel: 2.8,
				serviceability: 'SERVICEABLE',
				slaString: '32 mins',
				lastMileTravelString: '2.8 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 22:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹125 OFF',
				subHeader: 'ABOVE ₹249',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=579022',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '180847',
			name: 'Bombay Vadapav Corner',
			cloudinaryImageId: 'lynwmpukcdxjrizoklfa',
			locality: 'Jai Bheema Nagar',
			areaName: 'Malleshwaram',
			costForTwo: '₹100 for two',
			cuisines: ['North Indian'],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: '180847',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 3400,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 3400,
			},
			parentId: '48912',
			avgRatingString: '4.3',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 29,
				lastMileTravel: 3.6,
				serviceability: 'SERVICEABLE',
				slaString: '29 mins',
				lastMileTravelString: '3.6 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 22:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=180847',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '281469',
			name: 'Lavonne',
			cloudinaryImageId: 'emlehbuwgsmryxhwzhvq',
			locality: 'Ashok Nagar',
			areaName: 'St Marks Road',
			costForTwo: '₹750 for two',
			cuisines: ['Bakery', 'Desserts'],
			avgRating: 4.6,
			feeDetails: {
				restaurantId: '281469',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '10530',
			avgRatingString: '4.6',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 31,
				lastMileTravel: 0.6,
				serviceability: 'SERVICEABLE',
				slaString: '31 mins',
				lastMileTravelString: '0.6 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 22:40:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'newg.png',
						description: 'Gourmet',
					},
				],
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C',
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: 'newg.png',
									description: 'Gourmet',
								},
							},
						],
					},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									iconId: 'guiltfree/GF_Logo_android_3x',
									description: '',
									shortDescription: 'options available',
									fontColor: '#7E808C',
								},
							},
						],
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=281469',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '289548',
			name: 'New Agarwal Bhavan',
			cloudinaryImageId: 'e03610fb60dc1f1c6773b96ea72baaf2',
			locality: 'Vyalikaval',
			areaName: 'Sadashiv Nagar',
			costForTwo: '₹150 for two',
			cuisines: ['Sweets', 'Bakery', 'Snacks'],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: '289548',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 4000,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 4000,
			},
			parentId: '7440',
			avgRatingString: '4.3',
			totalRatingsString: '1K+',
			promoted: true,
			adTrackingId:
				'cid=6699281~p=5~eid=00000187-e19f-8d78-22af-e2fb004a054a~45826',
			sla: {
				deliveryTime: 32,
				lastMileTravel: 4.9,
				serviceability: 'SERVICEABLE',
				slaString: '32 mins',
				lastMileTravelString: '4.9 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 21:30:00',
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									iconId: 'guiltfree/GF_Logo_android_3x',
									description: '',
									shortDescription: 'options available',
									fontColor: '#7E808C',
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹125 OFF',
				subHeader: 'ABOVE ₹249',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=289548',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '684427',
			name: 'Cafe Amudham',
			cloudinaryImageId: '0bcdca61f3cd1e9135b98328593d044f',
			locality: 'Lalbhagh  Siddapura',
			areaName: 'Jayanagar',
			costForTwo: '₹400 for two',
			cuisines: ['South Indian', 'Snacks'],
			avgRating: 4.5,
			feeDetails: {
				restaurantId: '684427',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 4000,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 4000,
			},
			parentId: '396620',
			avgRatingString: '4.5',
			totalRatingsString: '500+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4,
				serviceability: 'SERVICEABLE',
				slaString: '35 mins',
				lastMileTravelString: '4.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:59:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '10% OFF',
				subHeader: 'UPTO ₹40',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=684427',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '317934',
			name: 'Kwality Walls Frozen Dessert and Ice Cream Shop',
			cloudinaryImageId: 'x0ybjon2zebfetcdrzah',
			locality: '5th Cross',
			areaName: 'Wilson Garden',
			costForTwo: '₹200 for two',
			cuisines: ['Desserts', 'Ice Cream', 'Ice Cream Cakes'],
			avgRating: 4.6,
			veg: true,
			feeDetails: {
				restaurantId: '317934',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 3400,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 3400,
			},
			parentId: '582',
			avgRatingString: '4.6',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 34,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '34 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 22:30:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=317934',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '342643',
			name: 'The Pizza Bakery',
			cloudinaryImageId: 'l7zme8yryk6adeakj6jy',
			locality: 'Church Street',
			areaName: 'Ashok Nagar',
			costForTwo: '₹700 for two',
			cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Continental'],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: '342643',
				fees: [
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '11108',
			avgRatingString: '4.4',
			totalRatingsString: '1K+',
			promoted: true,
			adTrackingId:
				'cid=6574762~p=6~eid=00000187-e19f-8d78-22af-e2fc004a0643~45826',
			sla: {
				deliveryTime: 36,
				lastMileTravel: 1.3,
				serviceability: 'SERVICEABLE',
				slaString: '36 mins',
				lastMileTravelString: '1.3 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:00:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1669879258/GFF_logo_new_xbycg6.png',
						description: 'gourmet',
					},
				],
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: 'v1669879258/GFF_logo_new_xbycg6.png',
									description: 'gourmet',
								},
							},
						],
					},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									shortDescription: 'options available',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '30% OFF',
				subHeader: 'UPTO ₹75',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=342643',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '426730',
			name: 'Theobroma',
			cloudinaryImageId: 'o77uezd0iftxb1czbnla',
			locality: 'Vittal Malya Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹500 for two',
			cuisines: ['Desserts', 'Bakery', 'Beverages'],
			avgRating: 4.6,
			feeDetails: {
				restaurantId: '426730',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '1040',
			avgRatingString: '4.6',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 28,
				lastMileTravel: 0.4,
				serviceability: 'SERVICEABLE',
				slaString: '28 mins',
				lastMileTravelString: '0.4 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:00:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'newg.png',
						description: 'Gourmet',
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'Gourmet',
									imageId: 'newg.png',
								},
							},
						],
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=426730',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '570511',
			name: 'Bakingo',
			cloudinaryImageId: 'qwbqggsxzw86vgk60c9c',
			locality: 'MV Jayanthi Road',
			areaName: 'Vasanth Nagar',
			costForTwo: '₹299 for two',
			cuisines: ['Bakery', 'Desserts', 'Beverages', 'Snacks'],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: '570511',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 3400,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 3400,
			},
			parentId: '3818',
			avgRatingString: '4.3',
			totalRatingsString: '500+',
			sla: {
				deliveryTime: 33,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '33 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-04 01:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=570511',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '44238',
			name: 'The Rice Bowl',
			cloudinaryImageId: 'mfuyhvpigpssezrpogpm',
			locality: 'Lavelle Road',
			areaName: 'Lavelle Road',
			costForTwo: '₹450 for two',
			cuisines: ['Chinese'],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: '44238',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '8847',
			avgRatingString: '4.3',
			totalRatingsString: '1K+',
			promoted: true,
			adTrackingId:
				'cid=6699329~p=8~eid=00000187-e19f-8d78-22af-e2fe004a0855~45826',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 0.8,
				serviceability: 'SERVICEABLE',
				slaString: '35 mins',
				lastMileTravelString: '0.8 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 23:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹125 OFF',
				subHeader: 'ABOVE ₹249',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=44238',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '10575',
			name: 'Pizza Hut',
			cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
			locality: 'Shanti Nagar',
			areaName: 'Shanthi Nagar',
			costForTwo: '₹600 for two',
			cuisines: ['Pizzas'],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: '10575',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 2800,
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
					{
						name: 'BASE_TIME',
					},
				],
				totalFee: 2800,
			},
			parentId: '721',
			avgRatingString: '3.9',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 38,
				lastMileTravel: 2.7,
				serviceability: 'SERVICEABLE',
				slaString: '38 mins',
				lastMileTravelString: '2.7 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-04 00:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=10575',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
	{
		info: {
			id: '2552',
			name: "Gullu's Chaat",
			cloudinaryImageId: 'dzwlfxw0hqb0txqs9y9g',
			locality: 'Serpentine Road',
			areaName: 'Seshadripuram',
			costForTwo: '₹250 for two',
			cuisines: ['Chaat', 'Snacks', 'Fast Food'],
			avgRating: 4,
			veg: true,
			feeDetails: {
				restaurantId: '2552',
				fees: [
					{
						name: 'BASE_DISTANCE',
						fee: 4000,
					},
					{
						name: 'BASE_TIME',
					},
					{
						name: 'ANCILLARY_SURGE_FEE',
					},
				],
				totalFee: 4000,
			},
			parentId: '21103',
			avgRatingString: '4.0',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 34,
				lastMileTravel: 4.9,
				serviceability: 'SERVICEABLE',
				slaString: '34 mins',
				lastMileTravelString: '4.9 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2023-05-03 22:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		},
		analytics: {},
		cta: {
			link: 'swiggy://menu?restaurant_id=2552',
			text: 'RESTAURANT_MENU',
			type: 'DEEPLINK',
		},
	},
];

// Body Component
const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{resList.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

// App layout ccomponent
const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
