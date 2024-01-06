document.querySelector(".bg").addEventListener("mousemove",(det)=>{
    console.log(det.x);
    document.querySelector(".crsrone").style.left = `${det.x}px`;
    document.querySelector(".crsrone").style.top =`${det.y}px`;
})