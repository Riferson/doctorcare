import {Container,Conteudo,LogoArea,Logo,Navegacao,MenuItens,Item,Botao,Button} from './styles';
import logoimg from '../../assets/Logo.png'
import {Link} from 'react-router-dom';


export function Header(){
    

    return(
        <Container>
            <Conteudo>
                <LogoArea>
                    <Logo src={logoimg}/>
                </LogoArea>
                <Navegacao>
                    <MenuItens>
                        <Item>
                            <Link to='/'>Home</Link>
                        </Item>
                        <Item>
                             <Link to='/AreaDoPaciente'>Area Do Cliente</Link>
                        </Item>
                    </MenuItens>
                </Navegacao>
                <Botao>
                    <Button type='button' > agendar consulta </Button>
                </Botao>

                
            </Conteudo>
        </Container>
    );
}