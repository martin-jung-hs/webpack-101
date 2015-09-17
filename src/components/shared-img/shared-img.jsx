/* Script dependencies */
var React = require('react');

/* Style dependencies */
require('./shared-img.less');

class Img extends React.Component {
    render() {
        var imageSrc = require('../../assets/webpack.png');
        return <img src={imageSrc}/>;
    }
}

module.exports = Img;