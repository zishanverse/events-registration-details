import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const registered = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registeredImg"
      />
      <h1 className="registeredHead">
        You have already registered for the event
      </h1>
    </div>
  )

  const yetToRegister = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegisteredImg"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="registerBtn">
        Register Here
      </button>
    </div>
  )

  const registrationClosed = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img"
      />
      <h1 className="registeredHead">Registrations Are Closed Now!</h1>
      <p className="para">Stay Tuned. We Will reopen the registrations soon</p>
    </div>
  )

  const clickOnEvent = () => (
    <div className="inactive-container">
      <p className="para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (status) {
    case 'REGISTERED':
      return registered()
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTRATIONS_CLOSED':
      return registrationClosed()
    default:
      return clickOnEvent()
  }
}

export default ActiveEventRegistrationDetails
