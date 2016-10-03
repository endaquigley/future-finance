import React from 'react';
import classNames from 'classnames';
import './css/standard-button.css';

const SortButton = ({ title, sorting, currentSorting, onClick }) => {

  const classes = classNames({
    'standard-button': true,
    'standard-button--selected': sorting === currentSorting
  });

  return (
    <button className={ classes } onClick={ () => onClick(sorting) }>{ title }</button>
  )
};

export default SortButton;
