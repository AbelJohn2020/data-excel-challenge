import React from 'react'

const Table = ({month}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th cope="col">Mes</th>
                        <th cope="col">Nombre</th>
                        <th cope="col">ID</th>
                        <th cope="col">Fecha de ingreso</th>
                        <th cope="col">Sueldo bruto</th>
                        <th cope="col">División</th>
                        <th cope="col">Area</th>
                        <th cope="col">Subarea</th>
                        <th cope="col">ID Lider</th>
                        <th cope="col">Nivel Jerárquico</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        month.map( reported => (
                            <tr key={Number(reported.ID)}>
                                <th>{reported.Mes}</th>
                                <td>{reported['Nombre ']}</td>
                                <td>{reported.ID}</td>
                                <td>{reported['Fecha de ingreso']}</td>
                                <td>{reported['Sueldo  bruto']}</td>
                                <td>{reported['División']}</td>
                                <td>{reported.Area}</td>
                                <td>{reported.Subarea}</td>
                                <td>{reported['ID Lider']}</td>
                                <td>{reported['Nivel Jerárquico']}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
