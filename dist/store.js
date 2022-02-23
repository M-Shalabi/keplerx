'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhancers = exports.middlewares = undefined;

var _redux = require('redux');

var _window = require('global/window');

var _window2 = _interopRequireDefault(_window);

var _tasks = require('react-palm/tasks');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var middlewares = exports.middlewares = [_tasks.taskMiddleware, (0, _reactRouterRedux.routerMiddleware)(_reactRouter.hashHistory)];

var enhancers = exports.enhancers = [_redux.applyMiddleware.apply(undefined, middlewares)];

var initialState = {};

// add redux devtools
var composeEnhancers = _window2.default.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

exports.default = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers.apply(undefined, enhancers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlcyIsInRhc2tNaWRkbGV3YXJlIiwiaGFzaEhpc3RvcnkiLCJlbmhhbmNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsU3RhdGUiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsInJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBb0JBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVTyxJQUFNQSxvQ0FBYyxDQUN6QkMscUJBRHlCLEVBRXpCLHdDQUFpQkMsd0JBQWpCLENBRnlCLENBQXBCOztBQUtBLElBQU1DLGdDQUFZLENBQUNDLHdDQUFtQkosV0FBbkIsQ0FBRCxDQUFsQjs7QUFFUCxJQUFNSyxlQUFlLEVBQXJCOztBQUVBO0FBQ0EsSUFBTUMsbUJBQW1CQyxpQkFBT0Msb0NBQVAsSUFBK0NDLGNBQXhFOztrQkFFZSx3QkFDYkMsa0JBRGEsRUFFYkwsWUFGYSxFQUdiQyxrQ0FBb0JILFNBQXBCLENBSGEsQyIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHt0YXNrTWlkZGxld2FyZX0gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG5pbXBvcnQge3JvdXRlck1pZGRsZXdhcmV9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZXMgPSBbXG4gIHRhc2tNaWRkbGV3YXJlLFxuICByb3V0ZXJNaWRkbGV3YXJlKGhhc2hIaXN0b3J5KVxuXTtcblxuZXhwb3J0IGNvbnN0IGVuaGFuY2VycyA9IFthcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpXTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbi8vIGFkZCByZWR1eCBkZXZ0b29sc1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoXG4gIHJlZHVjZXJzLFxuICBpbml0aWFsU3RhdGUsXG4gIGNvbXBvc2VFbmhhbmNlcnMoLi4uZW5oYW5jZXJzKVxuKTtcbiJdfQ==