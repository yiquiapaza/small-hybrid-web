import { select } from 'd3-selection';
import Hammer from 'hammerjs';

import '../styles/style.css';

let general = select('body');

const square = document.getElementById('square');
const hammer = new Hammer.Manager(square);

const tap = new Hammer.Tap({
	taps:1
})
hammer.add(tap);

let [positionX, positionY] = [
	window.innerWidth,
	window.innerHeight
];


console.log(general.node().getBoundingClientRect().width);

let obj = select('#square')
	.append('svg')
	.attr('width', positionX)
	.attr('height', positionY);

obj
	.append('circle')
	.attr('cx', positionX / 2)
	.attr('cy', positionY / 2)
	.attr('r', 50)
	.attr('stoke', 'black')
	.attr('fill', '#69a3b2');

hammer.on('tap', (event) => {
	event.target.classList.toggle('expand');
	console.log('I stay here');
	console.log(event);
});
