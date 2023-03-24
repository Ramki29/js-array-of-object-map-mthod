const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

let result=users.map(function(person)
	{
	return person.first_name+person.last_name;
	});	
	console.log(result);
	