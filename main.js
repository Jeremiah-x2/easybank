window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 768) {
    document.getElementById("introImg").src = "./images/bg-intro-desktop.svg";
  } else {
    document.getElementById("introImg").src = "./images/bg-intro-mobile.svg";
  }
});

let icon = document.getElementById("hamburger");
let menu = document.getElementById("menu");
icon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")) {
    icon.src = "./images/icon-hamburger.svg";
  } else {
    icon.src = "./images/icon-close.svg";
  }
});

async function getReasons() {
  let response = await fetch("reasons.json");
  let data = response.json();
  console.log(data);
  return data;
}
async function getArticles() {
  let response = await fetch("articles.json");
  let data = response.json();
  return data;
}

async function showArticles() {
  let articles = await getArticles();
  articles.forEach((item) => {
    let { image, name, heading, p } = item;
    return (document.querySelector("#articles").innerHTML += `
      <div class="bg-white rounded-lg overflow-hidden h-[27rem]">
        <div class="h-1/2">
          <img src=${image} alt=${name} class="h-full w-full" />
        </div>
        <div class="px-6 pt-6 pb-10 flex flex-col gap-2">
          <p class="text-xs text-grayishBlue">${name}</p>
          <h3 class="text-xl text-dkBlue hover:text-limegreen hover:cursor-pointer font-normal">${heading}</h3>
          <p class="text-sm text-grayishBlue">${p}</p>
        </div>
      </div>
    `);
  });
}

async function displayReasons() {
  let reasons = await getReasons();
  reasons.forEach((element) => {
    let { image, head, desc } = element;
    return (document.querySelector("#reasons").innerHTML += `
        <div class="flex flex-col gap-6 items-center md:items-start md:text-start">
            <img src=${image} alt=${head} />
            <h3 class="text-dkBlue text-2xl">${head}</h3>
            <p class="pr-4 text-sm">${desc}</p>
        </div>
        `);
  });
}

displayReasons();
showArticles();
