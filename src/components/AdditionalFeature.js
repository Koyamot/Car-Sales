import React from 'react';

import { connect } from 'react-redux';
import { addPart } from '../actions/actions'

const AdditionalFeature = props => {

  const feature = props.feature;

  const handleClick = () => {
    props.addPart(feature);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {handleClick()}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => {}, { addPart })(AdditionalFeature);
