export function timeConverter(timestamp){
    const time = new Date(timestamp);
    const hour = time.getHours();
    const dayAsNum = time.getDay();
    const minutes = time.getMinutes();

    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


    const day = daysOfWeek[dayAsNum];

    return {
        hour, minutes, day
    }
}