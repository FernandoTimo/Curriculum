import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './FisrtStep.module.css';
// import Liasdd from 'components/Resources/Ligth.json';
function FisrtStep() {
  const [firstStep, setfirstStep] = useState(true);
  const [secondStep, setsecondStep] = useState(false);
  useEffect(() => {
    const nextStep = () => {
      setsecondStep(true);
    };
    !firstStep && window.addEventListener('click', nextStep);
    return () => {
      window.removeEventListener('click', nextStep);
    };
  }, [firstStep]);
  const handlerImage = () => {
    setfirstStep(true);
    setsecondStep(false);
  };

  return (
    <div className={style.StepsContainer}>
      <div className={style.FisrtStep}>
        <div
          className={style.ProfileContainer}
          style={{
            width: firstStep ? '80vh' : '30vh',
            height: firstStep ? '80vh' : '30vh',
            cursor: 'pointer',
          }}
          onClick={() => {
            setfirstStep(false);
          }}
        >
          <div
            className={style.InfoContainer}
            style={{ opacity: firstStep ? 1 : 0 }}
          >
            <h1 className={style.Title}>Fernando Timo, 21</h1>
            <label className={style.Atribucion}>Fullstack developer</label>
          </div>
          <div className={style.ImageContainer}>
            <Image
              alt="FernandoTimo"
              src="/images/FernandoTimo.jpg"
              className={style.Image}
              onDoubleClick={handlerImage}
              height={500}
              width={500}
            />
          </div>
          <div
            className={style.StateContainer}
            style={{
              width: firstStep ? '80vh' : '30vh',
              height: firstStep ? '80vh' : '30vh',
              transform: firstStep ? 'rotateZ(120deg)' : 'rotate(-180deg)',
            }}
          >
            <div
              className={style.State}
              style={{
                transform: firstStep ? 'rotateZ(-120deg)' : 'rotate(180deg)',
                width: firstStep ? '30vh' : '5vh',
                opacity: firstStep ? 0 : secondStep ? 0 : 1,
              }}
            >
              {firstStep ? 'BUSCANDO OPORTUNIDAD LABORAL' : '🌴'}
            </div>
          </div>
        </div>
        <label
          className={style.Locacion}
          style={{
            opacity: firstStep ? 0 : secondStep ? 0 : 1,
            transitionDelay: secondStep ? '0s' : '0.8s',
          }}
        >
          Arequipa, Perú
        </label>
      </div>
      {secondStep && (
        <div className={style.SecondStep}>
          <div
            className={style.Bienvenida}
            style={{ opacity: secondStep ? 1 : 0 }}
          >
            Hola!
          </div>
        </div>
      )}
    </div>
  );
}
export default FisrtStep;
