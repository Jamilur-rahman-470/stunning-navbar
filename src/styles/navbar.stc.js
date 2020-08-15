import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  .wrapper {
    width: 85%;
    height: 100%;
    margin: 0 auto;

    justify-content: space-between;
  }
`;

export const Brand = styled.a`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Menu = styled.div`
  width: 25px;
  .line {
    width: 100%;
    height: 3px;
    margin-bottom: 3px;
    background: #fff;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 90vh;
  background: #000;
  position: absolute;
  top: 10vh;
  left: 0;
  display: ${(props) => (props.show ? "block" : "none")};

`;


export const Links = styled.div`
    width: 85%;
    height: 70vh;
    margin: 35px auto 0 auto;


    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 120px);
        li{
            font-size: 12px;
            font-weight: 500;
            a{
                padding: 20px;
                font-size: 30px;
                text-transform: uppercase;
            }
            a:hover{
                font-size: 36px;
                padding-left: 40px;
            }
        }
    }
`

export const Info = styled.div`
    justify-content: space-between;
    width: 85%;
    height: 10vh;
    margin: 0 auto;
    p{
        font-size: 12px;
        font-weight: 300;
        opacity: .8;
        letter-spacing: 2px;
    }
`