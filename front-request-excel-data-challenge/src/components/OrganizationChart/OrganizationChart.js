import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { colors } from '../UI/colors';
import { getSalary, getSalaryByAreas, removeRepeatStrings } from '../utils/filterData';
import { Areas, BoxAreas, BoxSubareas, Department, DepartmentsName, Div, Li, Lider, Subareas, Ul } from './OrganizationChartStyles';

const OrganizationChart = ({month, shadow}) => {

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

    return (
        <Div shadow={shadow}>
            <Tree
                lineWidth={'3px'}
                lineColor={colors.blue}
                lineBorderRadius={'6px'}
                label={<Ul>
                    <Li shadow={shadow}>
                        <Department>Departamentos</Department>
                        <div>Total pagado <b>{getSalary(month)}</b></div>
                    </Li>
                </Ul>}
            >

                {
                    getArrVisualMap().map( ({department, salary, area}) => (
                        <TreeNode key={department} label={<Ul>
                            <Li shadow={shadow}>
                                <DepartmentsName>Departamento de {department}</DepartmentsName>
                                <div>Total pagado <b>{salary}</b></div>
                            </Li>
                        </Ul>}>
                            {
                                area.map( ({area, subarea}) => (
                                    <TreeNode key={area} label={
                                        (area === 'Reagional')
                                            ?   <BoxAreas><Areas shadow={shadow}> Area {area} </Areas></BoxAreas>
                                            :   <BoxAreas><Areas shadow={shadow}>Area de {area}</Areas></BoxAreas>
                                    }>
                                        {
                                            subarea.map(({subarea, workers}) => (
                                                <TreeNode key={subarea} label={
                                                    (subarea === 'Clientes')
                                                        ? <BoxSubareas><Subareas shadow={shadow}>Subarea de {subarea}</Subareas></BoxSubareas>
                                                        : <BoxSubareas><Subareas shadow={shadow}>Subarea {subarea}</Subareas></BoxSubareas>
                                                }>
                                                    {
                                                        workers.map( ({name, id, firstDay, position, salary, idLider}) => (
                                                            <TreeNode key={id} label={
                                                            <Ul>
                                                                <Li shadow={shadow}>
                                                                    <Lider>Leader: {name}</Lider>
                                                                    <Lider>ID: {idLider}</Lider>
                                                                    <Lider>Posición: {position}</Lider>
                                                                    <Lider>Primer día: {firstDay}</Lider>
                                                                    <Lider>Sueldo: {salary}</Lider>
                                                                </Li>
                                                            </Ul>
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
        </Div>
    )
}

export default OrganizationChart;
