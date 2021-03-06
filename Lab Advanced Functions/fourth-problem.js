function solve(employeesString, criteria) {
    let employeeArray = JSON.parse(employeesString);
    [key, value] = criteria.split('-');
    let counter = 0;
    
    if (key === 'all') {
        console.log(employeeArray.map(e => `${counter++}. ${e.first_name} ${e.last_name} - ${e.email}`).join('\r\n'));
        return;
    }
    employeeArray = employeeArray.filter(e => e[key] === value);
    console.log(employeeArray.map(e => `${counter++}. ${e.first_name} ${e.last_name} - ${e.email}`).join('\r\n'));
}
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all'
);