export const drawRect = (detections, ctx) => {
	// Loop through each prediction
	detections.forEach((prediction) => {
		// console.log(prediction);
		// Extract boxes and classes
		const [x, y, width, height] = prediction['bbox'];
		const text = prediction['class'];
		console.log(x, y, width, height, text);

		// Set styling
		// const color = Math.floor(Math.random()*16777215).toString(16);
		// const color = 'red';
		ctx.strokeStyle = ctx.font = 'stop l';

		// Draw rectangles and text
		ctx.beginPath();
		ctx.fillStyle = 'red';
		ctx.fillText(text, x, y);
		ctx.rect(x, y, width, height);
		ctx.stroke();
		ctx.fill();
	});
};
