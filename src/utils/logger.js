const loggerBefore = (action, state) => {
  console.log(
    'logger before the action:',
    'action:',
    action,
    'prevState:',
    state,
  );
};

export default loggerBefore;
