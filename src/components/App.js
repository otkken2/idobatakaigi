import React, { useState } from 'react';

import SignIn from './SignIn';

export default () => {
  const [name, setName] = useState('');
  return <SignIn name={name} setName={setName}/>
};
