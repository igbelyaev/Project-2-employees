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
            ],
            term: '',
            filter: 'all'
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

    // searchEmp = (items, term, filter) => {
    //     let arr = [];
        
    //     if (term.length != 0) {
    //         arr = items.filter(item => {
    //             return item.name.indexOf(term) > -1
    //         })
    //     } else { 
    //         arr = items; 
    //     }
        
    //     switch (filter) {
    //         case 'all':
    //             break;
    //         case 'promotion':
    //             arr = arr.filter(item => item.promotion );
    //             break;
    //         case '1000':
    //             arr = arr.filter(item => +item.salary >= 1000);
    //             break;    
    //     }

    //     return arr;
    // }

    searchEmp = (items, term) => {
        if (term.length === 0) { 
            return items; 
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }
    
    filter = (typeOf) => {
        this.setState({filter: typeOf});    
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.promotion);
            case '1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onNewSalary = (id, newValue) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: newValue}
                }
                return item;
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state;
        const emplAmount = this.state.data.length;
        const premiaAmount = this.state.data.filter(item => item.premia).length; 
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                    // data={this.state.data}
                    emplAmount={emplAmount}
                    premiaAmount={premiaAmount} />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onNewSalary={this.onNewSalary}/>
                <EmployeesAddForm
                    onSubmit={this.addRecord} />
            </div>
        )
    }
    
}

export default App;