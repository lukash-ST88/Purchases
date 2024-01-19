import React from 'react'
import { ICategory } from './models';

interface IContext {
    refresh: boolean;
    setRefresh?: any;
  };
  
  const defaultState = {
    refresh: false
  };
const Context = React.createContext<IContext>(defaultState);

export default Context;