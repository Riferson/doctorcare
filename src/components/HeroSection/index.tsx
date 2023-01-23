import WomanImg from '../../assets/Woman.png';
import { Container,Conteudo,AreaTexto, Title,SubTitle,AreaImage,Image,Botao,Button} from "./styles";

export function HeroSection(){
    return(
        <>
        <Container>
            <Conteudo>
               <AreaTexto>
                    <Title>Assistência médica<br/>simplificada para todos</Title>
                    <SubTitle>Os médicos da DoctorCare vão além dos sintomas para tratar a causa<br/>raiz de sua doença e proporcionar uma cura a longo prazo.</SubTitle>
                    <Botao>
                        <Button type='button'> agendar consulta </Button>
                    </Botao>
               </AreaTexto>
               <AreaImage>
                    <Image src={WomanImg}/>
               </AreaImage>
            </Conteudo>
        </Container>
          
        </>
    );
}