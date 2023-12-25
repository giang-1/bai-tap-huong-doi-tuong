class Temprerature{
    constructor(doC){
        this.doC = doC
    }
    getDoC = function(){
        return this.doC
    }
    setDoC = function(doC){
         this.doC = doC
    }
    getDoF = function(){
        return (this.doC*(9/5) + 32)
    }
    getDoK = function(){
        return (this.doC + 273.15)
    }
}
let doc = new Temprerature()
doc.setDoC(25)
console.log(doc.getDoF())
console.log(doc.getDoK())