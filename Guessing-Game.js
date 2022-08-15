class Colour{
    constructor(){
        let colText = document.querySelector(".colTextDisplay");

        //To generate a random number between 0 to 255
        function generateRandomColNumber(max){
            return Math.floor(Math.random() * max) + 1;
        }

        let val1 = generateRandomColNumber(255);
        let val2 = generateRandomColNumber(255);
        let val3 = generateRandomColNumber(255);

        //To display the random number
        colText.innerHTML = `<h1>
            RGB(${val1}, ${val2}, ${val3})
        </h1>`

        this.mainCol = `rgb(${val1}, ${val2}, ${val3})`;
    }

    //method to call up new colours
    newCol(){
        const colList = document.querySelector(".colBoxDisplay");
        const colBox = document.querySelectorAll(".colBox");
        const retakeButton = document.querySelector(".retake");

        retakeButton.innerHTML = `<h1>

        </h1>`;

        //To generate a random number between 1 and 5
        function generateRandomColNumber(min){
            return Math.floor(Math.random() * min) + 1;
        }

        let theCol = generateRandomColNumber(5);

        for(let i = 0; i < 6; i++){
            colBox[theCol].style.backgroundColor = this.mainCol;

            if(i != theCol){
                let otherVal1 = generateRandomColNumber(255);
                let otherVal2 = generateRandomColNumber(255);
                let otherVal3 = generateRandomColNumber(255);
                colBox[i].style.backgroundColor = `RGB(${otherVal1}, ${otherVal2}, ${otherVal3})`;
            }
        }//end of for loop
    }


    vaild(activeBox, total){
        const retakeButton = document.querySelector(".retake");
        let num = 3 - total;

        let livesText = document.querySelector(".lives");

        if (activeBox.style.backgroundColor == this.mainCol){
            livesText.innerHTML = `<h1>
                ${3 - total } LIVES LEFT!
            </h1>`;
        }
        else{
            livesText.innerHTML = `<h1>
                ${num} LIVES LEFT!
            </h1>`;
        }
        


        //if the colour clicked matches the color in the constructor -> that I will make, duh, then:
        if(activeBox.style.backgroundColor == this.mainCol){
            let headerCol = document.querySelector(".intro");
            const colBox = document.querySelectorAll(".colBox");


            headerCol.style.backgroundColor = this.mainCol;
            for(let i= 0; i < 6; i++){
                colBox[i].style.backgroundColor = this.mainCol;
            }
            console.log("It is correct");
    
            // retakeButton.style.background = `inline-block`;
            retakeButton.innerHTML = `<h1>
                CORRECT!
            </h1>`;
            return true;
        }
        else{
            activeBox.style.backgroundColor = `rgb(248, 248, 255)`;
            retakeButton.innerHTML = `<h1>
                TRY AGAIN!
            </h1>`;
            return false;
        }
    }

}



const initnewCol = new Colour();
initnewCol.newCol();


let buttonnewColour = document.querySelector(".newColor");
buttonnewColour.addEventListener('click', function(event){
    location.reload(); //makes the whole page reload.
})


const colBox = document.querySelectorAll(".colBox");
let sum = 0;

//if any of the colour boxes are clicked.
for(let i = 0; i <6; i++){
    colBox[i].addEventListener('click', function(event){
        sum++
        if(sum <=3){
            let con = initnewCol.vaild(colBox[i], sum);
        }
        
    })
    
}//end of for loop





