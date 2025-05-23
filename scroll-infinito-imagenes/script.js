const track = document.getElementById("scroll-track");
const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

for(let i = 0; i < 2; i++){
  images.forEach((imgName)=>{
    const img = document.createElement("img");
    img.src = `imagenes/${imgName}`;
    img.alt = `Imagen ${imgName}`;
    track.appendChild(img);
  });
}
