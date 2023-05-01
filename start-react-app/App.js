// when creating elements in react it takes three parameters -
//1st is element name,
// 2nd is object{'attributes'} which takes specifies the attributes
//and 3rd is content. It is also props- props and childrens that we passes
// const heading = React.createElement('h1', {}, 'Hello world from react');
// const heading = React.createElement(
// 	'h1',
// 	{ id: 'heading', xyz: 'abc' }, //pops
// 	'Hello world from react', //children
// );
// console.log(heading); //it will give us object(react elemnet)
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // everything will be render to the root
// root.render(heading);

// This is how to create neasted html in react
//we want to create this

/**
 *   <div id='parent'>
 *       <div id='child'>
 *           <h1>i am h1 tag</h1>
 *           <h2>I am h2 tag</h2>
 *       </div>
 *   </div>
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
// const parent = React.createElement(
// 	'div',
// 	{ id: 'parent' },
// 	React.createElement('div', { id: 'child' }, [
// 		React.createElement('h1', {}, 'I am h1 tag'),
// 		React.createElement('h2', {}, 'I am h2 tag'),
// 	]),
// 	React.createElement('div', { id: 'child' }, [
// 		React.createElement('h1', {}, 'I am h1 tag'),
// 		React.createElement('h2', {}, 'I am h2 tag'),
// 	]),
// );

// console.log(parent);

// React.createElement => ReactElement -> JS Object => HTMLElement(render)

const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
console.log(heading);

//Bable transpiles it to --> JSX => React.createElement => ReactElement -> JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(jsxHeading);
