import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
import { useRecoilState } from 'recoil';
import { todoState } from '../atom/homeAtom';
import { BazziText } from '../common/textSet';

function TodoModal() {
    const [modalVisible, setModalVisible] = useRecoilState(todoState);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        // setNewTask('');
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            // setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
        setTasks(updatedTasks);
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                        <Text style={{ fontSize: 22, color: '#000000' }}>x</Text>
                    </TouchableOpacity>
                    <BazziText style={styles.fontColor}>목표 설정</BazziText>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="새로운 목표 추가"
                            value={newTask}
                            onChangeText={(text) => setNewTask(text)}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addTask}>
                            <BazziText style={styles.fontColor}>추가</BazziText>
                        </TouchableOpacity>
                    </View>
                    {tasks.map((task, index) => (
                        <View key={index} style={styles.taskItem}>
                            <BazziText style={styles.fontColor}>{task.text}</BazziText>
                            <TouchableOpacity onPress={() => toggleTask(index)}>
                                <BazziText>{task.completed ? '✔' : '○'}</BazziText>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        right: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '60%',
        marginVertical: 10,
        paddingLeft: 10,
        borderRadius: 8,
        fontFamily: 'Bazzi',
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginBottom: 5,
    },
    fontColor: {
        fontSize: 20,
        color: '#1A1A1A'
    }
});

export default TodoModal