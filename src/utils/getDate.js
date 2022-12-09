const getDate = (inputDate) => {
    const dateData = {}
    const splitedDate = new Date(inputDate).toString().split(" ")
    let day = splitedDate[0]
    let month = splitedDate[1]
    let date = splitedDate[2]
    let year = splitedDate[3]
    year = `${year.split("")[2]}${year.split("")[3]}`

    dateData.date = `${date} ${month} ${year}`
    switch (day) {
        case "Sun":
            day = "Sunday";
            break;
        case "Mon":
            day = "Monday";
            break;
        case "Tue":
            day = "Tuesday";
            break;
        case "Wed":
            day = "Wednesday";
            break;
        case "Thu":
            day = "Thursday";
            break;
        case "Fri":
            day = "Friday";
            break;
        case "Sat":
            day = "Saturday";
            break
        default:
            day = null;
    }
    dateData.day = day

    return dateData
}

export default getDate