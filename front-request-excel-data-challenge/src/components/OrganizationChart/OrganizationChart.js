import React from 'react'
import { removeRepeatStrings } from '../utils/filterData';

const OrganizationChart = ({month}) => {

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

    const getSubareas = (str) => {
        const getArea = month.filter( elements => elements['División'] === str);
        const getNamesubarea = getArea.map( elements => elements['Subarea']);
        const removeRepeatSubareas = removeRepeatStrings(getNamesubarea);
        return removeRepeatSubareas;
    }

    console.log(getSubareas('Ventas'))

    return (
        <div>
            
        </div>
    )
}

export default OrganizationChart;
