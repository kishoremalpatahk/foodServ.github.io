import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import {HistoryService}  from '../service/HistoryService';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

import '../css/History.css';
import '../css/theme.css';
import 'primeicons/primeicons.css';
//import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css'
import { InputText } from 'primereact/inputtext';

export default function History() {
    const DataTablePaginator = () => {

        const [customers, setCustomers] = useState([]);
        const [first2, setFirst2] = useState(0);
        const [rows2, setRows2] = useState(8);
        const [globalFilterValue, setGlobalFilterValue] = useState('');
        const [filters, setFilters] = useState({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'title': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            'foodready': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        })
        
    
        const customerService = new HistoryService();
    
    
        const onCustomPage2 = (event) => {
            setFirst2(event.first);
            setRows2(event.rows);
        }
        
        const onGlobalFilterChange = (e) => {
            const value = e.target.value;
            let _filters = { ...filters };
            _filters['global'].value = value;
    
            setFilters(_filters);
            setGlobalFilterValue(value);
        }

        const renderHeader = () => {
            return (
                <div className="p-d-flex p-jc-between p-ai-center">
                    <h5 className="p-m-0">Customers</h5>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                    </span>
                </div>
            )
        }
    
        useEffect(() => {
            customerService.getHistoryData().then(data => setCustomers(data));
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    
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
        const header = renderHeader();
        return (
            <div className="history">
                <div className="card"> 
                   <DataTable value={customers} paginator className="p-datatable-customers" header={header} first={first2} rows={rows2} onPage={onCustomPage2}
                    rowsPerPageOptions={[10,25,50]}
                    dataKey="id"
                    filters={filters} filterDisplay="menu"  responsiveLayout="scroll"
                    globalFilterFields={['id', 'timestamp', 'order', 'price', 'vend','orderstatus']} emptyMessage="No customers found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                   <Column field="id" header="Code"  style={{ width: '20%' }}></Column>
                    <Column field="timestamp" header="Time"  style={{ width: '20%' }}></Column>
                    <Column field="order" header="Name"  style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price"  style={{ width: '20%' }}></Column>
                    <Column field="vend" header="Vendor"  style={{ width: '20%' }}></Column>
                    <Column field="orderstatus" header="Status" style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
    return DataTablePaginator();
       
    
}

