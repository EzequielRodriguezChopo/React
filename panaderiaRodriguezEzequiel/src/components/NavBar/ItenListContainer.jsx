import React from 'react'

const ItenListContainer = ({imagen,titulo,descripcion,precio}) => {
  return (
    <>
    <div class="card">
  <img src={imagen} class="estiloImagen" alt="100" width="170" />
  <div class="card-body">
    <h5 class="card-title">{titulo}</h5>
    <p class="card-text">{descripcion}</p>
    <a href="#" class="btn btnPersonalizado">Comprar</a>
  </div>
</div>
</>
  )
}

export default ItenListContainer