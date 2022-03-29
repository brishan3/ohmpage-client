import './LinkElement.scss';


function LinkElement({title, url, description, category, subcategory, status}) {
  return (
    <li key={title} className="link-element">
      <div className="link-element__column link-element__column--title">
        <p className="link-element__text">{title}</p>
      </div>
      <div className="link-element__column link-element__column--url">
        <a className="link-element__text" href={url} target="_blank">{url}</a>
      </div>
      <div className="link-element__column link-element__column--description">
        <p className="link-element__text">{description}</p>
      </div>
      <div className="link-element__column link-element__column--category">
        <p className="link-element__text">{category}</p>
      </div>
      <div className="link-element__column link-element__column--subcategory">
        <p className="link-element__text">{subcategory}</p>
      </div>
      <div className="link-element__column link-element__column--status">
        <p className="link-element__text">{status}</p>
      </div>
    </li>
  )
}

export default LinkElement;