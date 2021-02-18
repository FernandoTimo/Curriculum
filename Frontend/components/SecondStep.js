import { useState } from 'react';
import { Modal } from './Resources/Timoideas';
import style from './SecondStep.module.css';
function SecondStep() {
  const [ModalProyectos, setModalProyectos] = useState(true);
  const toggleModalProyectos = () => {
    setModalProyectos(false);
  };
  return (
    <div className={style.SecondStep}>
      <Modal
        background={'#0000'}
        center
        active={[ModalProyectos, toggleModalProyectos]}
        blur={1}
        transition={0.2}
      >
        Proyectos
      </Modal>
      <div className={style.Title}>
        <h2>Stack</h2>
        <h2>Stack</h2>
        <h2>Stack</h2>
      </div>
      <div className={style.StackContainer}>
        <div className={style.Card}>
          <div>Librería: React</div>
          <div>Framework: Next</div>
          <div>Deploy: Vercel</div>
        </div>
        <button
          onClick={() => {
            setModalProyectos(true);
          }}
        >
          Ver Proyectos
        </button>
        <div className={style.Card}>
          <div>Entorno: Node</div>
          <div>Framework: Express</div>
          <div>Base de Datos: MongoDB </div>
          <div>Deploy: Heroku - MongoDB Atlas</div>
        </div>
      </div>
    </div>
  );
}
export default SecondStep;
