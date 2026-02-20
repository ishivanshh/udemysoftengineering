function fetchUserData(){
     return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve ({name: "coffee", url :"www.google.com"})
        },3000);
     })
}

async function getUserData(){
    try{
        console.log("fetch user data...");
        const userData = await fetchUserData();
        console.log("user data: ", userData);
    } catch (error){
        console.log("error fetching data", error);
    }
}

// getUserData();

// example 2,

function UserPlayedBall(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve ("played the ball and gone for 6")
        }, 3000);
    })
}

function UserPlayedBall2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve ("bowler now bowled the batsman")
        }, 4000);
    });
}

async function getCricketUpdate(){
    try{
        console.log("Updating the result of 2 balls")
        const matchData = await UserPlayedBall();
        const matchUpdate = await UserPlayedBall2();
        console.log(matchData);
        console.log(matchUpdate);
    } catch(error){
        console.log("Unable to load cricket score");
    }
}
getCricketUpdate();