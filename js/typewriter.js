var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString('im naufal zaqie, aka saint. <br> a front-end web developer. ')
  .pauseFor(300)
  .start();