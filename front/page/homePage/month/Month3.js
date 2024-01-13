import React from 'react'
import { BGImageContainer } from '../../../style/homeStyled/homeStyle'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import Ilovegon from '../../../assets/icon/gon/G2.svg'
import Itree from '../../../assets/icon/i_tree.svg'
import { useRecoilState } from 'recoil'
import { todoState } from '../../../atom/homeAtom'
import TodoModal from '../../modal'
function Month3({ navigation }) {

    const [modalVisible, setModalVisible] = useRecoilState(todoState);
    return (
        <BGImageContainer
            source={require('../../../assets/icon/BG3.png')}
            resizeMode="stretch"
        >
            <TouchableOpacity style={{ position: 'absolute', bottom: 95, left: '5%' }} onPress={() => setModalVisible(!modalVisible)}>
                <WithLocalSvg asset={Itree} width={150} height={150} />
            </TouchableOpacity>
            <View style={{ position: 'absolute', bottom: 200, left: '11%' }}>
                <WithLocalSvg asset={Ilovegon} width={120} height={120} />
            </View>
            <TodoModal />
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Month2')}>
                    <View>
                        <Text style={{ fontSize: 30, color: '#a0c4f8' }}>{`${'<'}`}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Month4')}>
                    <View>
                        <Text style={{ fontSize: 30, color: '#a0c4f8' }}>{`${'>'}`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </BGImageContainer>
    )
}

export default Month3