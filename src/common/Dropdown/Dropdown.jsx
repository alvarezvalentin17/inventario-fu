import React from 'react'
import './Dropdown.css'

function Dropdown({assignValue}) {


  return (
    <>
    <th>
        <td>
        <h5> Filtrar por Planta</h5>
        <select onChange={assignValue} id='select' className="form-select w-8" aria-label="Default select example">
            <option>Todas</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        </td>
    </th>

    </>
  )
}

export default Dropdown