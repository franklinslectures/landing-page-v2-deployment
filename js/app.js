document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#college");

  const choices = new Choices(element, {
    searchEnabled: true,
    itemSelectText: "",
    shouldSort: true,
  });

  element.addEventListener("search", function (e) {
    const searchValue = e.detail.value.toLowerCase();

    const options = Array.from(element.options);

    const matchFound = options.some((option) =>
      option.text.toLowerCase().includes(searchValue),
    );

    if (!matchFound && searchValue !== "") {
      choices.setChoices(
        [{ value: "OTHER", label: "OTHER", selected: false }],
        "value",
        "label",
        true,
      );
    }
  });
});
 
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#semester");

  const choices = new Choices(element, {
    searchEnabled: true,
    itemSelectText: "",
    shouldSort: true,
  });

  element.addEventListener("search", function (e) {
    const searchValue = e.detail.value.toLowerCase();

    const options = Array.from(element.options);

    const matchFound = options.some((option) =>
      option.text.toLowerCase().includes(searchValue),
    );

    if (!matchFound && searchValue !== "") {
      choices.setChoices(
        [{ value: "OTHER", label: "OTHER", selected: false }],
        "value",
        "label",
        true,
      );
    }
  });
});
 

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#department");

  const choices = new Choices(element, {
    searchEnabled: true,
    itemSelectText: "",
    shouldSort: true,
  });

  element.addEventListener("search", function (e) {
    const searchValue = e.detail.value.toLowerCase();

    const options = Array.from(element.options);

    const matchFound = options.some((option) =>
      option.text.toLowerCase().includes(searchValue),
    );

    if (!matchFound && searchValue !== "") {
      choices.setChoices(
        [{ value: "OTHER", label: "OTHER", selected: false }],
        "value",
        "label",
        true,
      );
    }
  });
});
function scrollToForm() {
  document.getElementById("topForm").scrollIntoView({
    behavior: "smooth",
  });
}
// const card = document.getElementById("videoFlip");
// const leftBtn = document.getElementById("flipLeft");
// const rightBtn = document.getElementById("flipRight");

// card.addEventListener("click", () => {
//   card.classList.toggle("flipped");
// });

// card.addEventListener("touchstart", () => {
//   card.classList.toggle("flipped");
// });
// rightBtn.onclick = () => card.classList.add("flipped");
// leftBtn.onclick = () => card.classList.remove("flipped");


// const videos = document.querySelectorAll(".flip-card video");

// videos.forEach((video) => {
//   video.addEventListener("click", (e) => {
//     e.stopPropagation(); //

//     video.requestFullscreen();
//     video.play();
//   });
// });


const card = document.getElementById("videoFlip");
const leftBtn = document.getElementById("flipLeft");
const rightBtn = document.getElementById("flipRight");

// Flip only with buttons
// rightBtn.onclick = () => card.classList.add("flipped");
// leftBtn.onclick = () => card.classList.remove("flipped");

rightBtn.onclick = () => {
  card.classList.toggle("flipped");
};

leftBtn.onclick = () => {
  card.classList.toggle("flipped");
};

// Video open logic
const videos = document.querySelectorAll(".flip-card video");

videos.forEach((video) => {
  video.addEventListener("click", function (e) {
    e.stopPropagation();

    if (this.requestFullscreen) {
      this.requestFullscreen();
    } else if (this.webkitRequestFullscreen) {
      // Safari
      this.webkitRequestFullscreen();
    }

    this.play();
  });
});

// const video = document.getElementById("videoFlip");

// video.addEventListener("click", (e) => {
//   e.stopPropagation(); // 🚀 prevents card flip
//   video.play(); // ▶️ plays video
// });
// video.addEventListener("click", (e) => {
//   e.stopPropagation();
//   video.requestFullscreen();
//   video.play();
// });


document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    document.querySelector(".review"),
    document.querySelector(".review2"),
    document.querySelector(".review3"),
  ];

  let i = 0;

  function rotateReviews() {
    reviews.forEach((r) => r.classList.remove("active"));
    reviews[i].classList.add("active");
    i = (i + 1) % reviews.length;
  }

  setInterval(rotateReviews, 3000);
});