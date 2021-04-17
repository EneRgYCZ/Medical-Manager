import React, { useState } from 'react';
import Spacer from '../components/Spacer';
import { StyleSheet, Text } from 'react-native';
import useSavePacient from '../hooks/useSavePacient';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const PacientForm = () => {

    const [nrSAP, setNrSAP] = useState('');
    const [fullName, setFullName] = useState('');
    const [dateOfReport, setDateOfReport] = useState('');
    const [clinicPetromed, setClinicPetromed] = useState('');

    const [savePacient] = useSavePacient();

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
                    onPress={savePacient}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    HeadingText: {
        paddingLeft: 10,
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default PacientForm;