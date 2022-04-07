import './BackgroundSettings.scss';
import { API_URL } from '../../config';

//
// Renders the BackgroundSettings component which consists of rendering a list of thumbnail
// images for the user to select and change their background with.
//
function BackgroundSettings ({backgroundList, changeBackgroundHandler}) {
  return (
    <>
      <h3 className="settings__sub-menu-title">Background Settings</h3>
      <ul className="background-change">
        {
          backgroundList.map( element =>
            <li key={element.title}>
              <label className="background-change__button-label">
                <button className="background-change__button" onClick={() => {changeBackgroundHandler(element.file)}}>
                  <img className="background-change__button-image" src={`${API_URL}/${element.thumbnail}`} alt={element.title}/>
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