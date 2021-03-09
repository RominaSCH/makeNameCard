const saveBtn = document.getElementById("save");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function handleSubmit(event){
    const ctx = document.getElementById('canvas').getContext('2d');
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.clearRect(0,0,360,200)
    ctx.font = "25px serif";
    ctx.fillText(name, 130, 30);
    ctx.font = "12px serif";
    ctx.fillText(job, 130, 48);
    ctx.fillText(address, 130, 110);
    ctx.fillText(phoneNumber, 130, 125);
    ctx.fillText(email, 130, 140);
}

function handleSubmit2(event){
    const ctx = document.getElementById('canvas').getContext('2d');
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.clearRect(0,0,360,200)
    ctx.font = "25px serif";
    ctx.fillText(name, 60, 35);
    ctx.font = "12px serif";
    ctx.fillText(job, 20, 35);
    ctx.fillText(address, 140, 110);
    ctx.fillText(phoneNumber, 140, 125);
    ctx.fillText(email, 140, 140);
}

function handleSubmit3(event){
    const ctx = document.getElementById('canvas').getContext('2d');
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.clearRect(0,0,360,200)
    ctx.font = "25px serif";
    ctx.fillText(name, 60, 35);
    ctx.font = "12px serif";
    ctx.fillText(job, 20, 35);
    ctx.fillText(address, 20, 110);
    ctx.fillText(phoneNumber, 20, 125);
    ctx.fillText(email, 20, 140);
}

function handleSaveClick(event){
    const name = document.getElementById("name").value;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `${name}card`;
    link.click();
}

btn.addEventListener("click", handleSubmit);
btn2.addEventListener("click", handleSubmit2);
btn3.addEventListener("click", handleSubmit3);
if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
