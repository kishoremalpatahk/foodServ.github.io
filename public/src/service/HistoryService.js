import axios from 'axios'

const API_HOST = "http://localhost:8000";
const baseURL = `${API_HOST}/history`;
export class HistoryService {

    getHistoryData () {
        return fetch(`${baseURL}`).then(res => res.json())
        
    }

}