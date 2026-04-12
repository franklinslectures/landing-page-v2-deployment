document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#department");

  const choices = new Choices(element, {
    searchEnabled: true,
    itemSelectText: "",
    shouldSort: true,
  });

  // Save all options including OTHER
  const originalChoices = Array.from(element.options).map((option) => ({
    value: option.value,
    label: option.text,
  }));

  // Separate OTHER from the real options
  const otherChoice = originalChoices.find((o) => o.value === "OTHER");
  const normalChoices = originalChoices.filter((o) => o.value !== "OTHER");

  element.addEventListener("showDropdown", function () {
    const selectedValue = choices.getValue(true); // gets current selected value

    const availableChoices = originalChoices.filter(
      (o) => o.value !== selectedValue,
    );

    // choices.setChoices(availableChoices, "value", "label", true);
  });
  element.addEventListener("search", function (e) {
    const searchValue = e.detail.value.toLowerCase();

    if (searchValue === "") {
      choices.setChoices(originalChoices, "value", "label", true);
      return;
    }

    const filtered = normalChoices.filter((option) =>
      option.label.toLowerCase().includes(searchValue),
    );

    if (filtered.length === 0) {
      // No match — show the OTHER option from your select tag
      choices.setChoices([otherChoice], "value", "label", true);
    } else {
      // Show matched options only
      choices.setChoices(filtered, "value", "label", true);
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

  // Save all options including OTHER
  const originalChoices = Array.from(element.options).map((option) => ({
    value: option.value,
    label: option.text,
  }));

  // Separate OTHER from the real options
  const otherChoice = originalChoices.find((o) => o.value === "OTHER");
  const normalChoices = originalChoices.filter((o) => o.value !== "OTHER");

  element.addEventListener("showDropdown", function () {
    const selectedValue = choices.getValue(true); // gets current selected value

    const availableChoices = originalChoices.filter(
      (o) => o.value !== selectedValue,
    );

    // choices.setChoices(availableChoices, "value", "label", true);
  });
  element.addEventListener("search", function (e) {
    const searchValue = e.detail.value.toLowerCase();

    if (searchValue === "") {
      choices.setChoices(originalChoices, "value", "label", true);
      return;
    }

    const filtered = normalChoices.filter((option) =>
      option.label.toLowerCase().includes(searchValue),
    );

    if (filtered.length === 0) {
      // No match — show the OTHER option from your select tag
      choices.setChoices([otherChoice], "value", "label", true);
    } else {
      // Show matched options only
      choices.setChoices(filtered, "value", "label", true);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#college");

  const choices = new Choices(element, {
    searchEnabled: true,
    itemSelectText: "",
    shouldSort: true,
  });

  // Save all options including OTHER
  const originalChoices = Array.from(element.options).map((option) => ({
    value: option.value,
    label: option.text,
  }));

  // Separate OTHER from the real options
  const otherChoice = originalChoices.find((o) => o.value === "OTHER");
  const normalChoices = originalChoices.filter((o) => o.value !== "OTHER");

  element.addEventListener("showDropdown", function () {
    const selectedValue = choices.getValue(true); // gets current selected value

    const availableChoices = originalChoices.filter(
      (o) => o.value !== selectedValue,
    );

    // choices.setChoices(availableChoices, "value", "label", true);
  });
  element.addEventListener("search", function (e) {
    const searchValue = e.detail.value.toLowerCase();

    if (searchValue === "") {
      choices.setChoices(originalChoices, "value", "label", true);
      return;
    }

    const filtered = normalChoices.filter((option) =>
      option.label.toLowerCase().includes(searchValue),
    );

    if (filtered.length === 0) {
      // No match — show the OTHER option from your select tag
      choices.setChoices([otherChoice], "value", "label", true);
    } else {
      // Show matched options only
      choices.setChoices(filtered, "value", "label", true);
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

// Flip only with buttons
// rightBtn.onclick = () => card.classList.add("flipped");
// leftBtn.onclick = () => card.classList.remove("flipped");

const card = document.getElementById("videoFlip");
const leftBtn = document.getElementById("flipLeft");
const rightBtn = document.getElementById("flipRight");
const videos = document.querySelectorAll(".flip-face video");

let current = 0;
const angles = [0, -120, -240]; // rotation angles for each face

// Play only first video initially
videos[0].play();
videos[1].pause();
videos[2].pause();

function updateCard() {
  // Rotate card to show current face
  card.style.transform = `rotateY(${angles[current]}deg)`;

  // Play only the current video, pause others
  videos.forEach((v, i) => {
    if (i === current) {
      v.play();
    } else {
      v.pause();
    }
  });
}

rightBtn.onclick = () => {
  current = (current + 1) % 3;
  updateCard();
};

leftBtn.onclick = () => {
  current = (current - 1 + 3) % 3;
  updateCard();
};

// Click to fullscreen with sound
videos.forEach((video) => {
  video.addEventListener("click", function (e) {
    e.stopPropagation();
    video.muted = false;
    video.play();

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      video.muted = true;
      video.play();
    }
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


document.getElementById("source").value = window.location.href;
