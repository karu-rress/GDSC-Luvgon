import React from 'react'
import { BGImageContainer } from '../../../style/homeStyled/homeStyle'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import Ilovegon from '../../../assets/icon/i_lovegon.svg'
import Ifish from '../../../assets/icon/i_fish.svg'
import TodoModal from '../../modal'
import { useRecoilState } from 'recoil'
import { todoState } from '../../../atom/homeAtom'
function Month1({ navigation }) {
    const [modalVisible, setModalVisible] = useRecoilState(todoState);
    return (
        <BGImageContainer
            source={require('../../../assets/icon/BG1.png')}
            resizeMode="stretch"
        >
            <View style={{ position: 'absolute', bottom: -95, right: '20%' }}>
                <WithLocalSvg asset={Ilovegon} width={200} height={200} />
            </View>
            <TouchableOpacity style={{ position: 'absolute', bottom: 10, left: '5%' }} onPress={() => setModalVisible(true)}>
                <WithLocalSvg asset={Ifish} width={80} height={80} />
            </TouchableOpacity>
            <TodoModal />
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                <TouchableOpacity onPress={() => navigation.navigate('Month2')}>
                    <View>
                        <Text style={{ fontSize: 30, color: '#a0c4f8' }}>{`${'>'}`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </BGImageContainer>
    )
}

export default Month1