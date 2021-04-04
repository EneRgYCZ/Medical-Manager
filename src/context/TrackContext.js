import createDataContext from './createDataContext'
import trackerApi from '../api/tracker';

const trackRecucer = (state, action) => {
    switch (action.type){
        case 'fetch_Tracks':
            return action.payload; 
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_Tracks', payload: response.data })
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
}

export const { Provider, Context } = createDataContext(
    trackRecucer,
    { fetchTracks, createTrack },
    []
)