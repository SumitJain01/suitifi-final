import React from 'react';

export default function Gap({ h = '2rem' }) {
  return (
    <div
      style={{
        height: h, display: 'block', width: '100%',
      }}
    />
  );
}
