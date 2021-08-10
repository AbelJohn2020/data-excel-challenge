export const getMonths = (data) => {
    if(data.lenght !== 0) {
        const getStringsMonths = data.map( date => date['Mes']);
        const removeRepeatStrings = new Set(getStringsMonths)
        const getUnicDates = [...removeRepeatStrings];
        return getUnicDates;
    } else {
        return data;
    }
  }

export const getDataByMonth = (data) => {
    if(data.lenght !== 0) {
        return getMonths(data).map( month => {
            return data.filter(({Mes}) => Mes === month);
        })
    } else {
        return data;
    }
}

export const getNameMonth = (month) => {
    const invertDate = month.map( element => element['Mes'].split("-").reverse().join("-"));
    const getStringMonth = JSON.stringify(...new Set(invertDate));
    const getDate = new Date(getStringMonth)
    const getMonth = getDate.toLocaleDateString('default', {month: 'long'})
    return getMonth;
}

export const removeRepeatStrings = (arrFilter) => {
    const setarr = new Set(arrFilter)
    return [...setarr];
}

export const getSalary = (month) => {
    const getSalaryStrings = month.map( ({'Sueldo  bruto' : salary}) => salary);
    const getSalaryNumbers = getSalaryStrings.map( num => Number(num));
    const getTotalSalaries = getSalaryNumbers.reduce( (a, b) => a+b, 0);
    return getTotalSalaries;
}

export const getSalaryByAreas = (month, str) => {
    const getArea = month.filter( elements => elements['División'] === str);
    const getSalaryStrings = getArea.map( elements => elements['Sueldo  bruto']);
    const getSalaryNumbers = getSalaryStrings.map( num => Number(num));
    const getTotalSalaries = getSalaryNumbers.reduce( (a, b) => a+b, 0);
    return getTotalSalaries;
}