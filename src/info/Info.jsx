import React from 'react'
import '../css/Info.css'
import { Clear, Add, LocalDining, TwoWheeler } from '@material-ui/icons';
import { HistoryService } from '../service/HistoryService';
import { useState, useEffect, useRef } from 'react';



export default function Info() {

    const [customers, setCustomers] = useState([]);

    const customerService = new HistoryService();
    useEffect(() => {
        customerService.getHistoryData().then(data => setCustomers(data));
    });

    var x = 0,y=0,z=0,a=0;
    return (
        <div className="row" >
            <span className="col-sm-3">
                <div className="feature" id="widget1">
                    <span className="featuretitle">Order Rejected</span>
                    <br />
                    <span className="featureContener">
                        <span className="featurenumber">
                            {customers.forEach(function (arrayItem) {
                                if (arrayItem.orderstatus === "Reject") {
                                    x = x+1;
                                }
                            }),x}
                        </span>
                        <span className="featureValue">
                            <Clear />
                        </span>
                    </span>
                </div>
            </span>
            <span className="col-sm-3">
                <div className="feature" id="widget2">
                    <span className="featuretitle"> Total Orders </span>
                    <br />
                    <span className="featureContener">
                        <span className="featurenumber">
                        {customers.forEach(function (arrayItem) {
                                if (arrayItem.orderstatus !== "Reject") {
                                    y = y+1;
                                }
                            }),y}
                        </span>
                        <span className="featureValue">
                            <Add />
                        </span>
                    </span>
                </div>
            </span>
            <span className="col-sm-3">
                <div className="feature" id="widget3">
                    <span className="featuretitle"> Order Ready </span>
                    <br />
                    <span className="featureContener">
                        <span className="featurenumber">
                        {customers.forEach(function (arrayItem) {
                                if (arrayItem.orderstatus === "FoodReady") {
                                    z = z+1;
                                }
                            }),z}
                        </span>
                        <span className="featureValue">
                            < LocalDining />
                        </span>
                    </span>
                </div>
            </span>
            <span className="col-sm-3">
                <div className="feature" id="widget1">
                    <span className="featuretitle"> Pakaging Done </span>
                    <br />
                    <span className="featureContener">
                        <span className="featurenumber">
                        {customers.forEach(function (arrayItem) {
                                if (arrayItem.orderstatus === "Done") {
                                    a = a+1;
                                }
                            }),a}
                        </span>
                        <span className="featureValue">
                            <TwoWheeler />
                        </span>
                    </span>
                </div>
            </span>
        </div>
    )
}
