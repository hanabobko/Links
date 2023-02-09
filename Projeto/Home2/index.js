import React from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Background, ContainerMaster, Body, Cont, ContainerMasterentHeader } from "../../styles/Styles";
import { ContentSetores, ContentTop, ContentBottom, Vistoria, Comercial, Analise, Sinistro, TextVistoria, TextComercial, TextSinistro, TextAnalise, Logo} from "./styles"
import ComercialHome from "../../cadastros/Comercial";
import VistoriaTeste from "../../cadastros/VistoriaTeste";
import AnaliseHome from "../../cadastros/Analise";
import SinistroHome from "../../cadastros/Sinistros";

export default function Home2() {
    const navigation = useNavigation();
    return (
        <Background>
            <ContainerMaster>
                <ContentSetores>
                    <ContentTop>
                        <Vistoria  onPress={ () => navigation.navigate('Home') }>
                            <TextVistoria>Vistoria</TextVistoria>
                                <MaterialCommunityIcons style={{
                                    alignItems:'center', 
                                    justifyContent:'center', 
                                    marginTop:30}} 
                                    name="clipboard-text-outline" 
                                    size={80} 
                                    color="white"
                                    />
                        </Vistoria>
                        <Comercial onPress={ () => navigation.navigate('ComercialHome') }>
                            <TextComercial>Comercial</TextComercial>
                                <MaterialCommunityIcons style={{
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    left:50,
                                    top:-10}} 
                                    name="handshake-outline" 
                                    size={80} 
                                    color="white" 
                                />
                        </Comercial >
                    </ContentTop>
                <Logo
                    source={require('../../assets/logo.png')}
                />
                    <ContentBottom>
                        <Analise onPress={ () => navigation.navigate('AnaliseHome') }>
                            <MaterialCommunityIcons style={{
                                alignItems:'center', 
                                justifyContent:'center', 
                                left:40, 
                                marginTop:100}} 
                                name="note-search-outline" 
                                size={80} 
                                color="white" 
                                />
                            <TextAnalise>Análise</TextAnalise>
 
                        </Analise>
                            <Sinistro onPress={ () => navigation.navigate('SinistroHome') }>
                                <MaterialCommunityIcons style={{
                                    alignItems: 'center', 
                                    left:50, 
                                    marginTop:100,
                                    }} 
                                    name="home-lightning-bolt-outline" 
                                    size={80} 
                                    color="white" 
                                    />
                                <TextSinistro>Sinistro</TextSinistro>
                        </Sinistro>
                    </ContentBottom>
                </ContentSetores>
            </ContainerMaster>
        </Background>
    )
}

