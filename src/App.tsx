import { useCallback, useState } from 'react';


import { SideBar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);

  },[]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
 {/* seleção dos ids e generos para passar para cada componente */}
      
      <SideBar
      selectedGenreId={selectedGenreId}
      handleClickButton = {handleClickButton}
      />
      <Content
      selectedGenreId={selectedGenreId}
      />

    </div>
  )
}