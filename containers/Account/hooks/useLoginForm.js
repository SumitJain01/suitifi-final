import { useState } from 'react';

export default () => {
  const [isLoginOpen, setIsLoginOpen] = useState();
  const [loginStep, setLoginStep] = useState(0);
  return [isLoginOpen, setIsLoginOpen, loginStep, setLoginStep];
}
