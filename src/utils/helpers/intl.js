import React from 'react';
import { injectIntl } from 'react-intl';

export default function inject(Component) {
  class WrapperIntl extends React.Component {
    t = (id, values) => this.props.intl.formatMessage({ id }, values);
    render = () => <Component {...this.props} t={this.t} />;
  }
  WrapperIntl.displayName = `Intl(${getDisplayName(Component)})`;
  return injectIntl(WrapperIntl);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
