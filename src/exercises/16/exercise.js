// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

export default class Leave {

  constructor(emp_id, start, end){
    this.emp_id=emp_id
    this.start=Date.parse(start)
    this.end=Date.parse(end)
  }

  getDetails(){
    return `${this.emp_id} ${this.start} ${this.end}`
  }

  NumberOfLeaveDays(){
    return (this.end - this.start)/(24*60*60*1000);
  }
  //...
}

// if(typeof require !== 'undefined' && require.main === module){
console.log(new Leave(121, '2012/11/01', '2012/12/05').NumberOfLeaveDays());
// }