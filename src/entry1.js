/* Script dependencies */
var React = require('react');
var GreenBox = require('./components/green-box/green-box');
var BlueBox = require('./components/blue-box/blue-box');

/* Style dependencies */
require('../styles/base.less');

var app = (
    <div>
        <GreenBox/>
        <BlueBox/>
    </div>
);

window.onload = function() {
    React.render(app, document.getElementById("app"));
};