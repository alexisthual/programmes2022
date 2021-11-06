import React from "react";

// All properties required to describe app state
interface IAppState {
  simplified?: boolean;
  search?: string;
  positionId?: string;
}

const defaultState: IAppState = {
  simplified: false,
};

// Extend app state with methods to update state
interface IAppContext extends IAppState {
  setContext: (state: IAppState) => void;
  deleteContextKey: (key: string) => void;
}

const defaultContext: IAppContext = {
  ...defaultState,
  setContext: () => {
    /* do nothing */
  },
  deleteContextKey: () => {
    /* do nothing */
  },
};

// Create context
const AppContext = React.createContext(defaultContext);

// Implement context provider;
// in particular, implement methods to update state
class AppContextProvider extends React.Component {
  constructor(props: unknown) {
    super(props);

    // Get and parse url params
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = Object.fromEntries(urlParams.entries());

    // Initialise state
    this.state = {
      ...defaultState,
      ...params,
      // Correctly cast some parameters
      ...(`simplified` in params
        ? { simplified: params.simplified === `true` }
        : {}),
    };
  }

  // Util function to update context
  setContext = (newState: IAppState) => {
    // Replace values of all keys in current state
    // if these values appear in new state
    this.setState(
      (state) => ({
        ...state,
        ...newState,
      }),
      this.callback,
    );
  };

  // Util function called every time state is updated
  callback = () => {
    // Update url parameters
    const queryString = new URLSearchParams(this.state).toString();
    window.history.pushState(null, ``, `/?${queryString}`);
  };

  // Util function to delete key from context
  deleteContextKey = (key: string) => {
    this.setState((state) => {
      if (key in state) {
        delete state[key];
      }

      return state;
    }, this.callback);
  };

  render() {
    const { children } = this.props;

    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setContext: this.setContext,
          deleteContextKey: this.deleteContextKey,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppContextProvider };
