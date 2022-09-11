import React, {useState} from 'react';
import Modal from '../../common/modal/modal';
import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firestore";
import './table.css';

function Table({items}) {
  const [stateModal1, setStateModal1] = useState(false)
  const [sistemaOperativo, setSistemaOperativo] = useState()
  const [mark, setMark] = useState()
  const [name_pc, setName_PC] = useState()
  const [model, setModel] = useState()

  const saveDataItems = () =>{

    let so = document.getElementById('so');
    setSistemaOperativo(so.value);

    let mark = document.getElementById('mark');
    setMark(mark.value);

    let name_pc = document.getElementById('name_pc');
    setName_PC(name_pc.value);

    let model = document.getElementById('model');
    setModel(model.value);

    }

  const addItems = async () => {
    const docRef = await addDoc(collection(db, "items"), {
      name_pc: name_pc,
      mark: mark,
      so: sistemaOperativo,
      model: model,
    });
  }

 const closeModal = () => {
  setStateModal1(!stateModal1)
 }

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
      {/* Modal - Crear nuevo item */}
      <Modal
          title='Editar'
          state={stateModal1}
          changeState={setStateModal1}
          viewHeader={true}
          viewOverlay={true}
          padding={'20px'}
       >
     <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <label className='me-3'>Nombre y Apellido: </label>
            <input onChange={saveDataItems} id='user' type="text" />
          </div>
          <div class="col">
            <label id='name_pc' className='me-3'>Nombre de PC: </label>
            <input onChange={saveDataItems} type="text" />
          </div>
          <div class="col">
          <label className='me-3'>Marca: </label>
            <select class="input" id='mark' onChange={saveDataItems} aria-label="Default select example">
              <option value="DELL">DELL</option>
              <option value="Lenovo">Lenovo</option>
            </select>
          </div>
          <div class="col">
            <label className='me-3'>Modelo: </label>
            <input onChange={saveDataItems} id='model' type="text" />
          </div>
          <div class="col">
            <label className='me-3'>Procesador: </label>
            <input onChange={saveDataItems} id='processor' type="text" />
          </div>
          <div class="col">
            <label className='me-3'>RAM: </label>
            <input onChange={saveDataItems} id='memory_ram' type="text" />
          </div>
          <div class="col">
            <label className='me-3'>Pantalla: </label>
            <input onChange={saveDataItems} type="text" />
          </div>
          <div class="col">
            <label className='me-3'>Precio: </label>
            <input onChange={saveDataItems} id='display' type="text" />
          </div>
          <div class="col">
            <label className='me-3'>Serial: </label>
            <input onChange={saveDataItems} id='serial' type="text" />
          </div>
          <div class="col">
            <label className='me-3'>Sistema Operativo: </label>
            <select id='so' onChange={saveDataItems} className="input " aria-label="Default select example">
                <option value="Windows 10 x64">Windows 10 x64</option>
                <option value="Windows 10 x32">Windows 10 x32</option>
                <option value="Windows 8 x64">Windows 8 x64</option>
                <option value="Windows 8 x32">Windows 8 x32</option>
                <option value="Windows 7 x64">Windows 7 x64</option>
                <option value="Windows 7 x32">Windows 7 x32</option>
                <option value="Windows XP x64">Windows XP x64</option>
                <option value="Windows XP x32">Windows XP x32</option>
              </select>
            </div>
        </div>
            <button type='button' className='btn btn-primary mt-3' onClick={()=>{
              closeModal()
              addItems()
            }}>Aceptar</button>
      </div>
         
          
        </Modal>

    </div>
    </>
  )
}

export default Table
