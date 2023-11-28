//Callback Hell:-

function DSA(cb1, cb2){

	setTimeout(()=>{

		console.log("Prepered for Coding Round by studing DSA");

		cb1(cb2);

	}, 1000);	

}


function WebDev(cb2){

	setTimeout(()=>{

        console.log("Prepared for Technical Interview by studying WebDev");

        cb2();

    }, 2000);	

}

function Placement(){

    setTimeout(()=>{

        console.log("Prepared for Placement");

    }, 3000)   
}


DSA(WebDev, Placement);