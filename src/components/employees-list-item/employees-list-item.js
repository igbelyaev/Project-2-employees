import { Component } from "react/cjs/react.development";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: props.salary
        }
    }

    onNewSalary = (e) => {
        let newValue = e.target.value.replace(/\D/g, '');
        
        if (newValue.replace(/\D/g, '') === '') {
            newValue = this.props.salary;
            return;    
        } 

        this.setState(() => {
            return {
                salary: newValue
            }
        })

        this.props.onNewSalary(newValue);
    }

    render() {

        const {name, onDelete, onToggleProp, premia, promotion} = this.props;
        
        let classNames = "list-group-item d-flex justify-content-between";
        if (premia) {
            classNames += ' increase';
        }
        if (promotion) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="promotion">{name}</span>
                <input type="text" className="list-group-item-input" 
                    value={this.state.salary + '$'} 
                    onChange={this.onNewSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " 
                        onClick={onToggleProp}
                        data-toggle="premia">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>        
        )
    }
    
}

export default EmployeesListItem;