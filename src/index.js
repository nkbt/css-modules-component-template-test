import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'css-modules-component-template';


// Add global ".component" class name to Component without overriding original one
Component.css.component = `${Component.css.component} component`;


const App = React.createClass({
  render() {
    return (
      <div>
        <pre>
          Component classNames: {JSON.stringify(Component.css, null, 2)}
        </pre>
        <Component />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.querySelector('#app'));
