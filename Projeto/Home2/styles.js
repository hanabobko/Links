import styled from 'styled-components/native';



// CSS DOS ITENS DE SERVIÇOS DA HOME IMOBILIARIA
export const Logo = styled.Image`
    width: 150px;
    height: 150px;
    position: absolute;
    display: flex;
    left: 30%;
    right: 0;
    top: 38%;
    bottom: 0;
    z-index: 99;
`;

export const ContentSetores = styled.View`
    flex: 8;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
`;
export const ContentTop = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #FFF;
`;
export const Vistoria = styled.TouchableOpacity`
    flex: 1;
    background-color: #4EA7FF;
    align-items: center;
    border: 3px;
    border-color: #FFF;
    
`;
export const TextVistoria = styled.Text`
    margin-top: 15%;
    font-size: 40px;
    color: #FFF;
    font-weight: bold;
`;
export const Comercial = styled.TouchableOpacity`
    flex: 1;
    background-color: #C1DAEB;
    border: 3px;
    border-color: #FFF;
    
`;
export const TextComercial = styled.Text`
    margin-top: 20%;
    margin-left: 7%;
    font-size: 35px;
    color: #FFF;
    font-weight: bold;
`;

export const ContentBottom = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    

`;
export const Analise = styled.TouchableOpacity`
    flex: 1;
    background-color: #5189C1;
    border: 3px;
    border-color: #FFF;
    

`;
export const TextAnalise = styled.Text`
    margin-left: 15%;
    margin-top: 20%;
    font-size: 35px;
    color: #FFF;
    font-weight: bold;
`;
export const Sinistro = styled.TouchableOpacity`
    flex: 1;
    background-color: #04213F;
    border: 3px;
    border-color: #FFF;
    

`;
export const TextSinistro = styled.Text`
    margin-left: 18%;
    margin-top: 20%;
    font-size: 35px;
    color: #FFF;
    font-weight: bold;
`;




 