import './index.css'

const EventItem = props => {
  const {item, func} = props
  const {imageUrl, name, location, registrationStatus} = item

  const changeStatus = () => func(registrationStatus)

  return (
    <li className="li">
      <button type="button" onClick={changeStatus} className="btn">
        <img src={imageUrl} alt="event" className="eventImg" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
