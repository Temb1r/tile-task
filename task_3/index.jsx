import { Fragment, memo, useMemo } from "react";

const MainComponent = ({ user = { name: "unknown", age: null } }) => {
  const memoUser = useMemo(() => user, [user]);

  return (
    <Fragment>
      <ChildComponent user={memoUser} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  );
});
