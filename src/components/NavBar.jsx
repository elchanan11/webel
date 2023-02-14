import {leptop, mobile} from "../responsive";
import styled from "styled-components";
import {Search,Menu} from "@mui/icons-material";
import logoImage from '../images/WebElLogo.jpg'

const Container = styled.div`
  width: 100%;
  position: sticky;
  box-shadow: 0 2px 1px -2px gray;
background-color: white;
  top: 0;
  z-index: 99;
  min-height: 60px;
  
  ${mobile({height: '50px'})}
`
const Wrapper = styled.div`
  
  display: flex;
  justify-content: space-between;
  padding: 10px 10px ;
  align-items: center;
  ${mobile({padding: '20px 0'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({flex:1,alignItems:"left"})}
`;

const Center = styled.div`
  flex: 1;
  max-width: 200px;
  text-align: center;
`;

const Logo1 = styled.img`
  max-width: 100%;
  max-height: 80px;
 font-size: 60px;
  font-weight: bold;
  color: blue;
  cursor: pointer;
  //text-decoration: underline;
  font-family: 'Noto Serif Hebrew', serif;
  ${mobile({height: '40px'})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:1,alignItems:"right"})}
`;

const MenuLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 7px;
  ${mobile({fontsize: '12px',marginRight:"0px" })}
`

function NavBar(){
    return(
        <Container>
            <Wrapper>
                <Left>
                    <MenuLink style={{marginLeft:"10px",justifyContent:"flex-end"}}>
                        <Menu />
                    </MenuLink>
                </Left>
                <Center>
                    <Logo1 src={logoImage}/>
                </Center>
                <Right>
                    <MenuLink style={{marginRight:"10px",justifyContent:"flex-end"}}>
                        <Search />
                    </MenuLink>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar