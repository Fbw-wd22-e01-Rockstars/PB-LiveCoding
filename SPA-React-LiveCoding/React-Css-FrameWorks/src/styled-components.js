import styled,{css} from "styled-components"

export const Header = styled.h1`
${(props)=>{
    return props.dark? css`
    color:black;
    background-color:green;
    ` : css`
    color:blue;
    background-color:black
    ` 
}}
`

/* const FlexRowDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`

const FlexColumnDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-item:center;
` */

export const FlexDiv= styled.div`
display:flex;
flex-direction:${(props)=>props.row?"row":"column"};
justify-content:center;
align-item:center;
`