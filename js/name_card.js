const saveBtn = document.querySelector(".saveBtn");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const ctx = document.getElementById('canvas').getContext('2d');
// const imageLoader = document.getElementById('imageLoader');

canvas.width = 600;
canvas.height = 340;

// function handleImage(e){
//     const reader = new FileReader();
//     reader.onload = function(event){
//         const img = new Image();
//         img.onload = function(){
//             img.width = 80;
//             img.height = 80;
//             ctx.globalAlpha = 0.5;
//             ctx.drawImage(img, 170, 80, 270, 180);
//         }
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(e.target.files[0]);     
// }

function handleSubmit(event){
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.clearRect(0,0,600,340)
    ctx.font = "50px serif";
    ctx.fillText(name, 280, 70);
    ctx.font = "20px sans-serif";
    ctx.fillText(job, 280, 100);
    ctx.fillText(address, 280, 255);
    ctx.fillText(phoneNumber, 280, 285);
    ctx.fillText(email, 280, 315);
}

function handleSubmit2(event){
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.clearRect(0,0,600,340)
    ctx.font = "50px serif";
    ctx.fillText(name, 130, 70);
    ctx.font = "20px sans-serif";
    ctx.fillText(job, 35, 70);
    ctx.fillText(address, 280, 255);
    ctx.fillText(phoneNumber, 280, 285);
    ctx.fillText(email, 280, 315);
}

function handleSubmit3(event){
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.clearRect(0,0,600,340)
    ctx.font = "50px serif";
    ctx.fillText(name, 130, 70);
    ctx.font = "20px sans-serif";
    ctx.fillText(job, 35, 70);
    ctx.fillText(address, 40, 255);
    ctx.fillText(phoneNumber, 40, 285);
    ctx.fillText(email, 40, 315);
}

function handleSaveClick(){
    const name = document.getElementById("name").value;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    number = Math.floor(Math.random()*1000);
    link.download = `${name}card${number}`;
    link.click();
}

btn.addEventListener("click", handleSubmit);
btn2.addEventListener("click", handleSubmit2);
btn3.addEventListener("click", handleSubmit3);
// imageLoader.addEventListener('change', handleImage, false);

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
