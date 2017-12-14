import SpriteSheet from './sprites.js';
import {loadImage} from './load_image.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


ctx.fillRect(0, 0, 70, 40);
loadImage('res/sheet.png')
.then(image => {
	const sprites = new SpriteSheet(image, 16, 16);
	sprites.define('ground', 0, 0);
	sprites.draw('ground', ctx, 45, 45);
	ctx.drawImage(image, 0, 0);
});