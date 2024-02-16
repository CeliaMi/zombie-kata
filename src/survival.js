class Survival{
    constructor(name, injured = 0, alive = true, actions = 3){
        this.name = name;
        this.injured = injured
        if(injured === 2){
        this.alive = false;
        } else{
        this.alive = alive;
        }
        this.actions = actions;
        

}}

module.exports = Survival;