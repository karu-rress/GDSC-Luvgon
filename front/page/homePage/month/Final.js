import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing, Text } from 'react-native';
import Gon from '../../../assets/icon/gon/G12.svg';
import b1 from '../../../assets/icon/b1.png';
import b2 from '../../../assets/icon/b2.png';
import b3 from '../../../assets/icon/b3.png';
import b4 from '../../../assets/icon/b4.png';
import b5 from '../../../assets/icon/b5.png';
import b6 from '../../../assets/icon/b6.png';
import b7 from '../../../assets/icon/b7.png';
import b8 from '../../../assets/icon/b8.png';
import b9 from '../../../assets/icon/b9.png';
import b10 from '../../../assets/icon/b10.png';
import b11 from '../../../assets/icon/b11.png';
import { WithLocalSvg } from 'react-native-svg';

const Final = () => {
    const translateY = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(translateY, {
                toValue: -250,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: false,
            }),
            Animated.parallel([
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.ease,
                    useNativeDriver: false,
                }),
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.ease,
                    useNativeDriver: false,
                }),
            ]),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dragon, { transform: [{ translateY }] }]}>
                <WithLocalSvg asset={Gon} width={100} height={100} />
            </Animated.View>
            <Animated.View
                style={[
                    styles.explosionContainer,
                    {
                        transform: [{ scale }],
                        opacity: scale.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                        }),
                    },
                ]}
            >
                <Image source={b1} style={styles.explosionImage} />
                <Image source={b2} style={styles.explosionImage} />
                <Image source={b3} style={styles.explosionImage} />
                <Image source={b4} style={styles.explosionImage} />
                <Image source={b5} style={styles.explosionImage} />
                <Image source={b6} style={styles.explosionImage} />
                <Image source={b7} style={styles.explosionImage} />
                <Image source={b8} style={styles.explosionImage} />
                <Image source={b9} style={styles.explosionImage} />
                <Image source={b10} style={styles.explosionImage} />
                <Image source={b11} style={styles.explosionImage} />
            </Animated.View>
            <Animated.Text style={[styles.text, { opacity: textOpacity }]}>
                이거나 먹고 떨어져용!!
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#87CEEB',
    },
    dragon: {
        marginBottom: 20,
    },
    dragonImage: {
        width: 200,
        height: 200,
    },
    explosionContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    explosionImage: {
        width: 70,
        height: 70,
    },
    text: {
        fontSize: 24,
        color: 'white',
        marginTop: 20,
    },
});

export default Final;