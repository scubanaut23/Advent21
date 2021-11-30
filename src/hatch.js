import React from 'react';
import { StyledHatch } from './HatchStyles';

const Hatch = ({
  hatchData: { id, nr, text, author, img, open },
  handleClick,
}) => (
  <StyledHatch background={img} onClick={() => handleClick(id)}>
    <div className={open ? 'front open' : 'front'}>
      <p>{nr}</p>
    </div>
    <div className={open ? 'back open' : 'back'}>
      <p className="text">{text}</p>
      <p className="author">{author}</p>
    </div>
  </StyledHatch>
);

export default Hatch;
