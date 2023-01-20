// Extend the Leave class, to create different classes for different Leave types.
import {Leave} from '~/src/exercises/16/exercise.js'

// console.log(new Leave(121, '2012-12-01', '2013-01-01'))

class SickLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Sick"
    }
}


class EarnedLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Earned Leave"
    }
}


class CasualLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Casual Leave"
    }
}


class MaternityLeave  extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Maternity Leave"
    }
}


class MarriageLeave extends Leave{
    constructor(type){
        super(Leave);
        this.type = "Marriage Leave"
    }
}
