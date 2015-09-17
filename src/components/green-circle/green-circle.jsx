/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./green-circle.less');

/* Component dependencies */
var RedCircle = require('../red-circle/red-circle');

class GreenCircle extends React.Component {
    render() {
        return (
            <div className='greenCircle'>
                Green Circle
                <RedCircle/>
            </div>
        );
    }
}

module.exports = GreenCircle;