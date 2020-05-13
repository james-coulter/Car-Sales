import React from 'react';

import { connect } from 'react-redux'
import { removeFeature } from '../action.js'


const AddedFeature = props => {

  const removeItem = event => {
    event.preventDefault()
    props.removeFeature(props.features[props.index]);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeItem}>X</button>
      {props.features[props.index].name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
