import React, { useCallback } from 'react';
import { WarnWrapper } from './styled';
import Button from '../Button';
import { setWarn } from '../../store/reducers/warn';
import { useTypedDispatch, useTypedSelector } from '../../store/hooks';

const WarnModal = () => {
  const dispatch = useTypedDispatch();
  const warn = useTypedSelector(state => state.warn);
  const hideWarn = useCallback(
    (e: React.MouseEvent) => {
      if (e.currentTarget !== e.target) return;
      dispatch(setWarn(''));
    },
    [warn]
  );

  return (
    <WarnWrapper hidden={!warn} onClick={hideWarn}>
      <div className='warn__dialog'>
        <p className='warn__text'>{warn}</p>
        <Button onClick={hideWarn} text='Ok' />
      </div>
    </WarnWrapper>
  );
};

export default WarnModal;