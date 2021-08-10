import React from 'react'
import { getSalaryByAreas, removeRepeatStrings } from '../utils/filterData';

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

    const getWorkersInformation = (subarea) => {
        const workers = month.map( elements => {
            return(
                {
                    month: elements['Mes'],
                    name: elements['Nombre '],
                    id: elements['ID'],
                    firstDay: elements['Fecha de ingreso'],
                    salary: elements['Sueldo  bruto'],
                    subarea: elements['Subarea'],
                    idLider: elements['ID Lider'],
                    position: elements['Nivel Jerárquico'],
                }
            )
        });

        const findWorkers = workers.filter( Worker => Worker.subarea === subarea);

        return findWorkers;
    }

    const getArrVisualMap = () => {
        const OrganizationChartArr = departments().map( department => {
            return ({
                department: department,
                salary: getSalaryByAreas(month, department),
                area: getAreas(department).map(area => {
                    return ({
                        area: area,
                        subarea: getSubareas(department).map( element => {
                            return({
                                subarea: element,
                                workers: getWorkersInformation(element),
                            })
                        }),
                    })
                }),
            })
        });

        return OrganizationChartArr;
    }

    console.log(getArrVisualMap())

    return (
        <div>
            
        </div>
    )
}

export default OrganizationChart;
