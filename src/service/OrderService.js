import axios from 'axios'

const API_HOST = "http://localhost:8000";
const baseURL = `${API_HOST}/order`;
export class ProductService {

    getOrderData () {
        return fetch(`${baseURL}`).then(res => res.json())
        
    }

    updateOrderStatus(row) {
        let id = row.id,
        timestamp = row.timestamp,
        order = row.order,
        price = row.price,
        vend  = row.vend,
        orderstatus = row.orderstatus;
         axios.post(`${baseURL}`, {id,timestamp,order,price,vend,orderstatus})   
         .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }
}