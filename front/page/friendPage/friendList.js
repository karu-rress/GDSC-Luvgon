import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Ifail from '../../assets/icon/i_fail.svg';
import Ipass from '../../assets/icon/i_pass.svg';
import Igoal from '../../assets/icon/i_home.svg';
import { WithLocalSvg } from 'react-native-svg';

const FriendList = () => {
    const friends = [
        { id: 1, name: '윤지', goalDetails: "그만하고 싶어요" },
        { id: 2, name: '선우', goalDetails: "거의 뭐 영어 마스터" },
        { id: 3, name: '원석', goalDetails: "저는 말이졍" },
        { id: 4, name: '선우' },
        { id: 5, name: '하연' },
        { id: 6, name: '여진' },
        { id: 7, name: 'Peach' },
        { id: 8, name: 'Grapes' },
    ];
    const peoples = [
        { id: 1, name: '윤지', email: "like@dfd", code: "like" },
        { id: 2, name: '선우', email: "like@dfd", code: "like" },
        { id: 3, name: '원석', email: "dfdfdfdf" },
        { id: 4, name: '선우', email: "dfdfdfdf" },
        { id: 5, name: '하연', email: "dfdfdfdf" },
        { id: 6, name: '여진', email: "dfdfdfdf" },
        { id: 7, name: 'Peach', email: "likefdsafsdfas@Adfa", code: "like" },
        { id: 8, name: 'Grapes', email: "dfdfdfdf" },
    ];

    const getStatusImage = (status) => {
        switch (status) {
            case 'pass':
                return Ipass;
            case 'fail':
                return Ifail;
            case 'goal':
                return Igoal;
            default:
                return null;
        }
    };

    const [expandedGoalId, setExpandedGoalId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleGoalDetails = (friendId) => {
        setExpandedGoalId(expandedGoalId === friendId ? null : friendId);
    };
    const renderFriends = () => {
        const filteredFriends = peoples.filter((people) => {
            const nameMatch = people.name.toLowerCase().includes(searchQuery.toLowerCase());
            const codeMatch = people.code && people.code.toLowerCase().includes(searchQuery.toLowerCase());
            return nameMatch || codeMatch;
        });

        return filteredFriends.map((friend) => (
            <View style={styles.item} key={friend.id}>
                <View style={styles.name}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Bazzi',
                            color: '#1a1a1a'
                        }}>{friend.name}</Text>
                    </View>

                    <View style={{ width: '100%', position: 'absolute', top: 38 }} >
                        <Text style={{ fontSize: 30, color: 'gray' }}>. . . . . . . . . . . . . . . . . . . .</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <WithLocalSvg asset={getStatusImage('pass')} width={85} height={35} />
                        <TouchableOpacity onPress={() => toggleGoalDetails(friend.id)} style={{ marginBottom: 16 }}>
                            <WithLocalSvg asset={getStatusImage('goal')} width={80} height={100} />
                        </TouchableOpacity>
                        <WithLocalSvg asset={getStatusImage('fail')} width={85} height={35} />
                    </View>
                </View>
                <View>
                    {expandedGoalId === friend.id && (
                        <View style={styles.goalDetailsContainer}>
                            <Text>{friend.goalDetails}</Text>
                        </View>
                    )}
                </View>
            </View>
        ));
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="친구검색"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />

            <ScrollView>
                <View style={styles.scrollContainer}>
                    {renderFriends()}
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#a0c4f8',
        padding: 20,
    },
    name: {
    },
    scrollContainer: {
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    item: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        marginBottom: 10
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        height: 90
    },
    goalImage: {
        width: 100,
        height: 100,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    passImage: {
        width: 100,
        height: 100,
        marginLeft: 5,
    },
    failImage: {
        width: 100,
        height: 100,
        marginRight: 5,
    },
    goalDetailsContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#eee',
    },
    searchInput: {
        height: 60,
        borderColor: 'gray',
        marginBottom: 10,
        paddingLeft: 20,
        fontFamily: 'Bazzi',
        fontSize: 18,
        backgroundColor: '#eeeeee',
        borderRadius: 10,
    },
});

export default FriendList;