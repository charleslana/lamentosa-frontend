import IAchievement from '../interfaces/IAchievement';
import React from 'react';

function InfoAchievement(props: IAchievement) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </>
  );
}

export default InfoAchievement;
