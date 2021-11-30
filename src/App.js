import React, { useState, useEffect } from 'react';

import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './AppStyles';
import { createCalendar } from './helpers';
import Hatch from './hatch';
import SnowStorm from 'react-snowstorm';

const GlobalStyle = createGlobalStyle`
body {
  background: center / cover rgb(110,123,139);
  margin: 0;
}
`;

function App() {
  const [hatches, setHatches] = useState([]);

  // store calendar in local storage
  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();
    setHatches(calendar);
  }, []);

  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  const handleFlipHatch = (id) => {
    const updatedHatches = hatches.map((hatch) =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
    );
    setHatches(updatedHatches);
  };

  return (
    <>
      <SnowStorm snowCharacter={'*'} />
      <GlobalStyle />
      <StyledApp>
        {hatches.map((hatch) => (
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />
        ))}
      </StyledApp>
    </>
  );
}

export default App;
