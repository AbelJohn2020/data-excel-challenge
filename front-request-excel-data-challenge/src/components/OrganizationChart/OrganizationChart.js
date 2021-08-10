import React from 'react'

const OrganizationChart = ({month}) => {

    const removeRepeatStrings = (arrFilter) => {
        const setarr = new Set(arrFilter)
        return [...setarr];
    }

    const departments = () => {
        const getDepartments = month.map(elements => elements['División']);
        const removeRepeatDepartments = removeRepeatStrings(getDepartments);
        return removeRepeatDepartments;
    }

    const getAreas = (str) => {
        const getArea = month.filter( elements => elements['División'] === str);
        const getNameArea = getArea.map( elements => elements['Area']);
        const removeRepeatAreas = removeRepeatStrings(getNameArea);
        return removeRepeatAreas;
    }

    console.log(getAreas('Ventas'))

    return (
        <div>
            
        </div>
    )
}

export default OrganizationChart;
