


export function reducer(
  state = { count: 0 },
  action,
) {
  if (!action) return state;

  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return { count: 0 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}