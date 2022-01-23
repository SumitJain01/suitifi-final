import React, { useState, useCallback } from 'react';
import { pathOr } from 'ramda';
import { isString } from 'ramda-adjunct';
import VisibilitySensorLib from 'react-visibility-sensor';

function VisibilitySensor({
  children,
  style,
  offset = 0,
  onChange: onChangeProp = () => {},
  partialVisibility = true,
  once = false,
  active = true,
}) {
  const [isActive, setActive] = useState(active);
  const onChange = useCallback((isVisible) => {
    if (once && isVisible) {
      setActive(false);
    }
    onChangeProp(isVisible);
  }, [isActive, once, onChangeProp]);
  return (
    <VisibilitySensorLib
      partialVisibility={partialVisibility}
      minTopValue={offset}
      onChange={onChange}
      active={isActive}
    >
      {({ isVisible }) => {
        const passThroughProps = {
          style: Object.assign(pathOr({}, ['props', 'style'], children), style),
          className: `${isVisible ? 'is-visible' : 'is-outside'} ${pathOr('', ['props', 'className'], children)}`,
          isActive,
        };
        // Do not pass isVisible prop if child is not a React element.
        if (!isString(children.type)) {
          passThroughProps.isVisible = isVisible;
        }
        return React.cloneElement(children, passThroughProps);
      }}
    </VisibilitySensorLib>
  );
}

export default VisibilitySensor;
