let sendBtn = document.getElementById('send');
let message = document.getElementById('message');
let character1 = document.getElementById('character1');
let character2 = document.getElementById('character2');
let package1 = document.getElementById('package1');
let package2 = document.getElementById('package2');
let hand1 = document.getElementById('hand1');
let hand2 = document.getElementById('hand2');

let state = false;

const animate = () => {
    if(!state){
        state = true;
        //both characters comes in
        message.classList.add("slide-down"); 
        character1.classList.add("slide-right1");
        character2.classList.add("slide-left");    
        //package is delivered     
        setTimeout(() => {
                package1.style.visibility = "hidden"
                package2.style.visibility = "visible"
        }, 2550);            

        //character1 leaves
        setTimeout(() => {
            character1.style.transform = "scaleX(-1)";
            character1.classList.add("slide-left1");
            //character1.classList.remove("slide-right1");
        }, 2700);

        //character2 leaves
        setTimeout(() => {
            character2.style.transform = "scaleX(1)";
            character2.classList.add("slide-right");
        }, 3000);
        
        setTimeout(() => {
            package2.style.visibility = "hidden";
        },4000);

        //show "sent" message
        setTimeout(() => {
            message.innerText = "SENT";
            message.classList.add("slide-up");
        },4200);
    }
}

//send button is clicked
sendBtn.addEventListener('click', animate);