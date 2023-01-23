import { Header } from "../../components/Header";
import fotoPerfil from '../../assets/perfil.png';
import {Container,HeaderPaciente,PacienteFoto,Nome,ListagemConsultas,AreaTitulo,TituloListagem,AgendarConsulta,DadosDaConsulta,Consulta,Info} from './styles'
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ConsultasContext } from "../../ConsultasContext";

interface HeaderProps{
    onOpenNewConsultModal: () => void;
}

interface Consultas{
    id:string,
    nome:string;
    email:string;
    telefone:string;
    especialidade:string;
    data:string;
};


export function AreaDoPaciente({onOpenNewConsultModal}:HeaderProps){
    const [consultas,setConsultas] = useState<Consultas[]>([]);

    const {consultasData} = useContext(ConsultasContext);


    // const getConsultas = async () => {
    //     try {
    //         const resp = await api.get<ConsultasReqProps>('/consultas');

    //         console.log('reessssssssssp', resp)

    //         setConsultas(resp.data.consulta)
    //     } catch (error) {
    //         console.log("error getConsultas", error);
    //     }
    // }


    // useEffect(() => {
    //     getConsultas()
    // },[])

    useEffect(()=>{
        api.get('/consultas').then(response => setConsultas(response.data.consulta)).catch(error => console.log('Error Get Consultas', error))
    },consultasData);

    return(
        <Container>
            <Header/>
            <HeaderPaciente>
                <PacienteFoto src={fotoPerfil}/>
                <Nome>Killua pipipi popopo</Nome>
            </HeaderPaciente>
            <ListagemConsultas>
                <AreaTitulo>
                    <TituloListagem>Consultas Marcadas </TituloListagem>
                    <AgendarConsulta onClick={onOpenNewConsultModal}>Agendar Consulta</AgendarConsulta>
                </AreaTitulo>
                <DadosDaConsulta>
                {consultas.map((consulta) =>(
                         <Consulta>
                            <Info>{consulta.nome}</Info>
                            <Info>{consulta.telefone}</Info>
                            <Info>{consulta.email}</Info>
                            <Info>{consulta.especialidade}</Info>
                        </Consulta>
                    ))
                    }
                </DadosDaConsulta>
            </ListagemConsultas>
        </Container>
    );
}