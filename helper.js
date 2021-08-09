import React from 'react';

export var DisplayFormikState = function DisplayFormikState(props) {
  return React.createElement(
    'div',
    { style: { margin: '1rem 0' } },
    React.createElement('h3', { style: { fontFamily: 'monospace' } }),
    React.createElement(
      'pre',
      {
        style: {
          background: '#f6f8fa',
          fontSize: '.65rem',
          padding: '.5rem'
        }
      },
      React.createElement(
        'strong',
        null,
        'props'
      ),
      ' =',
      ' ',
      JSON.stringify(props, null, 2)
    )
  );
};

export var MoreResources = function MoreResources(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('hr', { style: { margin: '3rem 0' } }),
    React.createElement(
      'h3',
      null,
      'More Examples'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://codesandbox.io/s/q8yRqQMp',
            target: '_blank',
            rel: 'noopener'
          },
          'Synchronous validation'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://codesandbox.io/s/qJR4ykJk',
            target: '_blank',
            rel: 'noopener'
          },
          'Building your own custom inputs'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://codesandbox.io/s/jRzE53pqR',
            target: '_blank',
            rel: 'noopener'
          },
          '3rd-party input components: React-select'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://codesandbox.io/s/QW1rqjBLl',
            target: '_blank',
            rel: 'noopener'
          },
          '3rd-party input components: Draft.js'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://codesandbox.io/s/pgD4DLypy',
            target: '_blank',
            rel: 'noopener'
          },
          'Accessing Lifecyle Methods (resetting a form externally)'
        )
      )
    ),
    React.createElement(
      'h3',
      { style: { marginTop: '1rem' } },
      'Additional Resources'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://github.com/jaredpalmer/formik',
            target: '_blank',
            rel: 'noopener'
          },
          'GitHub Repo'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://github.com/jaredpalmer/formik/issues',
            target: '_blank',
            rel: 'noopener'
          },
          'Issues'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://twitter.com/jaredpalmer',
            target: '_blank',
            rel: 'noopener'
          },
          'Twitter (@jaredpalmer)'
        )
      )
    )
  );
};