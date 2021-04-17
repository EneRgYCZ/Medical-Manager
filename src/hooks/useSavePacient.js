import { navigate } from '../navigationRef';
import { useContext, useState } from 'react';
import { Context as PacientContext } from '../context/PacientContext';

export default () => {

    const { createPacient } = useContext(PacientContext);

    const [nrSAP] = useState('');
    const [fullName] = useState('');
    const [dateOfReport] = useState('');
    const [clinicPetromed] = useState('');

    const savePacient = async () => {
        await createPacient(fullName, dateOfReport, clinicPetromed, nrSAP );
        reset();
        navigate('TrackList');
    };

    return[savePacient]
}