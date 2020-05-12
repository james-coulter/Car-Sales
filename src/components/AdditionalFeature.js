import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../action.js';

const AdditionalFeature = props => {

  const addItem = event => {
    event.preventDefault();
    props.buyItem(props.features[props.index]);
  };


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addItem}>Add</button>
      {props.features[props.index].name} (+{props.features[props.index].price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { buyItem })(AdditionalFeature)
