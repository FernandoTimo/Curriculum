import style from './ThirdStep.module.css';
function ThirdStep() {
  return (
    <div className={style.ThirdStep}>
      {/* <h2>Github</h2> */}
      <div className={style.Title}>
        <div>
          <div className={style.Profile}>
            <img alt="FernandoTimo" src="images/FernandoTimo.jpg" />
          </div>
          {/* Aqui van la imagen y animacion de infinita de borde redondeado y multicolor */}
        </div>
        <div>
          <h2>Repositorios</h2>
          <label>desde el 2020 hasta HOY</label>
        </div>
      </div>
      <div className={style.ReposContainer}>
        <div className={style.RepoCard}>
          <div className={style.Header}>
            <div className={style.GitHub}>
              <img alt="GitHub" src="icons/social/GitHub.png" />
            </div>
            <div className={style.Repo}>
              <svg>
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              <a
                href="https://github.com/FernandoTimo/Frontend-Next"
                target="_blank"
              >
                FernandoTimo/Frontend-Next
              </a>
            </div>
            <div className={style.Detalles}>
              <a href="https://nextjs.org/" target="_blank">
                Next.js
              </a>
              <label>Template</label>
            </div>
          </div>
          <div className={style.Descripcion}>
            <p>
              Listo para despliegue{' '}
              <img
                alt="Heart"
                src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
              />{' '}
              Plantilla de código base para desarrollar una PWA con React &
              Next, incluye +10 Hooks, Light/Dark Theme, y Componentes útiles
              para maquetar a la velocidad de la luz ⚡ (también incluye
              navegación para desarrollo).
            </p>
          </div>
          <div className={style.Readme}>
            Uso Clona este repositorio: git clone
            https://github.com/FernandoTimo/Frontend-Next NombreDeMiAplicacion
            Ubícate en el directorio: cd NombreDeMiAplicacion Instala todas las
            dependencias: npm i Gooooo :D npm run dev Visita
            http://localhost:3000 El mensaje de bienvenida solo se mostrará si
            levantaste el servidor de Express creado con esta plantilla:
            https://github.com/FernandoTimo/Backend-Express
          </div>
          <div className={style.Footer}>
            <div>
              {
                // map de arreglo y pintar etiquetas
                'Next Hooks Template'
              }
            </div>
            <div>
              <div>
                <img alt="Stars" src={`icons/Estrella_0.${'png' || 'gif'}`} />
                <label>18.3Mb</label>
              </div>
              <div>
                <img alt="Stars" src={`icons/Estrella_0.${'png' || 'gif'}`} />
                <label>35</label>
              </div>
            </div>
            <div>
              <button>Ver en GitHub</button>
            </div>
          </div>
        </div>
        <div className={style.RepoCard}>
          <div className={style.VideoContainer}>
            <div>Video</div>
          </div>
        </div>
      </div>
      <div className={style.Control}>1 2 3 4</div>
      {/* No podrá scrolear hasta que se muestren los 4 */}
    </div>
  );
}
export default ThirdStep;
