/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./blue-box.less');

/* Component dependencies */
var SharedImg = require('../shared-img/shared-img');

class BlueBox extends React.Component {
    render() {
        return (
            <div className='blueBox'>
                <div>Blue Box</div>
                <SharedImg/>
            </div>
        );
    }
}

module.exports = BlueBox;