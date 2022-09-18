import { Component } from 'react/cjs/react.development';
import './app-filter.css';

class AppFilter extends Component {
    constructor (props) {
        super(props);
    }

    onChoice = (e) => {
        const btns = document.querySelectorAll('.btn-group button');
        const typeOf = e.target.getAttribute('data-filter');

        console.log(typeOf);

        btns.forEach(element => {
            element.classList.remove('btn-light', 'btn-outline-light');

            if (element == document.querySelector(`[data-filter='${typeOf}']`)) {
                element.classList.add('btn-light');
            } else {
                element.classList.add('btn-outline-light');
            }
        });

        this.props.filter(typeOf);
    }

    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    data-filter="all"
                    onClick={(e) => {this.onChoice(e)}}>
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    data-filter="promotion"
                    onClick={(e) => {this.onChoice(e)}}>
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    data-filter="1000"
                    onClick={(e) => {this.onChoice(e)}}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;