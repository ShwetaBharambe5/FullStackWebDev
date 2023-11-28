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

async function fun1(){
    const msg1 = await DSA();
    console.log(msg1);

    const msg2 = await WebDev();
    console.log(msg2);

    const msg3 = await Placement();
    console.log(msg3);
}

fun1();