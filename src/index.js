module.exports = function toReadable(number) {
    let result = '';
    const o = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const d = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20) {
        result = o[number];
    } else if (number === 1000) {
        result = 'one thousand';
    } else if (number % 10 === 0 && number < 100) {
        const m = (number / 10 - 2);
        result = d[m];
    } else if (number < 100) {
        const n = (Math.floor(number / 10) - 2);
        const r = number % 10;
        result = d[n] + ' ' + o[r];
    } else {
        const s = Math.floor(number / 100);
        const l = number % 100;
        if (l === 0) {
            result = o[s] + ' ' + 'hundred';
        } else {
            result = o[s] + ' ' + 'hundred' + ' ' + toReadable(l);
        }
    }

    return result;
}
