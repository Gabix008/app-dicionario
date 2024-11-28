import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
    } 
    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};      
        font-family: ${({ font }) => (font == 'monospace' ? 'monospace' : font == 'sans-serif' ? 'sans-serif' : 'serif')};
    }
    p{
        color: ${props => props.theme.text};
    }
    h1 {
        color: ${props => props.theme.titles}; 
       
    }
    select{
        color:${props => props.theme.text};
    }
    option{
        color: #000;
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
    /* .top-divider-horizontal{
        color: ${props => props.theme.text};
    }
    .bottom-divider-horizontal{
        color: ${props => props.theme.text};
    } */
    
`