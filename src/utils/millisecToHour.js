function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

const convertMsToHM = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds % 60;
    // 👇️ if seconds are greater than 30, round minutes up (optional)
    minutes = seconds >= 30 ? minutes + 1 : minutes;

    minutes = minutes % 60;

    // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // 👇️ comment (or remove) the line below
    // commenting next line gets you `24:00:00` instead of `00:00:00`
    // or `36:15:31` instead of `12:15:31`, etc.
    hours = hours % 24;
    days = days % 30

    let returnableString = ""

    if (days > 0) {
        returnableString += `${days} day `
    }
    if (hours > 0) {
        returnableString += `${hours} hours `
    }
    returnableString += `${minutes} minutes`

    return returnableString
}

export default convertMsToHM