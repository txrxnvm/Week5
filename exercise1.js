function printContact(contact){ 
    console.log(`
${contact.name}
${contact.address}
${contact.city}, ${contact.state} ${contact.zip}
`);
} 

function printContact2(contact){ 
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state} ${contact.zip}`);
}

function printContact3(contact){ 
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zip);
}



let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
};

printContact(myInfo)
printContact2(myInfo)
printContact3(myInfo)