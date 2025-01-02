

// sbse pehle dekhte hai readline method , iska kaam hai input lena from terminal and show output to terminal

//  ye ek object return  krega , uske upr hum next operation perform kr skte hai 


const readline = require ('readline'); // idhr hum readline fucntion ko import kr re

// abb  object  bnayenge rl name ka kyuki readline.createInterface return krega usko store krna hoga
// readline.createInterface 2 argument leta hai 
//process.input; input lene ke liye terminal se 
//process.output; output  dene ke liye terminal  ko

//interface keh skte ek container sa hai for taking value and display


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


// abb hum object pr quwstion fucntion call krenge jo actual mei display hoga useer ko 

// question() ke andr 2 argument hote hai , ek text hogya jo promt hoga ,, 2nd uska response mei action 

// rl.close()  ka use krenge taaki ye detacheed mode mei chle like response dekr terminal vapis aagaya

rl.question("Hey please enter Your name buddy : "  , (name)=>{
    console.log(`Nice to See you ${name}  🙏`)
    rl.close();
}
)
// close event perform hone ke baad agr message show krna hua toh
rl.on('close',()=>{
    console.log("Interface closed");
    process.exit(0);
})