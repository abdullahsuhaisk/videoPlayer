import { connect } from 'react-redux';

const NoProps = (state) => ({});
const NoActions = (dispatch) => ({});
const defaultSelectors = {
  selectProps: (props) => ({}),
  selectActions: (actions) => ({})
};

export function buildActionCreator(type) {
  return (payload = undefined) => ({ type, payload });
}

/**
 * Props provider factory
 */
export const InjectProps = (
  { mapStateToProps = NoProps, mapDispatchToProps = NoActions },
  displayName = 'VideoPlayerPropsInjector'
) => (selectors = defaultSelectors) => (Component) => {
  return setDisplayName(
    provideProps({ mapStateToProps, mapDispatchToProps })(Component, selectors),
    displayName
  );
};

function provideProps({
  mapStateToProps = NoProps,
  mapDispatchToProps = NoProps
}) {
  return (Component, selectors) => {
    if (selectors === defaultSelectors) {
      return connect(
        mapStateToProps,
        mapDispatchToProps
      )(Component);
    }
    const { selectProps, selectActions } = selectors;
    const propsSelector = selectProps || NoProps;
    const actionsSelector = selectActions || NoProps;
    return connect(
      (state) => propsSelector(mapStateToProps(state)),
      (dispatch) => actionsSelector(mapDispatchToProps(dispatch))
    )(Component);
  };
}

function isClassComponent(Component) {
  return (
    typeof Component === 'function' && !!Component.prototype.isReactComponent
  );
}

function isWrappedComponent(Component) {
  return !!Component.WrappedComponent;
}

const FUNCTION_REGEX = /react(\d+)?./i;
function isFunctionComponent(Component) {
  return (
    typeof Component === 'function' &&
    String(Component).includes('return') &&
    !!String(Component).match(FUNCTION_REGEX) &&
    String(Component).includes('.createElement')
  );
}

function isReactComponent(Component) {
  return (
    isClassComponent(Component) ||
    isFunctionComponent(Component) ||
    isWrappedComponent(Component) ||
    typeof component === 'function'
  );
}

function setDisplayName(Component, displayName) {
  // Component.displayName = Component.displayName.replace(/Connect/, displayName);
  return Component;
}
