
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const convertTimestamp = (seconds) => {
    const d = new Date(seconds * 1000); //convert to ms
    //format: mm/dd/YYYY HH:MM 
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    return `${month + 1}/${date}/${year} ${hours}:${minutes}`;
}