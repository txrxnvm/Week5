console.log("START")

function getStatus(){
    age = 15
    LIMIT = 16

    if(age < LIMIT){
        output = "May NOT Drive";
    }else{
        output = "May Drive"
    }
    return output;
}

console.log(getStatus()) 
console.log(getStatus()) 



numbers = [11, 22, 33] // 
characters = ["A", "B", "C"] 

function display(element){
    console.log(element);
}

// data.forEach(element => {
//     console.log(element)
// });
numbers.forEach(display)
characters.forEach(display)

count = 10 

while(count > 0){ 
    console.log(count);
    count--; 
} 


console.log("BLAST OFF!!!")



sentance = "Now is the time, for all good people, to come to the aid, of their planet.";
letter = ""
index = 0
while(letter != ","){
    letter = sentance[index]
    console.log(letter)
    index++;
}

word = "HAPPY"
for(i=0; i < word.length; i++ ){ //THIS IS THE WAY
    letter = word[i]
    console.log(letter);
}

console.log("FINISH")