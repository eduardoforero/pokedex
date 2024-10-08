import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;