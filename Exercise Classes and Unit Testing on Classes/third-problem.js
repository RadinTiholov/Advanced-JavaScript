function solve(array, criterion){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    } 
    let tickets = [];
    for (let input of array) {
        input = input.split('|');
        const dest = input[0];
        const pri = Number(input[1]);
        const stu = input[2];
        const ticket = new Ticket(dest, pri, stu);
        tickets.push(ticket);
    }
    tickets.sort(compare_lname);
    return tickets;

    function compare_lname( a, b )
    {
        if ( a[criterion] < b[criterion]){
            return -1;
        }
        if ( a[criterion] > b[criterion]){
            return 1;
        }
        return 0;
    }
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));