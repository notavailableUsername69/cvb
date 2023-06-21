window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  let isDrawing = falseOO;
  let brushColor = '#000';

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);

  function startDrawing(event) {
    isDrawing = true;
    const { offsetX, offsetY } = event;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  }

  function draw(event) {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event;
    context.lineTo(offsetX, offsetY);
    context.strokeStyle = brushColor;
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.stroke();
  }

  function stopDrawing() {
    isDrawing = false;
    context.closePath();
  }

  function drawDot(event) {
    const { offsetX, offsetY } = event;
    context.fillStyle = brushColor;
    context.beginPath();
    context.arc(offsetX, offsetY, 2.5, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }

  function changeColor(event) {
    brushColor = event.target.style.backgroundColor;
  }
});