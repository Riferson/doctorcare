import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Consultas{
    id:string,
    nome:string;
    email:string;
    telefone:string;
    especialidade:string;
    data:string;
};

type ConsultasInput = Omit<Consultas, 'id'>;

interface ConsultasProps{
    children: ReactNode;
}

interface ConsultasContextData{
    consultasData:Consultas[];
    createConsulta: (consulta:ConsultasInput) => Promise<void>;
}

export const ConsultasContext = createContext<ConsultasContextData>({} as ConsultasContextData);

export function ConsultasProvider({children}:ConsultasProps){
    const [consultasData,setConsultasData] = useState<Consultas[]>([]);

    useEffect(()=>{
        api.get('/consultas').then(response=> setConsultasData(response.data.consulta))
    },[]);

    async function createConsulta(consultaInput:ConsultasInput){

        const response = await api.post('/consultas',{
            ...consultaInput,
            createdAt:new Date(),
        });
        const {consultas} =  response.data;
        setConsultasData([
            ...consultasData,
            consultas,
        ]);
    }

    return(
        <ConsultasContext.Provider value={{consultasData,createConsulta}}>
            {children}
        </ConsultasContext.Provider>
    )
}