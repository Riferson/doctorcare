import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal';
import { Home } from "./screens/Home";
import { AreaDoPaciente } from "./screens/AreaDoPaciente";
import { useState } from "react";
import { NewConsultModal } from "./components/NewConsultModal";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import dayjs from "dayjs";
import { ConsultasProvider } from "./ConsultasContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewConsultModalOpen,setIsNewConsultModalOpen] = useState(false);

  function handleOpenNewConsultModal(){
      setIsNewConsultModalOpen(true);
  }
  function handleCloseNewConsultModal(){
      setIsNewConsultModalOpen(false);
  }
  return (
    <ConsultasProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AreaDoPaciente" element={<AreaDoPaciente onOpenNewConsultModal={handleOpenNewConsultModal}/>}/>
          </Routes>
        </BrowserRouter>

        <GlobalStyle/>
        <NewConsultModal isOpen={isNewConsultModalOpen} onRequestClose={handleCloseNewConsultModal}/>
    </ConsultasProvider>
  );
}