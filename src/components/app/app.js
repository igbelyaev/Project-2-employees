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
                {name: 'John C.', salary: 800, premia: true, promotion: true, id: 1},
                {name: 'Alex M.', salary: 3000, premia: false, promotion: false, id: 2},
                {name: 'Carl W.', salary: 7000, premia: true, promotion: false, id: 3}
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
                premia: true,
                id: this.maxId
            }
            
            this.maxId++;

            // const arr = this.state.data.slice();
            // arr.push(newItem);
            
            // this.setState(({data}) => {
            //     const arr = [...data, newItem];
            //     return {
            //         data: arr
            //     }
    
            // })
            
            this.setState(({data}) => {
                const arr = [...data, newItem];
                return {
                    data: arr
                }
    
            })
            
        }    
    }

    // onTogglePremia = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, premia: !old.premia};

    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, premia: !item.premia}
    //             }
    //             return item;
    //         })
    //     }))

    // }

    // onTogglePromotion = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, promotion: !item.promotion}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    
    render() {
        const emplAmount = this.state.data.length;
        const premiaAmount = this.state.data.filter(item => item.premia).length; 

        return (
            <div className="app">
                <AppInfo 
                    // data={this.state.data}
                    emplAmount={emplAmount}
                    premiaAmount={premiaAmount} />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onSubmit={this.addRecord} />
            </div>
        )
    }
    
}

export default App;