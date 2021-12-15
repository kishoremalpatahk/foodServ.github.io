import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import '../css/Datatable.css';
import {HistoryService}  from '../service/HistoryService';
import {ChefService}  from '../service/ChefService';
import store from '../store/Store';

import React, { useState, useEffect, useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/OrderService';

export default function Order() {
    // const state = store.getState();
    const state = sessionStorage.getItem("usertype");
    const myToast = useRef(null);
    const [products, setProducts] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [filteredData, setFilteredData] = useState(products);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(5);

    const dataTableFuncMap = {
        'products': setProducts,
         
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 8, value: 8 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="p-mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };
    const DataTableDynamicDemo = () => {
        useEffect(() => {
            customerService.getHistoryData().then(data => setProducts2(data));
            fetchProductData('products');

        }, []);
        const customerService = new HistoryService();
        const productService = new ProductService();
        const updateService = new ChefService();
        const fetchProductData = (productStateKey) => {
            productService.getOrderData().then(data => dataTableFuncMap[`${productStateKey}`](data))

        }
        const onRowEditComplete1 = (e) => {
            productService.updateOrderStatus(e.newData);
            let _products = [...products];
            let { newData, index } = e;

            _products[index] = newData;

            setProducts(_products);
            window.location.reload(false);
        }
        const onRowEditComplete2 = (e) => {
            updateService.UpdateData(e.newData);
            let _products = [...products2];
            let { newData, index } = e;

            _products[index] = newData;

            setProducts2(_products);
            window.location.reload(false);
        }

        const statusBodyTemplate = (rowData) => {

            return getStatusLabel(rowData.orderstatus);
        }
        const onCustomPage = (event) => {
            setFirst2(event.first);
            setRows2(event.rows);
        }
        const getStatusLabel = (status) => {
            if (state === "admin") {
                switch (status) {
                    case 'Accept':
                        return 'Accept Order';

                    case 'Reject':
                        return 'Reject Order';

                    case 'New':
                        return 'New Order';

                    default:
                        return 'NA';
                }
            }
            if (state === "chef") {
                switch (status) {
                    case 'Preparation':
                        return 'Preparation Start';

                    case 'FoodReady':
                        return 'Food Ready';
                    case 'Accept':
                        return 'Accept Order';

                    default:
                        return 'NA';
                }
            }
            if (state === "packaging") {
                switch (status) {
                    case 'Packaging':
                        return 'Packaging Order';

                    case 'Done':
                        return 'Packaging Done';
                    case 'FoodReady':
                        return 'Food Ready';

                    default:
                        return 'NA';
                }
            }
        }
        const statuses2 = [
            { label: 'Food Ready', value: 'FoodReady' },
            { label: 'Accept Order', value: 'Accept' },
        ];
        const statuses3 = [
            { label: 'Packaging Done', value: 'Done' },
            { label: 'Food Ready', value: 'FoodReady' },
        ];
        const statuses = [
            { label: 'Accept Order', value: 'Accept' },
            { label: 'Reject Order', value: 'Reject' },
            { label: 'New Order', value: 'New' },
        ];

        const statusEditor = (options) => {
            return (
                <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                    onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                    itemTemplate={(option) => {
                        return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                    }} />
            );
        }
        const statusEditor2 = (options) => {
            return (
                <Dropdown value={options.value} options={statuses2} optionLabel="label" optionValue="value"
                    onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                    itemTemplate={(option) => {
                        return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                    }} />
            );
        }
        const statusEditor3 = (options) => {
            return (
                <Dropdown value={options.value} options={statuses3} optionLabel="label" optionValue="value"
                    onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                    itemTemplate={(option) => {
                        return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                    }} />
            );
        }
        const adminteam = () => {
            return (
                <div className="datatable-editing-demo">
                    <div className="card p-fluid" id="row">
                        <h5>Admin Table</h5>
                        <DataTable value={products && products.length > 0 && products.filter((products) => products.orderstatus.includes("New"))} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll"
                            paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage} responsiveLayout="scroll">
                            <Column field="id" header="Code" style={{ width: '20%' }}></Column>
                            <Column field="timestamp" header="Time" style={{ width: '20%' }}></Column>
                            <Column field="order" header="Name" style={{ width: '20%' }}></Column>
                            <Column field="price" header="Price" style={{ width: '20%' }}></Column>
                            <Column field="vend" header="Vendor" style={{ width: '20%' }}></Column>
                            <Column field="orderstatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    </div>
                </div>
            );
        }
        const foodteam = () => {
            return (
                <div className="datatable-editing-demo">
                    <div className="card p-fluid" id="row">
                        <h5>Foodteam Table</h5>
                        <DataTable value={products2 && products2.length > 0 && products2.filter((products2) => products2.orderstatus.includes("Accept"))} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll"
                            paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage} responsiveLayout="scroll">
                            <Column field="id" header="Code" style={{ width: '20%' }}></Column>
                            <Column field="timestamp" header="Time" style={{ width: '20%' }}></Column>
                            <Column field="order" header="Name" style={{ width: '20%' }}></Column>
                            <Column field="price" header="Price" style={{ width: '20%' }}></Column>
                            <Column field="vend" header="Vendor" style={{ width: '20%' }}></Column>
                            <Column field="orderstatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor2(options)} style={{ width: '20%' }}></Column>
                            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    </div>
                </div>
            );
        }
        const packagingteam = () => {
            return (
                <div className="datatable-editing-demo">
                    <div className="card p-fluid" id="row">
                        <h5>Packaging Table</h5>
                        <DataTable value={products2 && products2.length > 0 && products2.filter((products2) => products2.orderstatus.includes("FoodReady"))} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll"
                            paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage} responsiveLayout="scroll">
                            <Column field="id" header="Code" style={{ width: '20%' }}></Column>
                            <Column field="timestamp" header="Time" style={{ width: '20%' }}></Column>
                            <Column field="order" header="Name" style={{ width: '20%' }}></Column>
                            <Column field="price" header="Price" style={{ width: '20%' }}></Column>
                            <Column field="vend" header="Vendor" style={{ width: '20%' }}></Column>
                            <Column field="orderstatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor3(options)} style={{ width: '20%' }}></Column>
                            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    </div>
                </div>
            );
        }
        const gettablerow = (status) => {
            if (state === "admin") {
                return adminteam();
            }
            if (state === "chef") {
                return foodteam();
            }
            if (state === "packaging") {
                return packagingteam();
            }
        }
        return gettablerow(state)
    }

    return DataTableDynamicDemo();
}

