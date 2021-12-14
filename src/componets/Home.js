import React from 'react'
import { useState, useEffect } from 'react';
import Info from '../info/Info';
import '../css/Home.css';
import  DoughnutChart from "../charts/DoughnutChart";
import  LineChart  from "../charts/LineChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductService } from '../service/OrderService';

const productService = new ProductService();
export default function Home() {

    const [order, setorder] = useState([])
  
    useEffect(() => {
        productService.getOrderData()
    }, [])


    return (
        <div class="home">
        <div className="row">
            <Info />
        </div>
        <div className="row">
        <div className="col-sm-8"><LineChart/></div>
        <div className="col-sm-4"> <DoughnutChart/></div>
        </div>
        </div>
    )
}
