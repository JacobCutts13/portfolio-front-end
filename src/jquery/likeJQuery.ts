export default function likeJQuery(): void {
  //like button
  const scaleCurve = mojs.easing.path(
    "M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0"
  );
  const el = document.querySelector<HTMLElement>(".animated-like-button");

  $(".animated-like-button")
    .delay(2000)
    .fadeIn(3000, () => console.log("fade in"));

  // mo.js timeline obj
  const timeline = new mojs.Timeline();

  // tweens for the animation:
  const parentValue = el ? el : "parent";
  // burst animation
  const tween1 = new mojs.Burst({
    parent: parentValue,
    // radius:   { 0: 100 },
    angle: { 0: 45 },
    y: -10,
    count: 10,
    radius: 100,
    degree: 360,
    timeline: {},
    children: {
      shape: "circle",
      radius: 30,
      fill: ["#1f68e1", "white"],
      strokeWidth: 15,
      duration: 500,
    },
  });

  const tween2 = new mojs.Tween({
    duration: 900,
    onUpdate: function (progress) {
      const scaleProgress = scaleCurve(progress);
      if (el !== null) {
        el.style.transform = el.style.transform =
          "scale3d(" + scaleProgress + "," + scaleProgress + ",1)";
      }
    },
  });
  const tween3 = new mojs.Burst({
    parent: parentValue,
    // radius:   { 0: 100 },
    angle: { 0: 45 },
    y: -10,
    count: 10,
    radius: 125,
    degree: 360,
    timeline: {},
    children: {
      shape: "circle",
      radius: 30,
      fill: ["white", "#1f68e1"],
      strokeWidth: 15,
      duration: 400,
    },
  });

  // add tweens to timeline:
  timeline.add(tween1, tween2, tween3);

  // when clicking the button start the timeline/animation:
  $(".animated-like-button").on("click", () => {
    if ($(".animated-like-button").hasClass("active")) {
      $(".animated-like-button").removeClass("active");
    } else {
      timeline.play();
      $(".animated-like-button").addClass("active");
    }
  });
}
