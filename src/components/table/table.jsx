import React, {useState} from 'react'
import Modal from '../../common/modal/modal'

function Table({items}) {
  const [stateModal1, setStateModal1] = useState(false)

  return (
    <>
    <div className='container'>
        <table className="table mt-5">

            <thead>
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Nombre de PC</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Procesador</th>
                  <th scope="col">RAM</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Sistema Operativo</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>      
              {items.map((e)=>(
               <tr>
                  <td>{e.user}</td>
                  <td>{e.name_pc}</td>
                  <td>{e.mark}</td>
                  <td>{e.processor}</td>
                  <td>{e.memory_ram}</td>
                  <td>U$S {e.price}</td>
                  <td>{e.so}</td>
                  <td>{e.type}</td>
                  <td><span  onClick={()=>{{setStateModal1(!stateModal1)}}} className="material-symbols-outlined btn">edit</span></td>
               </tr> 
              ))}  
                
            </tbody>
        </table>
      {/* Modal  */}
      <Modal
          title='Editar'
          state={stateModal1}
          changeState={setStateModal1}
          viewHeader={true}
          viewOverlay={true}
          padding={'20px'}
       >
          <div className='container'>
            <div className='mb-3 form-group'>
              <label>Usuario: </label>
              <input className='d-block form-control' type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>Nombre de PC: </label>
              <input className='d-block form-control'type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>Modelo: </label>
              <input className='d-block form-control' type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>Procesador: </label>
              <input className='d-block form-control'type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>RAM: </label><input className='d-block form-control'type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>Precio: </label>
              <input className='d-block form-control'type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>Sistema Operativo: </label>
              <input className='d-block form-control'type="text" />
            </div>
            <div className='mb-3 form-group'>
              <label>Tipo: </label>
              <input className='d-block form-control'type="text" />
            </div>
            <button type='button' className='btn btn-primary' onClick={()=>{setStateModal1(!stateModal1)}}>Aceptar</button>
          </div>
        </Modal>

    </div>
    </>
  )
}

export default Table
