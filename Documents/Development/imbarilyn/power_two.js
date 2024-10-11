function powerTwo(a){
    let ln = Math.log(a) / Math.log(2)
    if(Number.isInteger(ln)){
        return true
    }
    else{
        return false
    }
}

console.log(powerTwo(8))
console.log(powerTwo(6))