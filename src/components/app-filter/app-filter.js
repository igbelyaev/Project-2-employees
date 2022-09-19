// import { Component } from 'react/cjs/react.development';
import './app-filter.css';


// Д.З. по настройке фильтров на нативном JS
// class AppFilter extends Component {
//     constructor (props) {
//         super(props);
//     }

//     onChoice = (e) => {
//         const btns = document.querySelectorAll('.btn-group button');
//         const typeOf = e.target.getAttribute('data-filter');

//         btns.forEach(element => {
//             element.classList.remove('btn-light', 'btn-outline-light');

//             if (element == document.querySelector(`[data-filter='${typeOf}']`)) {
//                 element.classList.add('btn-light');
//             } else {
//                 element.classList.add('btn-outline-light');
//             }
//         });

//         this.props.filter(typeOf);
//     }

//     render() {
        // return (
        //     <div className="btn-group">
//                 <button 
//                     className="btn btn-light"
//                     type="button"
//                     data-filter="all"
//                     onClick={(e) => {this.onChoice(e)}}>
//                         Все сотрудники
//                 </button>
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter="promotion"
//                     onClick={(e) => {this.onChoice(e)}}>
//                         На повышение
//                 </button>
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter="1000"
//                     onClick={(e) => {this.onChoice(e)}}>
//                         З/П больше 1000$
//                 </button>
//             </div>
//         )
//     }
// }

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'promotion', label: 'На повышение'},
        {name: '1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                type="button"   
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;