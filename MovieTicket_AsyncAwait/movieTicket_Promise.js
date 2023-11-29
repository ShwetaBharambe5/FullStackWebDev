console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

const promiseWifeBringingTickets = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(`Ticket`)
    }, 3000)
});

    console.log("Wife: I have the Tickets");
    console.log("Husband: We should go in");
    console.log("Wife: No, I am Hungry");

const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log("Husband: I got Some Popcorn");
    console.log("Husband: We should go in");
    console.log("Wife: I need Butter on Popcorn");

    return new Promise((res, rej)=>{
        res(`${t}, Popcorn`)
    })
});

const getButter = getPopcorn.then((t)=>{
    console.log("Husband: I got butter on Popcorn");
    console.log("Husband: We should go in");
    return new Promise((res, rej)=>{
        res(`${t}, Butter`)
    })
})

const getColdDrinks = getButter.then((t)=>{
    console.log("Wife: I want cold drink");
    console.log("Husband: I got cold drink");
    console.log("Husband: Lets go inside");

    return new Promise((res, rej)=>{
        res(`${t}, ColdDrink`)
    })
})

// getButter.then((t)=>console.log(t));

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");