/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./red-circle.less');

class RedCircle extends React.Component {
    render() {
        return <div className='redCircle'>Red Circle</div>;
    }
}

module.exports = RedCircle;