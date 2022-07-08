const colorInput = document.getElementById("color-input")
const modeInput = document.getElementById("mode-input")
const colorList = document.getElementsByClassName("color")
const hexList = document.getElementsByClassName("colorhex")

document.getElementById("btn").addEventListener("click",function(){
    requestData(colorInput.value.slice(1),modeInput.value)
})

function requestData(colorInput,modeInput){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${modeInput.toLowerCase()}&count=5`,{
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        }
    } 
    ).then(res => res.json()).then(data =>{
        for(let i = 0;i<5;i++){
            let newHex =data.colors[i].hex.value
            updateColor(newHex,colorList[i],hexList[i])
        }
        }
    )
    
}

function updateColor(colorHex,t1,t2){
    t1.style.backgroundColor = colorHex;
    t2.textContent = colorHex;
}


