import React from 'react';
import { useAppContext } from '../context/AppContext';

const Information = () => {
  const { InfoData } = useAppContext();
  return (
    <div>Information</div>
  )
}

export default Information;