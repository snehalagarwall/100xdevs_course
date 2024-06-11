function newyo(time){
    let p=new Promise(function(resolve){
        setTimeout(resolve,time)
    })
    return p;
}


newyo(2000).then(function(){
    console.log("helloo")
})

async  function lala(){
    await newyo(1000)
        console.log("hiiiii")
    
    
}

lala()