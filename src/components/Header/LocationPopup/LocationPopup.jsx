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
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ташкент">Ташкент</option>
            <option value="Бухара">Бухара</option>
          </select>

    );
  }
}
export default LocationPopup;
// import React, { useState } from 'react';
// const [lacation, setlacation] = useState('');

// function LocationPopup() {
//   const handleChange = (event) => {
//     const selectlocation = event.target.value;
//     setlacation(selectlocation);
//   };
//   return (
//     <>
//       <div className="container p-5">
//         <select className="custom-select" name="" id="" onChange={handleChange}>
//           <option value="Tashkent">Tashkent</option>
//           <option value="Buxara">Buxara</option>
//           <option value="Samarkand">Samarkand</option>
//         </select>
//         {lacation}
//       </div>
//     </>
//   );
// }
// export default LocationPopup;
