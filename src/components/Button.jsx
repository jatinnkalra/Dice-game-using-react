import styled from 'styled-components'

const StyledButton = styled.button`
background-color : ${(props) => props.backgroundcolor};
color : ${(props) => props.color};
width:${(props) => props.width};
height:40px;
padding: 10px 20px;
border:${(props) => props.border};
outline:none;
border-radius:4px;
cursor: pointer;
`

function Button(props) {
    return (
        <StyledButton width={props.width} color={props.color} backgroundcolor={props.backgroundcolor} border={props.border} onClick={props.onClick}>{props.text}</StyledButton>
    );
}

export default Button;