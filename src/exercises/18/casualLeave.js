const {Leave} = require('../16/exercise.js');


class CasualLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Sick"
    }
}
