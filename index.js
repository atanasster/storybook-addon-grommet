'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var addons = require('@storybook/addons');
var addons__default = _interopDefault(addons);
var grommet = require('grommet');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ADDON_ID = 'storybook/grommet';
var EVENTS = {
    UPDATE: ADDON_ID + "/update",
    INIT: ADDON_ID + "/init",
};

var PreviewPanel = function (_a) {
    var children = _a.children, themes = _a.themes, theme = _a.theme, channel = _a.channel, boxProps = _a.boxProps, grommetProps = _a.grommetProps;
    var _b = React.useState(theme), state = _b[0], setTheme = _b[1];
    var onSelectTheme = function (theme) {
        setTheme(theme);
    };
    React.useEffect(function () {
        channel.on(EVENTS.UPDATE, onSelectTheme);
        channel.emit(EVENTS.INIT, { themes: themes, theme: theme });
        return function () {
            channel.removeListener(EVENTS.UPDATE, onSelectTheme);
        };
    }, []);
    return (React.createElement(grommet.Grommet, __assign({ theme: themes[state] }, grommetProps),
        React.createElement(grommet.Box, __assign({}, boxProps), children)));
};

var withGrommet = function (_a) {
    var theme = _a.theme, themes = _a.themes, boxProps = _a.boxProps, grommetProps = _a.grommetProps;
    console.log('gggggg');
    return addons.makeDecorator({
        name: 'withGrommet',
        parameterName: 'grommet',
        wrapper: function (getStory, context) { return (React.createElement(PreviewPanel, { boxProps: boxProps, grommetProps: grommetProps, channel: addons__default.getChannel(), themes: themes, theme: theme }, getStory(context))); },
    });
};
if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}

exports.withGrommet = withGrommet;
