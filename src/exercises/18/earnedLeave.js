const {Leave} = require('../16/exercise.js');


class EarnedLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Sick"
    }
}
