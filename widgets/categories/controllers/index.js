'use strict';

let Promise = require('bluebird');

module.exports = function (controller, component, application) {

    controller.createWidget = function (widget_name) {
        // Get all widget layouts
        component.getLayouts(widget_name);
    };

    controller.saveWidget = function () {

    };

    controller.renderWidget = function (widget) {
        let renderWidget = Promise.promisify(component.render);

        //todo: get layout from db
        let layout = 'default';

        // Mockup render widget with default layout
        return renderWidget(layout, {
            widget: widget
        })
    };
};

