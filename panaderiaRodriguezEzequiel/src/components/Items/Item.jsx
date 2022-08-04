import React from 'react'
import ItemCount from './ItemCount';


const Item = ({id,titulo,descripcion,precio,stock,imagen,initial, onAdd}) => {
  return (
    <>
      <div class="card">
        <img src={imagen} class="estiloImagen" />
        <div class="card-body">
          <h4 class="card-title">{titulo}</h4>
          <p class="card-text">{descripcion}</p>
          <h5 class="card-title">{precio}</h5>
          <div>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
          </div>
          <a href="#" class="btn btnPersonalizado">
            Ver detalles
          </a>
        </div>
      </div>
    </>
  );
}
 
export default Item 