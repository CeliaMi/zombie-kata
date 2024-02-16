class Survival{
    constructor(name, injured = 0, alive = true){
        this.name = name;
        this.injured = injured
        if(injured === 2){
        this.alive = false;
        } else{
        this.alive = alive;
        }
    

}}

module.exports = Survival;