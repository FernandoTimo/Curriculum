import style from './SecondStep.module.css';
function SecondStep() {
  return (
    <div className={style.SecondStep}>
      <Modal
        background={'#fff3'}
        center
        active={[
          true,
          () => {
            console.log('desactived');
          },
        ]}
        blur={1}
        transition={0.2}
      ></Modal>
      <div className={style.Title}>
        <h2>Stack</h2>
        <h2>Stack</h2>
        <h2>Stack</h2>
      </div>
      <div className={style.StackContainer}>
        <div className={style.Card}>
          <label>Frontend</label>
        </div>
        <div className={style.Card}>
          <label>Backend</label>
        </div>
      </div>
    </div>
  );
}
export default SecondStep;
