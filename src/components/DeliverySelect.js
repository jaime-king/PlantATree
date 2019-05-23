import React from "react";
import Select from "react-select";

const options = [
  { value: "delivery", label: "Delivery" },
  { value: "pickup", label: "Pickup" }
];

class DeliverySelect extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default DeliverySelect;
