function previousDay(year, month, day) {
    if (year <= 99) year += 1900;
    let date = new Date(`${year}-${month}-${day} 12:00`);
    date.setDate(date.getDate() - 1);
    let newDate = date.toISOString().split('T')[0];
    [yyyy, mm, dd] = newDate.split('-');
    console.log(`${yyyy}-${removeLeadingZeroe(mm)}-${removeLeadingZeroe(dd)}`);

    function removeLeadingZeroe (str) {
        return str.replace(/^0+/, '');
    }
}
previousDay(2016, 9, 30);