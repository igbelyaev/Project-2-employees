import { Component } from "react/cjs/react.production.min";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            premia: false,
            promotion: false
        }
    }

    onPremia = () => {
        this.setState(({premia}) => ({
            premia: !premia
        }))
    }

    onPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {premia, promotion} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (premia) {
            classNames += ' increase';
        }
        if (promotion) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onPromotion}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " 
                        onClick={this.onPremia}>
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