import styled from 'styled-components';

//export const 

export const Container = styled.div`
// position: relative;
// overflow: hidden;
// max-width: 100%;

//border-radius: 10px; 
 position: relative;
 overflow: hidden;
 width:100%;
 max-width: 100%;
 height:100vh;
`;

export const SignUpContainer = styled.div`
width: 50%;
background: #FFF;
border: 1px solid #fff;
border-radius: 30px;
padding: 40px;

height: 100vh;

  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;

  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
    : null}
 `;


export const SignInContainer = styled.div`
width: 50%;
background: #FFF;
border: 1px solid #fff;
border-radius: 30px;
padding: 40px;

height: 100vh;
 position: absolute;
 top: 0;

 transition: all 0.6s ease-in-out;
 left: 0;

 z-index: 2;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;

export const FormOptions = styled.section`
margin-top: 55px;
display: flex;
justify-content: space-around;
align-items: center;
cursor: pointer;
`;

export const Icon = styled.span`
font-size: 30px;
width: 50px;
height: 50px;
align-items: center;
display: flex;
justify-content: center;
cursor: pointer;
`;

export const Option = styled.div`
width: 300px;
height: 60px;
background: rgba(118, 155, 193, 0.05);
border: 1px solid rgba(168, 160, 160, 0.5);
border-radius: 5px;
display: flex;
justify-content: left;
align-items: center;
// gap: 10px;
font-family: 'Poppins',sans-serif;

font-weight: 800;
font-size: 1.8rem;
line-height: 27px;
letter-spacing: 0.05em;

color: #C4C4C4;
`;

export const Form = styled.section`
margin-top: 35px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;       
`;

export const Title = styled.h1`
font-weight: 600;
font-size: 5.2rem;
line-height: 119%;
/* or 115% */
color: #000958;
 `;



export const Label = styled.span`
font-family: 'Sora',sans-serif;
display: inline-block;
margin: 35px auto auto 0;
text-align: center;
width: 100%;
font-weight: 600;
font-size: 2.8rem;
line-height: 1;
letter-spacing: 0.05em;
color: #C4C4C4;
`;

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 `;

export const Extra = styled.div`
display: flex;
justify-content: center;
margin: 38px auto auto 0;
width: 100%;
font-weight: 500;
font-size: 1.6rem;
line-height: 1.5;
/* identical to box height */
gap: 10px;
text-align: center;
`;

export const Button = styled.button`
margin-top: 42px;
--height:60px;

/* height: var(--height);     */
min-width: 190px;
box-shadow: 0px 13px 26px -8px rgba(255, 91, 46, 0.42);               
font-size: 1.6rem;   
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;

export const Anchor = styled.a`

 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 45px 0 0 0;
 `;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
// background: #ff416c;
// background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
// background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 30px;
    /* or 188% */


    color: #656689; 
   letter-spacing: 0.5px;
   margin: 20px 0 30px
 `;