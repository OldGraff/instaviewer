import React from 'react';
import { CatFactsStore } from 'store/api/catFacts';

export const storesContext = React.createContext({
  catFactsStore: new CatFactsStore(),
});
