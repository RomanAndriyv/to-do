export default function() {
    return JSON.parse(localStorage.getItem("tasks"));
    // return [
    //     { text: "1a", key: 154271566281 },
    //     { text: "2b", key: 154271566282 },
    //     { text: "3c", key: 154271566283 },
    //     { text: "4d", key: 154271566284 }
    // ]
}