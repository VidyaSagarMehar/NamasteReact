import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const element = <h1>Element Title</h1>;
// React Functional Compoent
const Title = () => {
	return <h1>This is Title</h1>;
};

// Component Composition
const HeadingComponent = () => {
	return (
		<div id="container">
			<Title />
			{/*component inside of component */}
			{element}
			{/*Element inside of component */}
			<h1 className="heading">Namaste React</h1>
			{Title()}
			{/* We can call the title function inside it as well */}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// render Component
root.render(<HeadingComponent />);
