let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let blur = document.getElementById("blur");
let sepia = document.getElementById("sepia");
let saturated = document.getElementById("saturated");
let grayscale = document.getElementById("grayscale");
let hueRotate = document.getElementById("hue-rotate");

let download = document.getElementById("download");
let upload = document.getElementById("upload");
let canvas=document.getElementById("canvas")
let ctx=canvas.getContext('2d')
let reset = document.querySelector("span");
let box = document.querySelector(".box");
function resetAll() {
    ctx.filter="none"
    grayscale.value="0"
    saturated.value="100"
    hueRotate.value="0"
    sepia.value="0"
    brightness.value="100"
    blur.value="0"
    contrast.value="100"
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
}


window.onload = function () {
  download.style.display = "none";
  box.style.display = "none";
  reset.style.display = "none";
};
upload.onchange = function () {
    resetAll()
  download.style.display = "block";
  box.style.display = "block";
  reset.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload=function () {
    canvas.width=img.width
    canvas.height=img.height
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    img.style.display="none"
  }
};
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
   ctx.filter = `
         saturate(${saturated.value}%)
         contrast(${contrast.value}%)
          sepia(${sepia.value}%)
          brightness(${brightness.value}%)
          grayscale(${grayscale.value})
          blur(${blur.value}px)
          hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
  })
})
download.onclick=function () {
    download.href=canvas.toDataURL()
}
