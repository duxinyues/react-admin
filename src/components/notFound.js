import React from 'react';
import img404  from "../style/imgs/404.jpg"
class NotFound extends React.Component {
    state = {
        animated: '',
    };
    enter = () => {
        this.setState({ animated: 'hinge' });
    };
    render() {
        return (
            <div
                className="center"
                style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}
            >
                <img
                    src={img404} alt="404"
                    className={`animated swing ${this.state.animated}`}
                    onMouseEnter={this.enter}
                />
            </div>
        );
    }
}

export default NotFound;