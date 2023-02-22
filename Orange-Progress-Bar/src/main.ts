import "./style.css";

//# Get Element
const progress: HTMLElement = document.querySelector(".progress")!;
const span = document.querySelector("span");

let curPer = getComputedStyle(progress).getPropertyValue("--per");

let i = 0;
const loading = () => {
  let timer = setInterval(() => {
    if (i == 100) {
      clearInterval(timer);
      return;
    }
    i++;
    progress.style.setProperty("--per", i + "%");
    span!.innerHTML = `${i}`;
  }, 100);
};

loading();
