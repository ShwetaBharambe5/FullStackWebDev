function buyCar(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Purhased a Car");
    
        }, 3000)
    })
    
}

function planedaTrip(){
    return new Promise((res, rej)=>{
        res("Planned a Trip to Manali");

    }, 1000)
}

function reachedManali(cb3){
    return new Promise((res, rej)=>{
        res("Reached to Manali");

    }, 2000)
}

function goToMountain(){
    return new Promise((res, rej)=>{
        res("Reached Mountain");

    },3000)
}

async function fun1(){
    const msg1 = await buyCar();
    console.log(msg1);

    const msg2 = await planedaTrip();
    console.log(msg2);

    const msg3 = await reachedManali();
    console.log(msg3);

    const msg4 = await goToMountain();
    console.log(msg4);
}

fun1();