import React, { useCallback, useRef } from 'react';
import { anyPass } from 'ramda';
import { isArray, isObject, isFunction } from 'ramda-adjunct';
import useOnClickOutside from 'use-onclickoutside';
import NoScroll from 'shared/components/ScrollLock';
import Wrapper from './styled/Modal_Wrapper';
import Title from './styled/Modal_Title';

export default function Modal({
  zIndex,
  item: {
    content, hideCloseIcon, onClose, id, onConfirm, title = false,
  },
  closeModalAction,
}) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const closeHandler = useCallback(() => {
    if (isFunction(onClose)) {
      onClose();
    }
    closeModalAction();
  }, [id]);

  useOnClickOutside(ref, closeHandler);
  useOnClickOutside(ref2, closeHandler);

  const confirmHandler = useCallback(() => {
    if (isFunction(onConfirm)) {
      onConfirm();
      closeModalAction();
    }
  }, [id]);

  switch (anyPass([isArray, isObject])(content) ? 'custom' : 'confirmation') {
    case 'confirmation': {
      return (
        <Wrapper style={{ zIndex: (zIndex + 1) * 10 }}>
          {title &&
            <Title>
              {title}
            </Title>
          }
          <div className="modal" ref={ref}>
            <div className="text">{content}</div>
            <div className="buttons">
              <button className="modal-button" onClick={confirmHandler}>Confirm</button>
              <button className="modal-button" onClick={closeHandler}>Close</button>
            </div>
          </div>
          <NoScroll />
        </Wrapper>
      );
    }
    case 'custom': {
      return (
        <Wrapper style={{ zIndex: (zIndex + 1) * 10 }}>
          <div className="modal" ref={ref2}>
            {title &&
              <Title>
                {title}
              </Title>
            }
            {!hideCloseIcon && <button className="close" onClick={closeHandler}>&times;</button>}
            {React.cloneElement(content, { closeModal: closeHandler })}
          </div>
          <NoScroll />
        </Wrapper>
      );
    }
    default: {
      return null;
    }
  }
}
