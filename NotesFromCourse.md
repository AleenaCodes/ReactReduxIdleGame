# Parts

- Store - all the application data (states of all components)
- Provider - pipes things from store down to components (through provider)
- Container - connects components with store
- Action - change to the application state
  - Usually user generated but can be other (e.g. API request comes back etc.)
- Reducer - takes action and decides part of store to change

Note - Anytime store changes, components are redrawn
