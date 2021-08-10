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