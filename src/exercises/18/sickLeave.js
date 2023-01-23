const {Leave} = require('../16/exercise.js');


class SickLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Sick"
    }
}
