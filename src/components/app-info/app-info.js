import './app-info.css';

const AppInfo = (props) => {
    let premia = 0;
    const total = props.data.length;

    props.data.map(item => {
        if (item.premia) {premia++}
    })

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {total}</h2>
            <h2>Премию получат: {premia}</h2>
        </div>
    )
}

export default AppInfo;