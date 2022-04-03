import './BackgroundSettings.scss';


function BackgroundSettings ({backgroundList, changeBackgroundHandler}) {
  return (
    <>
      <h3 className="settings__sub-menu-title">Background settings</h3>
      <ul className="background-change">
        {backgroundList.map( element =>
          <li key={element.title}>
            <label className="background-change__button-label">
              <button className="background-change__button" onClick={() => {changeBackgroundHandler(element.file)}}>
                <img className="background-change__button-image" src={`${process.env.REACT_APP_API_URL}/${element.file}`} alt={element.title}/>
              </button>
              { element.title }
            </label>
          </li>
          )
        }
      </ul>
    </>
  )
}

export default BackgroundSettings;