const {Leave} = require('../16/exercise.js');


class MaternityLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Sick"
    }
}
