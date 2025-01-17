import React from 'react';
import { Input, Button } from '@linikerdev/design-system';


const App: React.FC = () => {

  return (
    <div>
      <Input onChange={(e) => console.log(e.target.value)} type='text' value='teste' placeholder='isso é um teste de componente ds' />

      <Button label='teste' onClick={() => alert('somente um teste')}>Somente um teste</Button>
    </div >
  );
};

export default App;