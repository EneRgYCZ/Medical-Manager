import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
import createDataContext from './createDataContext';

const pacientReducer = (state, action) => {
    switch (action.type){
        case 'fetch_pacients':
            return action.payload; 
        default:
            return state
    }
}

const fetchPacients = dispatch => async () => {
    try{
        const response = await trackerApi.get("/pacients")
        dispatch({ type: 'fetch_pacients', payload: response.data })
    } catch (err) {
        console.log(err)
    }
}

const createPacient = dispatch => async (fullName, dateOfReport, clinicPetromed, nrSAP) => {
    await trackerApi.post('/pacients', { fullName, dateOfReport, clinicPetromed, nrSAP });
    navigate('TrackList');
};

export const { Provider, Context } = createDataContext(
    pacientReducer,
    { fetchPacients, createPacient },
    []
);