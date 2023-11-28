//Promise Hell:-

function DSA(){

    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Prepered for Coding Round by studing DSA");
        }, 1000)
    })

}


function WebDev(){

    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Prepared for Technical Interview by studying WebDev");
        }, 2000)
    })

}

function Placement(){

        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res("Prepared for Placement");
            }, 3000)
        })
  
}

DSA().then((msg)=>{
    console.log(msg);

    WebDev().then((msg)=>{
        console.log(msg);

        Placement().then((msg)=>{
            console.log(msg);

        })
    })

})