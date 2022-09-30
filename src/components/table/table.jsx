import React, {useState} from 'react';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import {db} from '../../services/firestore'
import './Table.css';
import New from '../../common/Actions/New';
import Swal from 'sweetalert2'
import Modal from '../../common/modal/Modal';

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
  const [ search, setSearch ] = useState("")


  const i = items;

  const results = !search ? i : i.filter((e)=> e.user.toLowerCase().includes(search.toLocaleLowerCase()))
  
  const searcher = (e) => {
    setSearch(e.target.value)   
  }

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
        <input className='container form-control w-50' value={search} onChange={searcher}  type="text" placeholder='Buscar por usuario'/>
        <table className="table mt-5">
            <thead>
                <tr>
                  <th scope="col">Funcionario</th>
                  <th scope="col">Nombre PC</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Procesador</th>
                  <th scope="col">RAM</th>
                  <th scope="col">S.O</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Planta</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Acciones</th>
                </tr>
            </thead>

              {results.map((e)=>(
            <tbody key={e.id}>      
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
                        sizeModal={'modal-lg'}
                        starFunction={()=>{
                          viewData(e.user,e.name_pc,e.mark,e.model,e.processor,e.memory_ram,e.price,e.so,e.type,e.plant,e.section,e.typeofdisk)
                          saveId(e.id)
                        
                        }}

                      >
                              <div className='container'>

                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Usuario:</label><p id='user_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Nombre PC:</label><p id='name__view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Marca:</label><p id='mark_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Modelo:</label><p id='model_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Procesador:</label><p id='processor_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Memoria RAM(GB):</label><p id='memory_ram_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Precio(U$S):</label><p id='price_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Tipo:</label><p id='type_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Planta:</label><p id='plant_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Sector:</label><p id='section_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Tipo de Disco:</label><p id='typeofdisk_view' className='d-inline-block fs-4 ms-2'></p>
                                  <label className='mt-4 ms-4 fs-4 text-decoration-underline' >Sistema Operativo:</label><p id='so_view' className='d-inline-block fs-4 ms-2'></p>
                              </div>                            
                             
                       

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
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='user_edit' type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" />
                          <input onChange={saveInputs} autoComplete='off' id='name_pc_edit' type="text" className="form-control" placeholder="Nombre PC" aria-label="Nombre PC" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='mark_edit' type="text" className="form-control" placeholder="Marca" aria-label="Marca" />
                          <input onChange={saveInputs} autoComplete='off' id='model_edit' type="text" className="form-control" placeholder="Modelo" aria-label="Modelo" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='processor_edit' type="text" className="form-control" placeholder="Procesador" aria-label="Procesador" />
                          <input onChange={saveInputs} autoComplete='off' id='memory_ram_edit' type="number" className="form-control" placeholder="RAM" aria-label="RAM" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='typeofdisk_edit' type="text" className="form-control" placeholder="Tipo de Disco" aria-label="Modelo" />
                          <input onChange={saveInputs} autoComplete='off' id='price_edit' type="number" className="form-control" placeholder="Precio" aria-label="Precio" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off'id='so_edit' type="text" className="form-control" placeholder="Sistema Operativo" aria-label="Sistema Operativo" />
                          <input onChange={saveInputs} autoComplete='off' id='type_edit' type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='plant_edit' type="text" className="form-control" placeholder="Planta" aria-label="Planta" />
                          <input onChange={saveInputs} autoComplete='off' id='section_edit' type="text" className="form-control" placeholder="Sector" aria-label="Sector" />
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
