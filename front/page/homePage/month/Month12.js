import React from 'react'
import { BGImageContainer } from '../../../style/homeStyled/homeStyle'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import Ilovegon from '../../../assets/icon/gon/G11.svg'
import Icloud from '../../../assets/icon/i_cloud.svg'
import { todoState } from '../../../atom/homeAtom'
import TodoModal from '../../modal'
import { useRecoilState } from 'recoil'
function Month12({ navigation }) {

    const [modalVisible, setModalVisible] = useRecoilState(todoState);
    return (
        <BGImageContainer
            source={require('../../../assets/icon/BG6.png')}
            resizeMode="stretch"
        >
            <TouchableOpacity style={{ position: 'absolute', top: 60, left: '10%' }} onPress={() => setModalVisible(!modalVisible)}>
                <WithLocalSvg asset={Icloud} width={150} height={150} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', top: 240, right: '8%' }} onPress={() => setModalVisible(!modalVisible)}>
                <WithLocalSvg asset={Icloud} width={150} height={150} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', bottom: 80, left: '12%' }} onPress={() => setModalVisible(!modalVisible)}>
                <WithLocalSvg asset={Icloud} width={150} height={150} />
            </TouchableOpacity>
            <View style={{ position: 'absolute', top: 30, left: '17%' }}>
                <WithLocalSvg asset={Ilovegon} width={120} height={120} />
            </View>
            <TodoModal />
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Month11')}>
                    <View>
                        <Text style={{ fontSize: 30, color: '#a0c4f8' }}>{`${'<'}`}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Final')}>
                    <View>
                        <Text style={{ fontSize: 30, color: '#a0c4f8' }}>{`${'>'}`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </BGImageContainer>
    )
}

export default Month12