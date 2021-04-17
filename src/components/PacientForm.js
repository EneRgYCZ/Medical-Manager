import Spacer from '../components/Spacer';
import { StyleSheet, Text } from 'react-native';
import React, { useState, useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context as PacientContext } from '../context/PacientContext'

const PacientForm = () => {

    const { createPacient } = useContext(PacientContext)

    const [nrSAP, setNrSAP] = useState('');
    const [fullName, setFullName] = useState('');
    const [dateOfReport, setDateOfReport] = useState('');
    const [clinicPetromed, setClinicPetromed] = useState('');

    return (
        <>
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
                <Input
                    placeholder='Data raportarii'
                    value={dateOfReport}
                    onChangeText={setDateOfReport}
                    leftIcon={
                        <Icon
                            name='calendar'
                            size={24}
                            color='black'
                        />
                    }
                />
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
                    onPress={() => createPacient(fullName, dateOfReport, clinicPetromed, nrSAP)}
                />
            </Spacer>
        </>
    );
};


const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 17,
        paddingLeft: 10,
        fontWeight: 'bold'
    }
});

export default PacientForm;