const saveBtn = document.getElementById("save");
const btn = document.getElementById("btn");

function handleSubmit(event){
    const ctx = document.getElementById('canvas').getContext('2d');
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    ctx.font = "25px serif";
    ctx.fillText(name, 150, 25);
    ctx.font = "15px serif";
    ctx.fillText(job, 150, 40);
    ctx.fillText(address, 150, 100);
    ctx.fillText(phoneNumber, 150, 120);
    ctx.fillText(email, 150, 140);
    
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
if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}

// const rand = document.getElementById('canvas').getContext('2d');
// rand.font = "20px serif";
// rand.strokeText("SONGHA", 50 , 50);
