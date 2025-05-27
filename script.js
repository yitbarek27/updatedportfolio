const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStaticDiagonalWave();
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawStaticDiagonalWave() {
  ctx.clearRect( canvas.width, canvas.height, 0, 0);

  ctx.fillStyle = 'rgba(18, 66, 64, 0.4)';

  ctx.beginPath();
  ctx.moveTo(0.5, canvas.height * 0.7); 
  ctx.quadraticCurveTo(canvas.width * 1.1, canvas.height * 0.8, canvas.width, 0.8); 
  ctx.lineTo(0, 0);
  
  ctx.fill();
}
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      status.style.color = 'green';
      status.textContent = '✅ Thank you! Your message has been sent.';
      form.reset();
    } else {
      status.style.color = 'red';
      status.textContent = '❌ There was an issue sending your message. Please try again.';
    }
  })
  .catch(() => {
    status.style.color = 'red';
    status.textContent = '⚠️ Connection error. Please check your network.';
  });
});

function updateBackgroundForDevice() {
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
    const body = document.body;
    if (isMobileOrTablet) {
      body.style.backgroundColor = "#e6ffe6"; 
    } else {
      body.style.backgroundColor = ""; 
    }
  }
  updateBackgroundForDevice();
  window.addEventListener("resize", updateBackgroundForDevice);

  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
  });