console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

const preMovie = async()=> {

const promiseWifeBringingTickets = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(`Ticket`)
    }, 3000)
});


const getPopcorn = new Promise((res, rej)=>{
        res(`Popcorn`)
})


const getButter = new Promise((res, rej)=>{
        res(`Butter`)
})


const getColdDrinks = new Promise((res, rej)=>{
        res(`ColdDrink`)
})


let ticket = await promiseWifeBringingTickets;

let [Popcorn, Butter, ColdDrink] = await Promise.all([getPopcorn, getButter, getColdDrinks]);

console.log(`${Popcorn}, ${Butter}, ${ColdDrink}`);

return ticket;

}

preMovie().then((msg)=>console.log(`Person 3: Shows ${msg}`));

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");