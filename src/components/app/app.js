import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, premia: true, id: 1},
                {name: 'Alex M.', salary: 3000, premia: false, id: 2},
                {name: 'Carl W.', salary: 7000, premia: true, id: 3}
            ]
        }
        this.maxId = 4;
        this.newRecord = {
            name: '',
            salary: '',
            premia: false,
            id: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id == id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            
            // const neArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addRecord = (name, salary) => {
                
        if (name !== '' && salary !== '') {
            const newItem = {
                name, 
                salary,
                increase: false,
                id: this.maxId
            }
            
            // this.newRecord.name = name;
            // this.newRecord.salary = salary;
            // this.newRecord.id = this.maxId;
            this.maxId++;

            // const newItem = this.newRecord;
            const arr = this.state.data.slice();


            arr.push(newItem);
            // arr.push(this.newRecord);
            // console.log(this.newRecord);
            // console.log(arr);
            // console.log(this.maxId);

            this.setState(({data}) => {
                // const arr = [...data, newItem];
                return {
                    data: arr
                }
    
            })   
        }    
    }


    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onSubmit={this.addRecord} />
            </div>
        )
    }
    
}

export default App;