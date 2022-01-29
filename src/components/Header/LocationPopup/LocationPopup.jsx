import React from 'react';
import './LocationPopup.css';

class LocationPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Ташкент' };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form className="langPopupFrom" onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ташкент">Ташкент</option>
            <option value="Бухара">Бухара</option>
          </select>
        </label>
      </form>
    );
  }
}
export default LocationPopup;
