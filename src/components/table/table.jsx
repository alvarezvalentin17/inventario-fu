import React, {useState} from 'react';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import {db} from '../../services/firestore'
import './table.css';
import New from '../../common/Actions/New';
import Swal from 'sweetalert2'
import Modal from '../../common/Modal/Modal';


function Table({items}) { 

  const [code, setCode] = useState()
  const [user, setUser] = useState()
  const [name_pc, setName_pc] = useState()
  const [mark, setMark] = useState()
  const [model, setModel] = useState()
  const [processor, setProcessor] = useState()
  const [memory_ram, setMemory_Ram] = useState()
  const [price, setPrice] = useState()
  const [so, setSO] = useState()
  const [type, setType] = useState()
  const [plant, setPlant] = useState()
  const [section, setSection] = useState()
  const [typeofdisk, setTypeOfDisk] = useState()
  

  const saveInputs = () => {
    let user = document.getElementById('user_edit').value;
    let name_pc = document.getElementById('name_pc_edit').value;
    let mark = document.getElementById('mark_edit').value;
    let model = document.getElementById('model_edit').value;
    let processor = document.getElementById('processor_edit').value;
    let memory_ram = document.getElementById('memory_ram_edit').value;
    let price = document.getElementById('price_edit').value;
    let so = document.getElementById('so_edit').value;
    let type = document.getElementById('type_edit').value;
    let plant = document.getElementById('plant_edit').value;
    let section = document.getElementById('section_edit').value;
    let typeofdisk = document.getElementById('typeofdisk_edit').value;

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

  const saveId = (id)=> {
    setCode(id)
  }

function loadInputs(user, name_pc,mark,model,processor,memory_ram,price,so,type,plant,section,typeofdisk) {

  document.getElementById('user_edit').value = user;
  document.getElementById('name_pc_edit').value = name_pc;
  document.getElementById('mark_edit').value = mark;
  document.getElementById('model_edit').value = model;
  document.getElementById('processor_edit').value = processor;
  document.getElementById('memory_ram_edit').value = memory_ram;
  document.getElementById('price_edit').value = price;
  document.getElementById('so_edit').value = so;
  document.getElementById('type_edit').value = type;
  document.getElementById('plant_edit').value = plant;
  document.getElementById('section_edit').value = section;
  document.getElementById('typeofdisk_edit').value = typeofdisk;

}

function viewData(user, name_pc,mark,model,processor,memory_ram,price,so,type,plant,section,typeofdisk) {

  document.getElementById('user_view').innerHTML = user;
  document.getElementById('name__view').innerHTML = name_pc;
  document.getElementById('mark_view').innerHTML = mark;
  document.getElementById('model_view').innerHTML = model;
  document.getElementById('processor_view').innerHTML = processor;
  document.getElementById('memory_ram_view').innerHTML = memory_ram;
  document.getElementById('price_view').innerHTML = price;
  document.getElementById('so_view').innerHTML = so;
  document.getElementById('type_view').innerHTML = type;
  document.getElementById('plant_view').innerHTML = plant;
  document.getElementById('section_view').innerHTML = section;
  document.getElementById('typeofdisk_view').innerHTML = typeofdisk;

}



  const update = async ()=> {
    const docRef = doc(db, "items", code)
     await updateDoc(docRef,{
                user: user,
                name_pc: name_pc,
                mark: mark,
                model: model,
                processor: processor,
                memory_ram: memory_ram,
                price: price,
                so: so,
                type: type,
                plant: plant,
                section:section,
                typeofdisk: typeofdisk,
                })
  }


  return (
    <>
    <div className='container'>
                  <New />
        <table className="table mt-5">
            <thead>
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Nombre de PC</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Procesador</th>
                  <th scope="col">RAM</th>
                  <th scope="col">Sistema Operativo</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Planta</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Acciones</th>
                </tr>
            </thead>

              {items.map((e)=>(
            <tbody>      
               <tr>
                  <td>{e.user}</td>
                  <td>{e.name_pc}</td>
                  <td>{e.mark}</td>
                  <td>{e.model}</td>
                  <td>{e.processor}</td>
                  <td>{e.memory_ram} GB</td>
                  <td>{e.so}</td>
                  <td>{e.type}</td>
                  <td>{e.plant}</td>
                  <td>{e.section}</td>
                  <td>
                        <Modal
                        icon='visibility'
                        state='#view'
                        stateid='view'
                        title={`Ver datos`}
                        btn_p='OK'
                        btn_s='Cancelar'
                        classbtn='  '
                        starFunction={()=>{
                          viewData(e.user,e.name_pc,e.mark,e.model,e.processor,e.memory_ram,e.price,e.so,e.type,e.plant,e.section,e.typeofdisk)
                          saveId(e.id)
                        }}

                      >
                        <div className="container text-center">
                        <div class="container text-center">
  <div class="row">
    <div class="col-6 col-sm-3">Nombre: <p id='user_view' /></div>
    <div class="col-6 col-sm-3">Nombre PC: <p id='name__view' /></div>
    <div class="col-6 col-sm-3">Marca: <p id='mark_view' /></div>
    <div class="col-6 col-sm-3">Modelo: <p id='model_view' /></div>
    <div class="col-6 col-sm-3">Procesador: <p id='processor_view' /></div>
    <div class="col-6 col-sm-3">Memoria RAM: <p id='memory_ram_view' /> GB</div>
    <div class="col-6 col-sm-3">Precio: U$S <p id='price_view' /></div>
    <div class="col-6 col-sm-3">Sistema Operativo: <p id='so_view' /></div>
    <div class="col-6 col-sm-3">Tipo: <p id='type_view' /></div>
    <div class="col-6 col-sm-3">Planta: <p id='plant_view' /></div>
    <div class="col-6 col-sm-3">Sección: <p id='section_view' /></div>
    <div class="col-6 col-sm-3">Tipo de Disco: <p id='typeofdisk_view' /></div>
  </div>
</div>
                        </div>
                      {/* <div className='container'>
                        
                          <div><label ><h4>Nombre:</h4></label> <h5 id='user_view'></h5></div>
                          <label ><h4>Nombre de PC:</h4></label><h5 id='name__view'></h5>
                          <label ><h4>Marca:</h4></label><h5 id='mark_view'></h5>
                          <label ><h4>Modelo:</h4></label><h5 id='model_view'></h5>
                          <label ><h4>Procesador:</h4></label><h5 id='processor_view'></h5>
                          <label ><h4>Memoria RAM:</h4></label><h5 id='memory_ram_view'></h5>
                          <label ><h4>Precio:</h4> </label><h5 id='price_view'></h5>
                          <label ><h4>Sistema Operativo:</h4></label><h5 id='so_view'></h5>
                          <label ><h4>Tipo:</h4></label><h5 id='type_view'></h5>
                          <label ><h4>Planta:</h4></label><h5 id='plant_view'></h5>
                          <label ><h4>Sección:</h4></label><h5 id='section_view'></h5>
                          <label ><h4>Tipo de Disco:</h4></label><h5 id='typeofdisk_view'></h5>

                      </div> */}
                        </Modal>

                        <Modal
                        icon='edit'
                        state='#edit'
                        stateid='edit'
                        title={`Editar`}
                        btn_p='Guardar'
                        btn_s='Cancelar'
                        classbtn='  '
                        starFunction={()=>{
                          loadInputs(e.user,e.name_pc,e.mark,e.model,e.processor,e.memory_ram,e.price,e.so,e.type,e.plant,e.section,e.typeofdisk)
                          saveId(e.id)
                        }}
                        success={()=>{
                          update()
                           }}

                      >
                      <div className='container'>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='user_edit' type="text" class="form-control" placeholder="Usuario" aria-label="Usuario" />
                          <input onChange={saveInputs} autoComplete='off' id='name_pc_edit' type="text" class="form-control" placeholder="Nombre PC" aria-label="Nombre PC" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='mark_edit' type="text" class="form-control" placeholder="Marca" aria-label="Marca" />
                          <input onChange={saveInputs} autoComplete='off' id='model_edit' type="text" class="form-control" placeholder="Modelo" aria-label="Modelo" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='processor_edit' type="text" class="form-control" placeholder="Procesador" aria-label="Procesador" />
                          <input onChange={saveInputs} autoComplete='off' id='memory_ram_edit' type="number" class="form-control" placeholder="RAM" aria-label="RAM" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='typeofdisk_edit' type="text" class="form-control" placeholder="Tipo de Disco" aria-label="Modelo" />
                          <input onChange={saveInputs} autoComplete='off' id='price_edit' type="number" class="form-control" placeholder="Precio" aria-label="Precio" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off'id='so_edit' type="text" class="form-control" placeholder="Sistema Operativo" aria-label="Sistema Operativo" />
                          <input onChange={saveInputs} autoComplete='off' id='type_edit' type="text" class="form-control" placeholder="Tipo" aria-label="Tipo" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='plant_edit' type="text" class="form-control" placeholder="Planta" aria-label="Planta" />
                          <input onChange={saveInputs} autoComplete='off' id='section_edit' type="text" class="form-control" placeholder="Sector" aria-label="Sector" />
                        </div>
                      </div>
                        </Modal>



                    <span className='material-symbols-outlined btn' onClick={()=>{
                        Swal.fire({
                          title: `¿Desea borrar ${e.name_pc}?`,
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
               </tbody> 

              )

              )}  
              
                
        </table>

    </div>

    </>
  )
}


export default Table
