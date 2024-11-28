import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div` 

.autocomplete{
    /* background-color: red; */
    border: none;

  
}
.select{
    border: none;
    background-color: transparent;
}
.select ::selection{
    border: none;
}
.menu{
    display: flex;
    gap:30%;
    justify-content: center;
    margin-top: 50px;
}
.control{
    display: flex;
}

.divider{
    margin-left: 20px;
    margin-right: 20px;
    margin: 5px 20px 5px 20px;
}

.switch{
    margin-left: 15px;
    margin-top: 5px;
}


.search{
  width: 400px;
  margin-left: 40%;
  border-radius: 15px;
  background-color:  #F4F4F4;
  padding-left:5px;
}
.input-text{
    border: none;
    width: 310px;
    height: 42px;
    margin-left: 10px;
    background-color: #F4F4F4;
    padding-left: 5px;
    border-radius: 5px;
}
input:focus {
    outline: 0;
}
.icon{
  background-size: 20px;
  width: 50px;
  height: 32px;
  vertical-align: middle;
}


.conteudo{
    width: 100%;
    margin-left: 33%;
    margin-top: 50px;
    gap: 50px;
    /* position: absolute; */
}
.palavra{
    position: absolute;
    /* margin-top: 70px; */
}
.play{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 25%;
    background-color: #EAD1FA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    cursor: pointer;
}

 .destaque{
    color: #A447E5;
    font-weight: bold;
    margin-left: 5px;
}


.top-divider-horizontal{
    background-color:#F4F4F4;
    width: 50% ;
    margin-bottom: 25px;
    margin-top: 25px;
}

.bottom-divider-horizontal{
    background-color:#F4F4F4;
    width: 90% ;
    margin-top: 25px;
}

.palavra-destaque{
    font-weight: bold;
    font-style: italic;
    margin-top: 75px;
    margin-bottom: 5px;
}
.meanings{
    width: 50%;
    /* background-color: red; */
}
.text-example{
    margin-left: 5px;

}
ul{
    list-style: none;
}
li::before{
    content: '.';
    color: red;
    display: inline-block; 
    width: 1em;
    margin-left: -1em
}
button{
 border: none;
 background-color: transparent;
}
.source{
    color: #575757;
    margin-top: 25px;
}
.source-destaque{
    color: #575757;
    font-weight: bold;
}
.sinonimos{
    margin-top: 25px;
    color: #575757;
    font-size: 15px;
}
.not-found h1{
    color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 25px;
    font-size: 40px;
}
`

