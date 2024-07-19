import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isClicked: false, userInput: ''}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onChangeEvent = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {isClicked, userInput} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="editable-input-container">
            {isClicked ? (
              <div>
                <p className="para">{userInput}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickButton}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={userInput}
                  className="input"
                  onChange={this.onChangeEvent}
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickButton}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
