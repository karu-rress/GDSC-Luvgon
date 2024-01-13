import React from 'react'
import i_lovegon from '../../assets/icon/i_lovegon.svg'
import i_loginC from '../../assets/icon/i_loginC.svg'
import i_google from '../../assets/icon/i_google.svg'
import { WithLocalSvg } from 'react-native-svg'
import { LoginButtonText, LoginButton, LoginView } from '../../style/loginStyled/loginStyle'
import { StyleSheet, View } from 'react-native'
import { BazziText } from '../../common/textSet'
import { googleRe } from '../../api/auth'
function LoginScreen() {
    return (
        <LoginView>
            <View>
                <View style={{ position: 'absolute', bottom: 250, left: 100 }}>
                    <WithLocalSvg asset={i_loginC} width={130} height={130} />
                </View>
                <WithLocalSvg asset={i_lovegon} width={250} height={250} />
            </View>
            <LoginButton onPress={() => googleRe()}>
                <WithLocalSvg asset={i_google} width={30} height={30} style={{ position: 'absolute', left: 30 }} />
                <BazziText style={style.fontColor}>로그인</BazziText>
            </LoginButton>
        </LoginView >
    )
}
const style = StyleSheet.create({
    fontColor: {
        fontSize: 21,
        textAlign: 'center',
        color: '#000000'
    }
})

export default LoginScreen