import React from 'react'
import { ContainerTable, Table, TdBody, TdBodyNubers, ThHeader, TrBody, TrHeader } from './TablesStyles';

const Tables = ({month}) => {
    return (
        <ContainerTable>
            <Table>
                <thead>
                    <TrHeader>
                        <ThHeader cope="col">Mes</ThHeader>
                        <ThHeader cope="col">Nombre</ThHeader>
                        <ThHeader cope="col">ID</ThHeader>
                        <ThHeader cope="col">Fecha de ingreso</ThHeader>
                        <ThHeader cope="col">Sueldo bruto</ThHeader>
                        <ThHeader cope="col">División</ThHeader>
                        <ThHeader cope="col">Area</ThHeader>
                        <ThHeader cope="col">Subarea</ThHeader>
                        <ThHeader cope="col">ID Lider</ThHeader>
                        <ThHeader cope="col">Nivel Jerárquico</ThHeader>
                    </TrHeader>
                </thead>
                <tbody>
                    {
                        month.map( reported => (
                            <TrBody key={Number(reported.ID)}>
                                <ThHeader>{reported.Mes}</ThHeader>
                                <TdBody>{reported['Nombre ']}</TdBody>
                                <TdBodyNubers>{reported.ID}</TdBodyNubers>
                                <TdBodyNubers>{reported['Fecha de ingreso']}</TdBodyNubers>
                                <TdBodyNubers>{reported['Sueldo  bruto']}</TdBodyNubers>
                                <TdBody>{reported['División']}</TdBody>
                                <TdBody>{reported.Area}</TdBody>
                                <TdBody>{reported.Subarea}</TdBody>
                                <TdBodyNubers>{reported['ID Lider']}</TdBodyNubers>
                                <TdBody>{reported['Nivel Jerárquico']}</TdBody>
                            </TrBody>
                        ))
                    }
                </tbody>
            </Table>
        </ContainerTable>
    )
}

export default Tables;
