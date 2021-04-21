import Spacer from '../components/Spacer';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context as PacientContext } from '../context/PacientContext';
import RNDateTimePicker  from '@react-native-community/datetimepicker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const PacientForm = () => {

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const { createPacient } = useContext(PacientContext)

    const [nrSAP, setNrSAP] = useState('');
    const [fullName, setFullName] = useState('');
    const [clinicPetromed, setClinicPetromed] = useState('');

    const [show, setShow] = useState(false);

    var [date, setDate] = useState(new Date());
    
    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer>
                    <Text style={styles.HeadingText}>Nume Complet</Text>
                    <Input
                        placeholder='Nume Complet'
                        value={fullName}
                        onChangeText={setFullName}
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </Spacer>

                <Spacer>
                    <Text style={styles.HeadingText}>Data raportarii</Text>

                    {show && (
                        <RNDateTimePicker
                            value={date}
                            display="calendar"
                            onChange={onChange}
                        />
                    )}

                    <View style={styles.Container}>   
                        <TouchableOpacity onPress={showDatePicker}>
                            <Icon
                                style={styles.Icon}
                                name='calendar'
                                size={24}
                                color='black'
                            />
                        </TouchableOpacity>
                        <Text style = {styles.dateText}>{date.toLocaleDateString()}</Text>
                    </View>
                </Spacer>

                <Spacer>
                    <Text style={styles.HeadingText}>Departament</Text>
                    <Input
                        placeholder='Departament'
                        value={clinicPetromed}
                        onChangeText={setClinicPetromed}
                        leftIcon={
                            <Icon
                                name='anchor'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </Spacer>

                <Spacer>
                    <Text style={styles.HeadingText}>Numar SAP</Text>
                    <Input
                        placeholder='Number SAP'
                        value={nrSAP}
                        onChangeText={setNrSAP}
                        leftIcon={
                            <Icon
                                name='anchor'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </Spacer>

                <Spacer>
                    <Button
                        title="CREAZA PACIENT"
                        onPress={() => createPacient(fullName, date.toLocaleDateString(), clinicPetromed, nrSAP)}
                    />
                </Spacer>
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 17,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    Icon : {
        marginLeft : 10,
        marginTop: 10
    }, 
    dateText: {
        marginLeft : 10,
        marginTop: 10,
        fontSize : 20
    },
    Container : {
        flexDirection : 'row',
    }
});

export default PacientForm;