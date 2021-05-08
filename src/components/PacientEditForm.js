import { LogBox } from 'react-native';
import Spacer from '../components/Spacer';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context as PacientContext } from '../context/PacientContext';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const PacientEditForm = ({ _id, navigation }) => {

     LogBox.ignoreAllLogs();

     const { state } = useContext(PacientContext);

     const pacient = state.find(p => p._id === _id);

     const onChange = (event, selectedDate) => {
          const currentDate = selectedDate || date;
          setShow(Platform.OS === 'ios');
          setDate(currentDate);
     };

     const [nrSAP, setNrSAP] = useState('');
     const [address, setAddress] = useState('');
     const [fullName, setFullName] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [clinicPetromed, setClinicPetromed] = useState('');

     const [show, setShow] = useState(false);
     const [showDate, setShowDate] = useState(false);

     var [date, setDate] = useState(new Date());

     const showDatePicker = () => {
          setShow(true);
     };

     const dateAppearance = () => {
          setShowDate(true)
     };

     const clearFields = () => {
          setNrSAP('');
          setAddress('');
          setFullName('');
          setPhoneNumber('');
          setShowDate(false);
          setClinicPetromed('');
     };

     return (
          <>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <Spacer>
                         <Text style={styles.HeadingText}>Nume Complet</Text>
                         <Input
                              autoCompleteType='name'
                              placeholder={pacient.fullName}
                              value={fullName}
                              onChangeText={setFullName}
                              inputStyle={styles.InputText}
                              leftIcon={
                                   <Icon
                                        name='user'
                                        size={24}
                                        color='white'
                                   />
                              }
                         />
                    </Spacer>

                    <Spacer>
                         <Text style={styles.HeadingText}>Numar de telefon</Text>
                         <Input
                              placeholder={pacient.phoneNumber}
                              value={phoneNumber}
                              onChangeText={setPhoneNumber}
                              keyboardType='numeric'
                              inputStyle={styles.InputText}
                              leftIcon={
                                   <Icon
                                        name='phone'
                                        size={24}
                                        color='white'
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

                         <TouchableOpacity onPress={() => { showDatePicker(); dateAppearance(); }}>
                              <View style={styles.Container}>
                                   <Icon
                                        style={styles.Calendar}
                                        name='calendar'
                                        size={24}
                                        color='black'
                                   />
                                   {showDate ?
                                        (<Text style={styles.DateText}>{date.toLocaleDateString()}</Text>) :
                                        (<Text style={styles.DateText}>Alege data</Text>)
                                   }
                              </View>
                         </TouchableOpacity>
                    </Spacer>

                    <Spacer>
                         <Text style={styles.HeadingText}>Departament</Text>
                         <Input
                              placeholder={pacient.clinicPetromed}
                              value={clinicPetromed}
                              onChangeText={setClinicPetromed}
                              inputStyle={styles.InputText}
                              leftIcon={
                                   <Icon
                                        name='anchor'
                                        size={24}
                                        color='white'
                                   />
                              }
                         />
                    </Spacer>

                    <Spacer>
                         <Text style={styles.HeadingText}>Numar De Identificare</Text>
                         <Input
                              placeholder={pacient.nrSAP}
                              value={nrSAP}
                              onChangeText={setNrSAP}
                              inputStyle={styles.InputText}
                              leftIcon={
                                   <Icon
                                        name='anchor'
                                        size={24}
                                        color='white'
                                   />
                              }
                         />
                    </Spacer>

                    <Spacer>
                         <Text style={styles.HeadingText}>Adresa</Text>
                         <Input
                              placeholder={pacient.address}
                              value={address}
                              onChangeText={setAddress}
                              inputStyle={styles.InputText}
                              leftIcon={
                                   <Icon
                                        name='home'
                                        size={24}
                                        color='white'
                                   />
                              }
                         />
                    </Spacer>

                    <Spacer>
                         <Button
                              buttonStyle={styles.Button}
                              title="MODIFICA"
                              onPress={
                                   () => {
                                        navigation.navigate('PacientList')
                                        clearFields();
                                   }
                              }
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
          color: '#fb5b5a',
          fontWeight: 'bold',
     },
     Calendar: {
          marginLeft: 10,
          marginTop: 10,
          color: '#ffffff'
     },
     DateText: {
          marginBottom: 10,
          marginLeft: 10,
          marginTop: 10,
          fontSize: 20,
          color: 'white'
     },
     Container: {
          flexDirection: 'row',
     },
     Button: {
          backgroundColor: '#fb5b5a'
     },
     InputText: {
          color: 'white'
     }
});

export default PacientEditForm;