const {Leave} = require('../16/exercise.js');


class MarriageLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Sick"
    }
}
