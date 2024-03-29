// import { useHistory } from "react-router-dom"

export const arrConvert = (arr) => {
    let newallState = {}
    for (let sp of arr) newallState[sp.id] = sp
    return newallState
}

export const pathURL = (history) => {
    return history.location.pathname
}


export function getAge(birth) {
    const curDate = new Date()
    const birthDate = new Date(birth.toString())
    let age = (curDate.getTime() - birthDate.getTime()) / (1000 * 3600 * 24)

    return age === 1 ? `1 day` :
        age < 1 ? 'Hours' :
            `${Math.round(age)} days`
}

export const deciNum = (num) => {
    let newarr = num.toString().split('.')
    if (newarr.length < 2) return newarr[0] + '.00'
    else {
        let str = newarr[0] + '.'
        newarr[1].length > 1 ? str += newarr[1].slice(0, 2) : str += newarr[1] + '0'
        return str
    }

}

export const overThou = (num) => {
    let numstr = num.toString()
    let ans = '$' + numstr.slice(0, numstr.length - 3) + ',' + numstr.slice(numstr.length - 3)
    return ans
}

export const strToNum = (str) => {
    if (str.includes('$')) str = str.slice(1)
    if (str.includes('.')) str = str.split('.')[0]
    if (str.includes(',')) str = str.split(',').join('')
    return +str
}
let m = {
    1: 'January',
    2: 'Feburary',
    3: 'March',
    4: 'April', 5: 'May', 6: 'June', 7: 'July',
    8: 'August', 9: 'September', 10: 'October',
    11: 'November', 12: 'December'
}
export const dateMonthYear = (date) => {
    date = new Date(date)
    return `${m[date.getMonth()]} ${date.getFullYear()}`
}