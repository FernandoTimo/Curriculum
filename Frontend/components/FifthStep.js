import { useTheme } from 'hooks/useTheme';
import { useContext, useState } from 'react';
import style from './FifthStep.module.css';
import { Modal } from './Resources/Timoideas';

function FifthStep() {
  const [viewState, setviewState] = useState(1);
  const [WhatsAppUserNumber, setWhatsAppUserNumber] = useState('FernandoTimo');
  const [WhatsAppUserName, setWhatsAppUserName] = useState(false);
  const [ModalTemplate, setModalTemplate] = useState(false);
  const { Theme } = useTheme();
  const toggleModalTemplate = () => {
    setModalTemplate(!ModalTemplate);
  };
  const [ModalWhatsApp, setModalWhatsApp] = useState(false);
  const toggleModalWhatsApp = () => {
    setModalWhatsApp(!ModalWhatsApp);
  };
  const getDate = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    date =
      (hours < 10 ? `0${hours}` : hours) +
      ':' +
      (minutes < 10 ? `0${minutes}` : minutes);
    return date;
  };
  return (
    <div className={style.FifthStep}>
      <Modal
        background={'#1112'}
        center
        active={[ModalTemplate, toggleModalTemplate]}
        transition={0.5}
      >
        <div className={style.ModalBox}>
          <img
            alt="Github"
            src="icons/social/GitHub.png"
            className={style.GitHub}
          />
          <div className={style.TemplateRepository}>
            <label className={style.TemplateTitle}>
              FernandoTimo/Presentación
            </label>
            <div className={style.TemplateInfo}>
              <label className={style.TemplateLanguaje}>JavaScript</label>
              <label className={style.TemplateSpan}>Template</label>
            </div>
          </div>
          <p className={style.TemplateDescription}>
            🌴 Next + Express + MongoDB ⚡ Puedes crear tu propia presentación
            usando esta plantilla, todo el código está en mi repositorio de
            GitHub ❤. GOOOO!
          </p>
          <a href="http://github.com/FernandoTimo/Presentacion" target="_blank">
            Ver plantilla en GitHub
          </a>
          <a href="http://github.com/FernandoTimo/Presentacion" target="_blank">
            Editar sobre esta plantilla
          </a>
        </div>
      </Modal>
      <Modal
        background={'#1118'}
        center
        active={[ModalWhatsApp, toggleModalWhatsApp]}
        transition={0.5}
      >
        <div className={style.ModalBox} style={{ borderRadius: '3vh' }}>
          <div className={style.WhatsAppChatContainer}>
            <header>
              <div className={style.PhoneHeader}>
                <time>{getDate()}</time>
                <span></span>
                <div>
                  <img
                    alt="Batery"
                    src="icons/social/WhatsApp/BlackBateryCharging.png"
                  />
                </div>
              </div>
              <div className={style.WhatsAppHeader}>
                <button
                  className={style.WhatsAppBack}
                  onClick={() => {
                    setModalWhatsApp(false);
                  }}
                >
                  <img alt="Back" src="icons/social/WhatsApp/Back.png" />
                </button>
                <div className={style.WhatsAppUserInfo}>
                  <div className={style.WhatsAppUserImage}>
                    <img
                      alt="WhatsApp"
                      src="icons/social/WhatsApp/WhatsApp.png"
                    />
                  </div>
                  <div className={style.WhatsAppUserContainer}>
                    <label>
                      {WhatsAppUserName ? WhatsAppUserName : WhatsAppUserNumber}
                    </label>
                    <span>en línea</span>
                  </div>
                  <div className={style.WhatsAppMeet}>
                    <img
                      alt="VideoCall"
                      src="icons/social/WhatsApp/VideoCall.png"
                    />
                    <img alt="Call" src="icons/social/WhatsApp/Call.png" />
                  </div>
                </div>
              </div>
            </header>
            <div className={style.WhatsAppChat}>
              <div
                style={{
                  background: 'url("icons/social/WhatsApp/Wallpaper.png")',
                }}
              >
                <span>Hoy</span>
                <div className={style.WhatsAppMessages}>
                  <div className={style.WhatsAppMessage}>
                    <span>C</span>
                    <div>
                      <p>🌴</p>
                      <div>
                        <time>{getDate()}</time>
                        <span>
                          <img
                            alt="View state"
                            src={`icons/social/WhatsApp/Visto_${viewState}.png`}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={style.WhatsAppMessage}>
                    <span>C</span>
                    <div>
                      <p>Hola {WhatsAppUserNumber}</p>
                      <div>
                        <time>{getDate()}</time>
                        <span>
                          <img
                            alt="View state"
                            src={`icons/social/WhatsApp/Visto_${viewState}.png`}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={style.WhatsAppMessage}>
                    <span>C</span>
                    <div>
                      <p>buenas tardes :)</p>
                      <div>
                        <time>{getDate()}</time>
                        <span>
                          <img
                            alt="View state"
                            src={`icons/social/WhatsApp/Visto_${viewState}.png`}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.WhatsAppForm}>
            <label>Ingresa tu numero</label>
            <div>
              <input
                type="text"
                placeholder="+51 966682190"
                type="tel"
                maxLength="13"
              />
              <div className={style.InputNumber}></div>
            </div>
            {/* <button className={style.WhatsAppIniciar}>¡Iniciar!</button> */}
          </div>
        </div>
      </Modal>
      <div className={style.Contact}>
        <h2>Contacto</h2>
        <div className={style.ContactContainer}>
          <address className={style.ContactBox}>
            <span>Enviar Correo</span>
            <a href="mailto:fertimo99@gmail.com" style={{ color: Theme._15 }}>
              timoideas@hotmail.com
            </a>
            <label className={style.ContactTipe}>Correo</label>
          </address>
        </div>
        <address className={style.ContactBox}>
          <span>Llamar</span>
          <a href="tel:+51983443031" style={{ color: Theme._15 }}>
            +51 983443031
          </a>
          <label>Teléfono</label>
        </address>
        <label>
          <abbr style={{ color: Theme._15, backgroundColor: Theme._00 }}>
            o
          </abbr>
        </label>
        <button
          onClick={() => {
            setModalWhatsApp(true);
          }}
        >
          Iniciar una conversación en
          <b>
            WhatsApp{' '}
            <img alt="WhatsApp" src="icons/social/WhatsApp/WhatsApp_S.png" />
          </b>
        </button>
      </div>
      <div className={style.PageInfo}>
        <footer className={style.FooterContainer}>
          <button
            className={style.DownloadTemplate}
            onClick={() => {
              setModalTemplate(true);
            }}
          >
            Crear mi presentacion con esta plantilla ❤
          </button>
          <label>
            Esta web estará habilitada mientras ausenten propuestas de trabajo.
            Diseño web/logo © 2021 por{' '}
            <a
              href="http://timoideas.com"
              target="_blank"
              className={style.Timoideas}
            >
              Timoideas.com
            </a>
            .
          </label>
          <br />
          <label>
            Para crear este sitio se usaron estas plantillas como base de
            código:{' '}
            <a
              href="https://github.com/FernandoTimo/Frontend-Next"
              target="_blank"
            >
              FernandoTimo/Frontend-Next
            </a>
            {' & '}
            <a
              href="https://github.com/FernandoTimo/Backend-Express"
              target="_blank"
            >
              FernandoTimo/Backend-Express
            </a>
            .
          </label>
        </footer>
      </div>
    </div>
  );
}
export default FifthStep;
