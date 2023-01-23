import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import botaoFechar from '../../assets/closeButton.png';

import {Container,CalendarArea} from './styles';

import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { api } from "../../services/api";
import { ConsultasContext } from "../../ConsultasContext";



interface NewConsultModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

export function NewConsultModal({isOpen,onRequestClose}:NewConsultModalProps){
    const [nome,setName] = useState('');
    const [email,setEmail] = useState('');
    const [telefone,setTelefone] = useState('');
    const [especialidade,setEspecialidade] = useState('');
    const [calendar, SetCalendar] = useState<Dayjs | null>(null);
    
    const {createConsulta} = useContext(ConsultasContext);


    async function handleCreateNewConsult(event:FormEvent){
        event.preventDefault();
        
        await createConsulta({
            nome,
            email,
            telefone,
            especialidade,
            data: "",
        })
        setName('');
        setEmail('');
        setTelefone('');
        setEspecialidade('');
        onRequestClose();
    }

 
    return(
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
                <button type="button" onClick={onRequestClose} className='react-modal-close'>
                    <img src={botaoFechar} alt='Fechar modal'/>
                </button>
                <Container onSubmit={handleCreateNewConsult}>
                    <h2>Cadastrar Nova consulta</h2>
                    <input type='text' placeholder="Seu Nome" value={nome} onChange={event => setName(event.target.value)}/>
                    <input type='tel' placeholder="Seu Telefone ou Celular" value={telefone} onChange={event => setTelefone(event.target.value)}/>
                    <input type='email' placeholder="Seu E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                    <input placeholder="Especialidade" value={especialidade} onChange={event => setEspecialidade(event.target.value)}/>
                    <CalendarArea>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Selecione uma data"
                                value={calendar}
                                inputFormat='DD-MM-YYYY'
                                disablePast={true}
                                onChange={(newValue) => {
                                SetCalendar(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </CalendarArea>
                    <button type="submit" >Agendar</button>
                </Container>
            </Modal>
    );
}