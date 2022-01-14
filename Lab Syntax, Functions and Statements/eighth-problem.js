function DaysOfMonth(month, year){
    console.log(new Date(year, month, 0).getDate());
}
DaysOfMonth(1, 2012);