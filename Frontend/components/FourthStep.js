import { useState } from 'react';
import style from './FourthStep.module.css';
import { Modal, Poligon } from './Resources/Timoideas';
function FourthStep() {
  const [ModalActive, setModalActive] = useState(false);
  const handlerFunction = () => {
    setModalActive(false);
  };
  return (
    <div className={style.FourthStep}>
      <Modal
        background={'#0003'}
        center
        active={[ModalActive, handlerFunction]}
        blur={1}
        transition={0.2}
      >
        <Poligon size={'50vh'}>Hola</Poligon>
      </Modal>
      <h2>Complementos</h2>
      <Poligon size={'50vh'}>
        <Poligon size={'45vh'}>
          <div
            className={style.Into}
            onClick={() => {
              setModalActive(true);
            }}
          >
            Hola
          </div>
        </Poligon>
      </Poligon>
    </div>
  );
}
export default FourthStep;
