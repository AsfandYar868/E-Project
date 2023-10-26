let ceiling_fan = [
    // ceiling-fan
    {
    
        "name": "Pyramid™",
        "img": "ceiling-fan-images/pyrm.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "Spitfire DC 64",
        "img": "ceiling-fan-images/spit-dc-64.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "Spitfire DC 72",
        "img": "ceiling-fan-images/dc72.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr "

    },
    {
    
        "name": "Spitfire DC 96",
        "img": "ceiling-fan-images/dc-96.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "TriAire™ Custom 44″",
        "img": "ceiling-fan-images/custom-44.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "wrap-48",
        "img": "ceiling-fan-images/wrap48.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "odyn",
        "img": "ceiling-fan-images/odyn-cus.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "radius-52″",
        "img": "ceiling-fan-images/radius1.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },

]
let ceiling_fan_container = document.querySelector(".ceilingFan_container")
for (let index = 0; index < ceiling_fan.length; index++) {
    ceiling_fan_container.innerHTML += `
    <div class="col">
    <div class="card" style="width: 15rem;" onclick='handleClick(${index},"ceiling_fan")'>

      <img src=${ceiling_fan[index].img} style="height: 15rem; ">
      <div class="card-body text-center">
        <h5 class="card-title">${ceiling_fan[index].name}</h5>
        <p class="card-text">${ceiling_fan[index].price}</p>

      </div>
    </div>
  </div>
    `
}


// pop up

let preveiwContainer1= document.querySelector(".products-preview")

// wall fan

let wall_fan = [
    {
        
        "name": "Kichler Pola-18",
        "img": "wall-fan-images/kichler-18.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "Orient 18",
        "img": "wall-fan-images/quorum.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "royal bracket fan",
        "img": "wall-fan-images/minka.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
     
    {
        
        "name": "breeze wall 41",
        "img": "wall-fan-images/breez.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "oscillating mm",
        "img": "wall-fan-images/amazon.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "enlil+13",
        "img": "wall-fan-images/lgena.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {   
        "name": "misting",
        "img": "wall-fan-images/chic.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },

]

let wallfan_container = document.querySelector(".wallFan_container")
for (let index = 0; index < wall_fan.length; index++) {
    wallfan_container.innerHTML += `
    <div class="col">
    <div class="card" style="width: 15rem;" onclick='handleClick(${index},"wall_fan")' >

      <img src=${wall_fan[index].img} alt="">
      <div class="card-body text-center">
        <h5 class="card-title">${wall_fan[index].name}</h5>
        <p class="card-text">${wall_fan[index].price}</p>

      </div>
    </div>
  </div>
    `
}


// pop up

let preveiwContainer2 = document.querySelector(".products-preview")

function handleClick(id, arrName){
   if (arrName=="wall_fan") {
    var product_details = wall_fan.slice(id, id + 1);
    
   }
   else if(arrName == "ceiling_fan"){
    var product_details = ceiling_fan.slice(id, id + 1);

   }
   else{
    console.log("ghb")
   }
    preveiwContainer2.style.display = 'flex';
    preveiwContainer2.innerHTML = `
   <div class="preview active" data-target="p-1">
                  <i class="fas fa-times" onclick='handleClose()'></i>
                  <img src=${product_details[0].img} alt="">
                  <h3>${product_details[0].name}</h3>
                  
                  <p>${product_details[0].details}</p>
                  <div class="price">${product_details[0].price}</div>
                  <div class="buttons">
                      <a href="#" class="buy">buy now</a>

                  </div>
              </div>
   `

}
function handleClose() {
    let previewBox = document.querySelector(".preview")

    preveiwContainer2.style.display = 'none';
    previewBox.classList.remove("active");

}



// padestal fan

let padestal_fan = [
    {
        
        "name": "arden",
        "img": "padestal-fan/arden.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "deco breez",
        "img": "padestal-fan/85124-2-2.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "arden",
        "img": "padestal-fan/ebony.jpeg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "arden",
        "img": "padestal-fan/lumena.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "arden",
        "img": "padestal-fan/turur.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
       
        "name": "arden",
        "img": "padestal-fan/turur1.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
       
        "name": "arden",
        "img": "padestal-fan/black-and-decker-fan96-648cad94ba0af.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
       
        "name": "arden",
        "img": "padestal-fan/misting-fan.webp",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },

]


let padestalfan_container = document.querySelector(".padestalFan_container")
for (let index = 0; index < padestal_fan.length; index++) {
    padestalfan_container.innerHTML += `
    <div class="col">
    <div class="card" style="width: 15rem;">

      <img src=${padestal_fan[index].img} style="height: 14rem;">
      <div class="card-body text-center">
        <h5 class="card-title">${padestal_fan[index].name}</h5>
        <p class="card-text">${padestal_fan[index].price}</p>

      </div>
    </div>
  </div>
    `
}


let exhaust_fan = [
    {
  
        "name": "medaal",
        "img": "exhaust-fan/meedal.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "havo",
        "img": "exhaust-fan/havoc.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "noimse",
        "img": "exhaust-fan/noise-f.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "revon",
        "img": "exhaust-fan/revoc.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "vornado",
        "img": "exhaust-fan/vornado.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "mm round",
        "img": "exhaust-fan/mm-round.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "pastor",
        "img": "exhaust-fan/pastor-1.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "sanayi",
        "img": "exhaust-fan/sanayi.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
]

let exhaustfan_container = document.querySelector(".exhaustFan_container")
for (let index = 0; index < exhaust_fan.length; index++) {
    exhaustfan_container.innerHTML += `
    <div class="col">
    <div class="card" style="width: 15rem;">

      <img src=${exhaust_fan[index].img} alt="">
      <div class="card-body text-center">
        <h5 class="card-title">${exhaust_fan[index].name}</h5>
        <p class="card-text">${exhaust_fan[index].price}</p>

      </div>
    </div>
  </div>
    `
}


// gallery

let gallery_fan=[
    {
    
        "name": "Pyramid™",
        "img": "ceiling-fan-images/pyrm.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "Spitfire DC 64",
        "img": "ceiling-fan-images/spit-dc-64.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
    
        "name": "Spitfire DC 72",
        "img": "ceiling-fan-images/dc72.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr "

    },
    {
    
        "name": "Spitfire DC 96",
        "img": "ceiling-fan-images/dc-96.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "Kichler Pola-18",
        "img": "wall-fan-images/kichler-18.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "Orient 18",
        "img": "wall-fan-images/quorum.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "royal bracket fan",
        "img": "wall-fan-images/minka.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
     
    {
        
        "name": "breeze wall 41",
        "img": "wall-fan-images/breez.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "arden",
        "img": "padestal-fan/arden.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "deco breez",
        "img": "padestal-fan/85124-2-2.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "arden",
        "img": "padestal-fan/ebony.jpeg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "arden",
        "img": "padestal-fan/lumena.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "vornado",
        "img": "exhaust-fan/vornado.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "mm round",
        "img": "exhaust-fan/mm-round.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "pastor",
        "img": "exhaust-fan/pastor-1.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
    {
        
        "name": "sanayi",
        "img": "exhaust-fan/sanayi.jpg",
        "price": "$ 100",
        "details": "zcsd fsdfbsd sdfsdf fsdf adwf mwelfj srnfjkwe rnwejknr wn",
    },
]


let galleryfan_container = document.querySelector(".galleryfan_container")
for (let index = 0; index < gallery_fan.length; index++) {
    exhaustfan_container.innerHTML += `
    <div class="col">
    <div class="card" style="width: 15rem;">

      <img src=${gallery_fan[index].img} alt="">
      <div class="card-body text-center">
        <h5 class="card-title">${gallery_fan[index].name}</h5>
        <p class="card-text">${gallery_fan[index].price}</p>

      </div>
    </div>
  </div>
    `
}




// ticker-container


function updateTicker() {
    const tickerElement = document.getElementById('ticker');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Use geolocation to get the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Create a string with the location data
        const locationString = `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`;

        // Update the ticker content with date, time, and location
        tickerElement.textContent = `${formattedDate} ${formattedTime} | ${locationString}`;
    });
}

// Call the updateTicker function to start updating the ticker
// updateTicker();

// Update the ticker content every minute
// setInterval(updateTicker, 60000);





// counter_container


let getCountElement = document.getElementById("counter")
window.onload = updateCounter
function updateCounter() {
    // let counter = document.getElementById("count")

    if (localStorage.getItem("counter") != null) {
        let getCount = Number(localStorage.getItem("counter"))
        getCount = getCount + 1;
        getCountElement.innerHTML = getCount;
        localStorage.setItem("counter", getCount)
        console.log(getCount)
    }
    else {
        localStorage.setItem("counter", 0)
        console.log(counter)
    }
}


const faqs = document.querySelectorAll(".Question_container");

faqs.forEach(faq => {
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
});



function validateForm() {
    let isValid = true;
  
    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
    // Validate name
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
    }
  
    // Validate email
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      document.getElementById('emailError').textContent = 'Invalid email address';
      isValid = false;
    }
  
    // Validate message
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      isValid = false;
    }
  
    return isValid;
  }