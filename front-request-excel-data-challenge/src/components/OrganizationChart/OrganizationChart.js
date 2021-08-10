import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { colors } from '../UI/colors';
import { getSalary, getSalaryByAreas, removeRepeatStrings } from '../utils/filterData';

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
        const getArea = month.filter( elements => elements['Area'] === str);
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
                        subarea: getSubareas(area).map( element => {
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
        <Tree
            lineWidth={'3px'}
            lineColor={colors.blue}
            lineBorderRadius={'6px'}
            label={<ul>
                <li>Departamentos</li>
                <li>total pagado {getSalary(month)}</li>
            </ul>}
        >

            {
                getArrVisualMap().map( ({department, salary, area}) => (
                    <TreeNode key={department} label={<ul>
                        <li>Departamento de {department}</li>
                        <li>Total pagado {salary}</li>
                    </ul>}>
                        {
                            area.map( ({area, subarea}) => (
                                <TreeNode key={area} label={
                                    (area === 'Reagional')
                                        ?   <div> Area {area} </div>
                                        :   <div>Area de {area}</div>
                                }>
                                    {
                                        subarea.map(({subarea, workers}) => (
                                            <TreeNode key={subarea} label={
                                                (subarea === 'Clientes')
                                                    ? <div>Subarea de {subarea}</div>
                                                    : <div>Subarea {subarea}</div>
                                            }>
                                                {
                                                    workers.map( ({name, id, firstDay, position, salary, idLider}) => (
                                                        <TreeNode key={id} label={
                                                        <ul>
                                                            <li>Leader: {name}</li>
                                                            <li>ID: {idLider}</li>
                                                            <li>Posición: {position}</li>
                                                            <li>Primer día: {firstDay}</li>
                                                            <li>Sueldo: {salary}</li>
                                                        </ul>
                                                    } />
                                                    ))
                                                }
                                            </TreeNode>
                                        ))
                                    }
                                </TreeNode>
                            ))
                        }
                    </TreeNode>
                ))
            }
        </Tree>
    )
}

export default OrganizationChart;
