export function timeConverter(timestamp){
    const time = new Date(timestamp);
    const hour = time.getHours();
    const minutes = time.getMinutes();

    return {
        hour, minutes
    }
}