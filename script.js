const btn = document.querySelector(".btn");
const gallery = document.querySelector(".gallery");
//функция для загрузки изображений
const getNewPicture = async () => {
  const num = Math.floor(Math.random() * 5);
  const response = await fetch("https://dog.ceo/api/breeds/image/random/29");
  const data = await response.json();
  const url = data.message[num];
  const pic = `
    <div class="gallery-item">
      <img src="${url}">
    </div>
  `;
  gallery.insertAdjacentHTML("beforeend", pic);
};

btn.addEventListener("click", getNewPicture);

//функция для лоадера
function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
hideLoader();
function promiseHandler() {
  let randomNum = Math.random();
  return new Promise((resolve, reject) =>
    setTimeout(function () {
      if (randomNum > 0.5) {
        reject("Неудача");
      } else {
        resolve("Успех!");
      }
    }, 500)
  );
}

document.querySelector(".btn").addEventListener("click", async () => {
  try {
    showLoader();
    const result = await promiseHandler();
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
});