/**
 * @param {string} date
 * @return {string}
 */

var reformatDate = function(date) {
    let months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let [day, month, year] = date.split(" ");
    return (
        year +
        "-" +
        ("00" + (months.indexOf(month) + 1)).substr(-2) +
        "-" +
        ("0" + parseInt(day)).substr(-2)
    );
};