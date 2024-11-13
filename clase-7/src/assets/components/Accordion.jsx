import React, { useState } from 'react'

const Accordion = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h3>Accordion</h3>
      <p>1</p>
      {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vero!</p>}
      <button onClick={() => setShow(!show)}>{show ? 'Ocultar Lorem' : 'Mostrar Lorem'} Ocultar Lorem</button>
    </div>
  )
}

export default Accordion
