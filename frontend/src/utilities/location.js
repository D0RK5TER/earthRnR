// import { useHistory } from "react-router-dom"


export const pathURL = (history) => {
    return history.location.pathname
}


export function getAge(birth) {
    let age = ''
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const curMonth = curDate.getMonth();
    const curDay = curDate.getDay();
    const birthDate = new Date(birth.toString());
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDay();
    let year = birthYear - curYear;
    let month = birthMonth - curMonth;
    let day = birthDay - curDay;
    console.log(year, month, day)
    age = (year * 364) + (month * 30) + day

    return age;
}



export const deciNum = (num) => {
    let newarr = num.toString().split('.')
    if (newarr.length < 2) return newarr[0] + '.00'
    else {
        let str = newarr[0] + '.'
        let add = newarr[1].slice(0, 2)
        return str + add
    }

}