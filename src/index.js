import { select } from 'd3-selection';
import Hammer from 'hammerjs';

import '../styles/style.css';

import { sendPostion } from './services';

const square = document.querySelector('.square');
const hammer = new Hammer.Manager(square);

const Swipe = new Hammer.Swipe();
let [deltaX, deltaY] = [0, 0];

let position = { position_x: 0, position_y: 0 };

let [positionX, positionY] = [window.innerWidth, window.innerHeight];

sendPostion(position);

console.log(
	square.getBoundingClientRect().top,
	square.getBoundingClientRect().left
);

hammer.add(Swipe);

hammer.on('swipe', (event) => {
	deltaY = deltaY + event.deltaY;
	deltaX = deltaX + event.deltaX;
	position.position_x = +deltaX;
	position.position_y = +deltaY;
	sendPostion(position);
	let translate3d = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
	event.target.style.transform = translate3d;
});
