const myFun = (arg) => {
    console.log(`an event occurred!!! with this argument ${JSON.stringify(arg)}, ${JSON.stringify(this)}`, this);
    
}

module.exports = myFun;