import * as C from './App.styles'
import { useState } from 'react';
import { Item } from './types/item'

const App = () => {
  const [list, setList] = useState<Item[]>([{
    id: 1, name: 'Comprar pão', done: true
  }]);
    

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
          </C.Header>
      </C.Area>
    </C.Container>
  );
}  

export default App;