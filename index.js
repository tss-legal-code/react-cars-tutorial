import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

var App = function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "h1",
      null,
      "Basic",
      " ",
      React.createElement(
        "a",
        {
          href: "https://github.com/jaredpalmer/formik",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Formik"
      ),
      " ",
      "Demo"
    ),
    React.createElement(
      Formik,
      {
        initialValues: { email: "" },
        onSubmit: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(values) {
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 500);
                    });

                  case 2:
                    alert(JSON.stringify(values, null, 2));

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        validationSchema: Yup.object().shape({
          email: Yup.string().email().required("Required")
        })
      },
      function (props) {
        var values = props.values,
            touched = props.touched,
            errors = props.errors,
            dirty = props.dirty,
            isSubmitting = props.isSubmitting,
            handleChange = props.handleChange,
            handleBlur = props.handleBlur,
            handleSubmit = props.handleSubmit,
            handleReset = props.handleReset;

        return React.createElement(
          "form",
          { onSubmit: handleSubmit },
          React.createElement(
            "label",
            { htmlFor: "email", style: { display: "block" } },
            "Email"
          ),
          React.createElement("input", {
            id: "email",
            placeholder: "Enter your email",
            type: "text",
            value: values.email,
            onChange: handleChange,
            onBlur: handleBlur,
            className: errors.email && touched.email ? "text-input error" : "text-input"
          }),
          errors.email && touched.email && React.createElement(
            "div",
            { className: "input-feedback" },
            errors.email
          ),
          React.createElement(
            "button",
            {
              type: "button",
              className: "outline",
              onClick: handleReset,
              disabled: !dirty || isSubmitting
            },
            "Reset"
          ),
          React.createElement(
            "button",
            { type: "submit", disabled: isSubmitting },
            "Submit"
          ),
          React.createElement(DisplayFormikState, props)
        );
      }
    ),
    React.createElement(MoreResources, null)
  );
};

render(React.createElement(App, null), document.getElementById("root"));