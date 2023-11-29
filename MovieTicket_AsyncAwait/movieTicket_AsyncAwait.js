console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

async function preMovie() {
  const promiseWifeBringingTickets = new Promise((res, rej) => {
    setTimeout(() => {
      res(`Ticket`);
    }, 3000);
  });

  const getPopcorn = new Promise((res, rej) => {
    res('Popcorn');
  });

  const addButter = new Promise((res, rej) => res('Butter'));

  const addColdDrink = new Promise((res, rej) => res('ColdDrink'));

  let ticket = await promiseWifeBringingTickets;

  console.log(`Wife: I have the ${ticket}`);
  console.log("Husband: We should go in");
  console.log("Wife: No, I am Hungry");

  const popcorn = await getPopcorn;
  console.log(`Husband: I got Some ${popcorn}`);
  console.log("Husband: We should go in");
  console.log("Wife: I need Butter on Popcorn");

  let butter = await addButter;
  console.log(`Husband: I got some ${butter} on popcorn`);
  console.log("Husband: Anything else darling?");
  console.log("Wife: I want a Cold Drink")
  
  let ColdDrink = await addColdDrink;
  console.log(`Husband: I got ${ColdDrink}`);
  console.log("Wife: Let's go, we are getting late");
  console.log("Husband: Thank You for the reminder *grins*");

  return ticket;
};


  preMovie();
  console.log(`Person 3 shows Ticket`);

