// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.
class Leave {

  constructor(emp_id, start, end){
    this.emp_id=emp_id
    this.start=Date.parse(start)
    this.end=Date.parse(end)
  }

  getDetails = () => { 
    let start = new Date(this.start).toDateString();
    let end = new Date(this.end).toDateString();
    let pad = '||'.padStart(10, ' ');
    return `Employee ID${pad}${this.emp_id}\nLeave Start Date${pad.slice(-5)}${start}\nLeave End Date${pad.slice(-7)}${end}`;}

  nLeaveDays = () => { return `${(this.end - this.start)/(24*60*60*1000)} days`; }

  updateDates = (start, end) => {  
    this.start = (start) ? this.start=Date.parse(start) : this.start;
    this.end = (end) ? this.end=Date.parse(end) : this.end;
  }

}

if(typeof require !== 'undefined' && require.main === module){
  let L = new Leave(121, '2012/11/01', '2012/12/05');
  // console.log(new Leave(121, '2012/11/01', '2012/12/05').nLeaveDays());
  L.updateDates('2012/12/02');
  console.log(L.getDetails());
}


module.exports = {Leave}