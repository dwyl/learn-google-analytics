import React from 'react';
import starwars from 'starwars';

const StarwarsQuote = React.createClass({

  propTypes: {
    quote: React.PropTypes.string
  },

  render () {
    return (
      <div>
        {this.props.quote || starwars()}
      </div>
    );
  }
});

export default StarwarsQuote;
