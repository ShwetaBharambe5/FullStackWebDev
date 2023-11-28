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

buyCar().then((msg1)=>{
    console.log(msg1);

    planedaTrip().then((msg2)=>{
        console.log(msg2);

        reachedManali().then((msg3)=>{
            console.log(msg3);

            goToMountain().then((msg4)=>{
                console.log(msg4);
            })
        })
    })

})