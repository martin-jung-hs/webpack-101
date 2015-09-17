/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./blue-circle.less');

/* Component dependencies */
var SharedImg = require('../shared-img/shared-img');

class BlueCircle extends React.Component {
    render() {
        return (
            <div className='blueCircle'>
                <div>Blue Circle</div>
                <SharedImg/>
            </div>
        );
    }
}

module.exports = BlueCircle;