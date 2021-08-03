import { select } from 'd3-selection';
import Hammer from 'hammerjs';

import '../styles/style.css';

import { sendPostion } from './services';

const square = document.querySelector('.square');
const hammer = new Hammer.Manager(square);

const Swipe = new Hammer.Swipe();
let [deltaX, deltaY] = [0, 0];

let position = { position_x: 0, position_y: 0, state: 0 };

let [positionX, positionY] = [window.innerWidth, window.innerHeight];

sendPostion(positionX, positionY);

console.log(
	square.getBoundingClientRect().top,
	square.getBoundingClientRect().left
);

hammer.add(Swipe);

hammer.on('swipe', (event) => {
	deltaY = deltaY + event.deltaY;
	deltaX = deltaX + event.deltaX;
	position.position_x = (+deltaX * 0.2245) / positionX;
	position.position_y = (-1 * +deltaY * 0.1395) / positionY;
	position.state = 1;
	sendPostion(position);
	let translate3d = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
	event.target.style.transform = translate3d;
});
