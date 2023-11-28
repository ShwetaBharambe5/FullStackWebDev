function buyCar(cb1, cb2, cb3){
    setTimeout(()=>{
        console.log("Purhased a Car");

        cb1(cb2, cb3);

    }, 3000)
}

function planaTrip(cb2, cb3){
    setTimeout(()=>{
        console.log("Planned a Trip to Manali");

        cb2(cb3);

    }, 1000)
}

function reachedManali(cb3){
    setTimeout(()=>{
        console.log("Reached to Manali");

        cb3();

    }, 2000)
}

function goToMountain(){
    setTimeout(()=>{
        console.log("Reached Mountain");

    },3000)
}

buyCar(planaTrip, reachedManali, goToMountain);