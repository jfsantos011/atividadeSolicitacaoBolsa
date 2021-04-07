import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class ImagemLogo extends Component {
    render(){
        let imagem = 'https://portal.unipam.edu.br/assets/media/img/logo/logo-4.png'
        return(
            <View style={style.container}>
                <Image
                    source={{uri: imagem}}
                    style={{ width: this.props.largura, height: this.props.altura }}
                />
                
            </View>
        )

    }
}

export default ImagemLogo;

const style = StyleSheet.create({
    container:{
        margin: 20,
        justifyContent: 'center',
        textAlign: 'center'
    }
})