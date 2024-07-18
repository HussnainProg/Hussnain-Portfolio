let hmsButton = document.querySelector("#HmsButton")
let firstbtn = document.querySelector("#firstbtn");

console.log(hmsButton);

hmsButton.addEventListener("click",(e)=>{
        document.body.style.backgroundColor = "black";
        document.body.style.opacity = 0.5;
        document.getElementById('myCarousel').style.display = "block";
        document.getElementById('myCarousel').style.opacity = 1;
        e.preventDefault();
        
})
firstbtn.addEventListener("click",(e)=>{
        
        document.getElementById('myCarousel').style.display = "none";
})


// Alert On Submit Button 

let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click",(e)=>{
        alert("This part remains to be done :)");
        // e.preventDefault();
})