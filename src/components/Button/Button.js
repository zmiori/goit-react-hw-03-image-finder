import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button type="button" className="Button" onClick={this.props.loadMore}>
        Load More
      </button>
    );
  }
}

export default Button;
