/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./red-box.less');

class RedBox extends React.Component {
    render() {
        return <div className='redBox'>Red Box</div>;
    }
}

module.exports = RedBox;