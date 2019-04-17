import { connect } from 'react-redux';

const NoProps = (props) => ({});
const defaultSelectors = Object.create(null);

export function buildActionCreator(type) {
  return (payload = undefined) => ({ type, payload });
}

export const InjectSelectedOperations = ({
  mapStateToProps = NoProps,
  mapDispatchToProps = NoProps
}) => (Component, selectors = defaultSelectors) => {
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
