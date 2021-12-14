import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { useState, useEffect, useRef } from 'react';
import { HistoryService } from '../service/HistoryService';


export default function DoughnutChart(){
  const [customers, setCustomers] = useState([]);
  const customerService = new HistoryService();
  useEffect(() => {
      customerService.getHistoryData().then(data => setCustomers(data));
  });

  var FoodPanda= 0,Swiggy= 0,UberEats= 0,Zomato=0;
    return (
      <div>
        {customers.forEach(function (arrayItem) {
          if (arrayItem.vend === "FoodPanda") {
            FoodPanda = FoodPanda + 1;
          }
        })}

        {customers.forEach(function (arrayItem) {
          if (arrayItem.vend === "Swiggy") {
            Swiggy = Swiggy + 1;
          }
        })}

        {customers.forEach(function (arrayItem) {
          if (arrayItem.vend === "UberEats") {
            UberEats = UberEats + 1;
          }
        })}
        {customers.forEach(function (arrayItem) {
          if (arrayItem.vend === "Zomato") {
            Zomato = Zomato + 1;
          }
        })}
        <Doughnut
          data={
            {
              labels: ["FoodPanda", "Swiggy", "UberEats", "Zomato"],
              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: [
                    '#4e73df',
                    '#1cc88a',
                    '#36b9cc',
                    '#f6c139'
                  ],
                  hoverBackgroundColor: [
                  '#f6c118',
                  '#35b8cc',
                  '#1cc68a',
                  '#4e85df'
                  ],
                  data: [FoodPanda,Swiggy,UberEats,Zomato]
                }
              ]
            }
          }
          options={{
            title:{
              display:true,
              text:'Average sales per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

