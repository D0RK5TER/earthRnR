// import { useHistory } from "react-router-dom"


export const pathURL = (history) => {
    return history.location.pathname
}


function getAge(birth) {
    let age = ''
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const curMonth = curDate.getMonth();
    const curDay = curDate.getDay();
    const birthDate = new Date(birth.toString());
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDay();
    let year = curYear - birthYear;
    let month = curMonth - birthMonth;
    let day = curDay - birthDay;
    age = (year * 364) + (month * 30) + day

    return age;
}