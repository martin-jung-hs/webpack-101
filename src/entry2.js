/* Script dependencies */
var React = require('react');
var GreenCircle = require('./components/green-circle/green-circle');
var BlueCircle = require('./components/blue-circle/blue-circle');

/* Style dependencies */
require('../styles/base.less');

var app = (
    <div>
        <GreenCircle/>
        <BlueCircle/>
    </div>
);

window.onload = function() {
    React.render(app, document.getElementById("app"));
};