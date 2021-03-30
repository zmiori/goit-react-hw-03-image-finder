import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <button type="button" className="Button" onClick={loadMore}>
        Load More
      </button>
    );
  }
}

export default Button;
