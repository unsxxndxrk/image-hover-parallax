import React from 'react';

export default class Item extends React.Component {
    state = {
        x: 0,
        y: 0,
        position: {
            left: -50,
            top: -50
        }
    };

    parallax = (e) => {
        var self = e.target.getBoundingClientRect();

        this.setState({
            x: (e.clientX - self.left).toFixed(1),
            y: (e.clientY - self.top).toFixed(1),
            position: {
                left: -this.state.x / 5,
                top: -this.state.y / 5
            }
        });
    };

    dropParallax = () => {
        this.setState({
            position: {
                left: -50,
                top: -50
            }
        });
    };

    render () {
        return (
            <div className="item-wrapper">
                <div
                    style={{left: this.state.position.left, top: this.state.position.top}}
                    onMouseMove={this.parallax}
                    onMouseLeave={this.dropParallax}
                    title={this.props.title}
                    className="item"
                >
                </div>
            </div>
        )
    };
};
