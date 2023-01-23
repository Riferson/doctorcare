import {Container,Numeros,NumArea,NumTittle,NumSubTitle,Conteudo,TitleContainer,Ancora,TitleSection,CartoesServicos,Cartao,Icon,TitleCartao,TextoCartao} from './styles';

import VerificarImg from '../../assets/Verificar.png';

export function Servicos(){
    return(
        <Container>
            <Numeros>
                <NumArea>
                    <NumTittle>+3.500</NumTittle>
                    <NumSubTitle>Pacientes atendidos</NumSubTitle>
                </NumArea>
                <NumArea>
                    <NumTittle>+15</NumTittle>
                    <NumSubTitle>Especialistas disponíveis</NumSubTitle>
                </NumArea>
                <NumArea>
                    <NumTittle>+10</NumTittle>
                    <NumSubTitle>Anos no mercado</NumSubTitle>
                </NumArea>
            </Numeros>
            <Conteudo>
                <TitleContainer>
                    <Ancora id='SERVICOS'>SERVIÇOS</Ancora>
                    <TitleSection>Como podmeos ajudá-lo<br/> a se sentir melhor?</TitleSection>
                </TitleContainer>
                <CartoesServicos>
                    <Cartao>
                        <Icon src={VerificarImg}/>
                        <TitleCartao>Problemas digestivos</TitleCartao>
                        <TextoCartao>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</TextoCartao>
                    </Cartao>
                    <Cartao>
                        <Icon src={VerificarImg}/>
                        <TitleCartao>Saúde Hormonal</TitleCartao>
                        <TextoCartao>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</TextoCartao>
                    </Cartao>
                    <Cartao>
                        <Icon src={VerificarImg}/>
                        <TitleCartao>Bem-estar mental</TitleCartao>
                        <TextoCartao>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</TextoCartao>
                    </Cartao>
                    <Cartao>
                        <Icon src={VerificarImg}/>
                        <TitleCartao>Cuidados Pediátricos</TitleCartao>
                        <TextoCartao>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</TextoCartao>
                    </Cartao>
                    <Cartao>
                        <Icon src={VerificarImg}/>
                        <TitleCartao>Autoimune e Inflamação</TitleCartao>
                        <TextoCartao>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</TextoCartao>
                    </Cartao>
                    <Cartao>
                        <Icon src={VerificarImg}/>
                        <TitleCartao>Saúde do Coração</TitleCartao>
                        <TextoCartao>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</TextoCartao>
                    </Cartao>
                </CartoesServicos>
            </Conteudo>
        </Container>
    );
}