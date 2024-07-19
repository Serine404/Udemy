document.addEventListener("DOMContentLoaded", function () {
   
    const numberInput = document.getElementById("numberInput");
    const checkBtn = document.getElementById("checkBtn");
    const resultMsg = document.getElementById("resultMsg");
    
    checkBtn.addEventListener("click", function(){
       
        const number = parseInt(numberInput.value);

        if (isNaN(number)) {
            resultMsg.textContent = "Please enter a valid number.";
            resultMsg.style.color = "red";
            return;
        }

        if (isPrime(number)){
            resultMsg.textContent = `${number} is a Prime number`;
            resultMsg.style.color = "green";
        } else {
            resultMsg.textContent = `${number} is not a Prime number`;
            resultMsg.style.color = "green";
        }
    });

    function isPrime(num) {
        //--------------------first methode :--------------------------------- (mienne = erronée)
        // if (num <= 1) return false;
        // if (num <= 3) return true;
        // if (num = (2 | 3 | 5 | 7 | 11 | 13)) return true;
        // if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0 || num % 13 === 0) return false;
        // return true;


        // --------------------second methode :---------------------------------(autres = juste)
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;

    }


});