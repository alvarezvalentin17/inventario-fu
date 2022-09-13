import React, {useState} from 'react';
import { doc, deleteDoc, updateDoc, collection, setDoc  } from "firebase/firestore";
import {db} from '../../services/firestore'
import './table.css';
import New from '../../common/Actions/New';
import Edit from '../../common/Actions/Edit';
import Swal from 'sweetalert2';
import { useEffect } from 'react';


function Table({items}) {

  const [user1, setUser] = useState()
  const [name_pc1, setName_pc] = useState()
  const [mark1, setMark] = useState()
  const [model1, setModel] = useState()
  const [processor1, setProcessor] = useState()
  const [memory_ram1, setMemory_Ram] = useState()
  const [price1, setPrice] = useState()
  const [so1, setSO] = useState()
  const [type1, setType] = useState()
  const [plant1, setPlant] = useState()
  const [section1, setSection] = useState()
  const [typeofdisk1, setTypeOfDisk] = useState()

  const saveInputs = () => {
    let user = document.getElementById('user1').value;
    let name_pc = document.getElementById('name_pc1').value;
    let mark = document.getElementById('mark1').value;
    let model = document.getElementById('model1').value;
    let processor = document.getElementById('processor_1').value;
    let memory_ram = document.getElementById('memory_ram1').value;
    let price = document.getElementById('price1').value;
    let so = document.getElementById('so1').value;
    let type = document.getElementById('type1').value;
    let plant = document.getElementById('plant1').value;
    let section = document.getElementById('section1').value;
    let typeofdisk = document.getElementById('typeofdisk1').value;

    setUser(user)
    setName_pc(name_pc)
    setMark(mark)
    setModel(model)
    setProcessor(processor)
    setMemory_Ram(memory_ram)
    setPrice(price)
    setSO(so)
    setType(type)
    setPlant(plant)
    setSection(section)
    setTypeOfDisk(typeofdisk)

}



  return (
    <>
    <div className='container'>
                  <New />
        <table className="table mt-5">
            <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Nombre de PC</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Procesador</th>
                  <th scope="col">RAM</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Sistema Operativo</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Planta</th>
                  <th scope="col">Sección</th>
                  <th scope="col">Disco</th>
                  <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>      
              {items.map((e)=>(
               <tr>
                  <td>{e.id}</td>
                  <td>{e.user}</td>
                  <td>{e.name_pc}</td>
                  <td>{e.mark}</td>
                  <td>{e.processor}</td>
                  <td>{e.memory_ram} GB</td>
                  <td>U$S {e.price}</td>
                  <td>{e.so}</td>
                  <td>{e.type}</td>
                  <td>{e.plant}</td>
                  <td>{e.section}</td>
                  <td>{e.typeofdisk}</td>
                  <td>
                  
<span onClick={()=> {

  const LoadInputs = () => {
    document.getElementById('user1').value = e.user;
    document.getElementById('name_pc1').value = e.name_pc;
    document.getElementById('mark1').value = e.mark;
    document.getElementById('model1').value = e.model;
    document.getElementById('processor_1').value = e.processor;
    document.getElementById('memory_ram1').value = e.memory_ram;
    document.getElementById('price1').value = e.price;
    document.getElementById('so1').value = e.so;
    document.getElementById('type1').value = e.type;
    document.getElementById('plant1').value = e.plant;
    document.getElementById('section1').value = e.section;
    document.getElementById('typeofdisk1').value = e.typeofdisk;
    }
  LoadInputs()
  
}


}className={`material-symbols-outlined btn`} data-bs-toggle="modal" data-bs-target="#exampleModal">
  edit
</span>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='container'>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='user1' type="text" class="form-control" placeholder="Usuario" aria-label="Usuario" />
                          <input onChange={saveInputs} autoComplete='off' id='name_pc1' type="text" class="form-control" placeholder="Nombre PC" aria-label="Nombre PC" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='mark1' type="text" class="form-control" placeholder="Marca" aria-label="Marca" />
                          <input onChange={saveInputs} autoComplete='off' id='model1' type="text" class="form-control" placeholder="Modelo" aria-label="Modelo" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='processor_1' type="text" class="form-control" placeholder="Procesador" aria-label="Procesador" />
                          <input onChange={saveInputs} autoComplete='off' id='memory_ram1' type="text" class="form-control" placeholder="RAM" aria-label="RAM" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='typeofdisk1' type="text" class="form-control" placeholder="Tipo de Disco" aria-label="Modelo" />
                          <input onChange={saveInputs} autoComplete='off' id='price1' type="text" class="form-control" placeholder="Precio" aria-label="Precio" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off'id='so1' type="text" class="form-control" placeholder="Sistema Operativo" aria-label="Sistema Operativo" />
                          <input onChange={saveInputs} autoComplete='off' id='type1' type="text" class="form-control" placeholder="Tipo" aria-label="Tipo" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='plant1' type="text" class="form-control" placeholder="Planta" aria-label="Planta" />
                          <input onChange={saveInputs} autoComplete='off' id='section1' type="text" class="form-control" placeholder="Sector" aria-label="Sector" />
                        </div>
                      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button onClick={async ()=>{
          await updateDoc(doc(db, "items", e.id,{
            user: user1,
            name_pc: name_pc1,
            mark: mark1,
            model: model1,
            processor: processor1,
            memory_ram: memory_ram1,
            price: price1,
            so: so1,
            type: type1,
            plant: plant1,
            section:section1,
            typeofdisk: typeofdisk1,
          }))
          
          
        }} type="button" data-bs-dismiss="modal" aria-label="Close" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
        <button onClick={()=>console.log(e.id)}>Ace</button>
       <span onClick={()=>{console.log(e.id)}}>Guardar</span>
                    <span className='material-symbols-outlined btn' onClick={()=>{
                        Swal.fire({
                          title: `¿Desea borrar ${e.id}?`,
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          cancelButtonText: 'Cancelar',
                          confirmButtonText: 'Borrar'
                        }).then(async (result) => {
                          
                          if (result.isConfirmed) {
                            try {
                              await deleteDoc(doc(db, "items", e.id));
                            } catch (error) {
                              console.log(error)
                            }

                            Swal.fire(
                              'Borrado!',
                              'El item fue borrado!',
                              'success'
                            )
                          }
                        })
                    }}>delete</span>
                  </td>
               </tr> 
              ))}  
                
            </tbody>
        </table>

    </div>

    </>
  )
}

export default Table
