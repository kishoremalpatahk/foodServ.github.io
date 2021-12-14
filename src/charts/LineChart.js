import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect, useRef } from 'react';
import { HistoryService } from '../service/HistoryService';
var x = 0;

export default function LineChart() {
  const [customers, setCustomers] = useState([]);
  var FoodPanda = 0, Swiggy = 0, UberEats = 0, Zomato = 0;
  const customerService = new HistoryService();
  useEffect(() => {
    customerService.getHistoryData().then(data => setCustomers(data));
  });

  return (
    <div>
      {customers.forEach(function (arrayItem) {
        if (arrayItem.vend === "FoodPanda") {
          FoodPanda = FoodPanda + arrayItem.price;
        }
      })}

      {customers.forEach(function (arrayItem) {
        if (arrayItem.vend === "Swiggy") {
          Swiggy = Swiggy + arrayItem.price;
        }
      })}

      {customers.forEach(function (arrayItem) {
        if (arrayItem.vend === "UberEats") {
          UberEats = UberEats + arrayItem.price;
        }
      })}
      {customers.forEach(function (arrayItem) {
        if (arrayItem.vend === "Zomato") {
          Zomato = Zomato + arrayItem.price;
        }
      })}
      <Bar
        data={
          {
            labels: ["FoodPanda", "Swiggy", "UberEats", "Zomato"],
            datasets: [
              {
                label: 'Sales RS VS Vendor',
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
                data: [FoodPanda, Swiggy, UberEats, Zomato]
              }
            ]
          }
        }
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  )
}


