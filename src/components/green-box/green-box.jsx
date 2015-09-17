/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./green-box.less');

/* Component dependencies */
var RedBox = require('../red-box/red-box');

class GreenBox extends React.Component {
    render() {
        return (
            <div className='greenBox'>
                Green Box
                <RedBox/>
            </div>
        );
    }
}

module.exports = GreenBox;