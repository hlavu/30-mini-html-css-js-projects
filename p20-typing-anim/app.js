const el = document.querySelector("h4");

const animText = "You've got a smile that can light up this whole town...";

const forwardAnim = () => {
  var idx = 0;
  var forward = setInterval(() => {
    idx++;
    el.innerHTML = animText.substring(0, idx);
    if (idx === animText.length) {
      clearInterval(forward);
      backwardAnim();
    }
  }, 100);
};

const backwardAnim = () => {
  var length = animText.length;
  var backward = setInterval(() => {
    length--;
    el.innerHTML = animText.substring(0, length);
    if (length === 0) {
      clearInterval(backward);
      forwardAnim();
    }
  }, 10);
};

forwardAnim();
