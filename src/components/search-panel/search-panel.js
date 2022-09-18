import { Component } from 'react/cjs/react.development';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdate = (e) => {
        const term = e.target.value;

        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdate}/>
        )
    }       
}

export default SearchPanel;