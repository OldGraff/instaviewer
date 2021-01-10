import React, { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from 'hooks/use-stores';

export const Facts = observer(
  (): ReactElement => {
    const { catFactsStore } = useStores();

    useEffect(() => {
      catFactsStore.getCatFactsAsync();
    }, []);

    return (
      <div>
        {catFactsStore.facts.map((fact) => (
          <p key={fact.user}>{fact.text}</p>
        ))}
      </div>
    );
  },
);
