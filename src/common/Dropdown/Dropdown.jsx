import React from 'react'
import './Dropdown.css'

function Dropdown({assignValuePlant, assignValueType}) {


  return (
    <>
    <table>
      <tbody>
      <tr>
        <td>
        <h5 className='ms-3'> Por Planta</h5>
        <select onChange={assignValuePlant} id='selectPlant' className="form-select ms-3" aria-label="Default select example">
            <option>Todas</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        </td>
    
        <td>
        <h5 className='ms-4'> Por Tipo</h5>
        <select onChange={assignValueType} id='selectType' className="form-select ms-4" aria-label="Default select example">
            <option>Todas</option>
            <option value="Notebook">Notebook</option>
            <option value="Torre">Torre</option>
        </select>
        </td>
    </tr>
      </tbody>
    </table>
    

    </>
  )
}

export default Dropdown