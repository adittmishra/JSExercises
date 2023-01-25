// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops


function findVoteEligibleCandidates(populationList) {
	return populationList.map(element => {
		if(element.age>=18)
			return element.name			
	}).filter(item=>item!=undefined);
}



if(require !== 'undefined' && require.main ===module){

	pop = [
		{
			name:"Ravi",
			age:28
		},
		{
			name:"Teja",
			age:8
		}
	];

	console.log(findVoteEligibleCandidates(pop));
}


module.exports = { findVoteEligibleCandidates }