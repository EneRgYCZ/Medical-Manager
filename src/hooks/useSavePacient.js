import { useContext } from 'react';
import { navigate } from '../navigationRef';
import { Context as PacientContext } from '../context/PacientContext';

export default () => {

    const { createPacient } = useContext(PacientContext);

    const savePacient = async (fullName, dateOfReport, clinicPetromed, nrSAP) => {
        try {
            await createPacient(fullName, dateOfReport, clinicPetromed, nrSAP);
            navigate('TrackList');
        } catch (err) {
            console.log(err);
        }
    };

    return[savePacient]
}