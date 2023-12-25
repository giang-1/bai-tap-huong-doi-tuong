class Rectangle {
    constructor(dai,rong){
        this.dai = dai;
        this.rong = rong;
    }
    getdai = function(){
        return this.dai;
    }
    getrong = function(){
        return this.rong
    }
    setdai = function(dai){
        this.dai = dai;
    }
    setrong = function(rong){
        this.rong = rong;
    }
    getArea = function(){
        return (this.dai * this.rong)
    }
    getChuVi = function(){
        return (this.dai + this.rong) * 2
    }
}
let chuNhat = new Rectangle()
chuNhat.setdai(16)
chuNhat.setrong(6)
console.log(chuNhat.getArea())
console.log(chuNhat.getChuVi())