// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops


function findVoteEligibleCandidates(populationList) {
	populationList.forEach(element => {
		if(element.age>=18)
			console.log(element.name)				
	});
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

	findVoteEligibleCandidates(pop);
}
