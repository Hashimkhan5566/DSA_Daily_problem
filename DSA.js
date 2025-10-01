let string = "hoome";
let reversed = "";
for(let i=string.length-1; i>=0; i--){
    reversed+=string[i];
    if(reversed===string){
        console.log("this is palindrome");

    }
    else{
        console.log("this is not palindrome", reversed);;
    }
}
console.log("this is reverse", string);