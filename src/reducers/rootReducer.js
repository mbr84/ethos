import { Map }     from 'immutable'

const initialState = new Map({
  head: new Map({
    name: "head",
    private: true,
    files: [],
    subFolders: new Map({
      meta: new Map({
        name: 'meta',
        private: true,
        subFolders: new Map({}),
        files: ['charset="utf-8"']
      }),
      title: new Map({
        name: 'title',
        private: true,
        subFolders: new Map({}),
        files: ['DOM Tree as a File System']
      })
    })
  }),
  body: new Map({
    private: false,
    name: "body",
    files: [],
    subFolders: new Map({
      h1: new Map ({
        private: false,
        name: "h1",
        subFolders: new Map({}),
        files: ["An Example Site"]
      }),
      h3: new Map ({
        private: false,
        name: "h3",
        subFolders: new Map({}),
        files: ["To Demonstrate what some nested nodes might look like"]
      }),
      ul: new Map ({
        private: false,
        name: "ul",
        files: [],
        subFolders: new Map ({
          li1: new Map ({
            private: false,
            name: "li",
            subFolders: new Map({}),
            files: ["One"]
          }),
          li2: new Map ({
            private: false,
            name: "li",
            subFolders: new Map({}),
            files: ["Two"]
          }),
          li3: new Map ({
            private: false,
            name: "li",
            subFolders: new Map({}),
            files: ["Three"]
          })
        })
      }),
      p: new Map({
        private: false,
        name: "p",
        subFolders: new Map({}),
        files: ["Some Text", "More Text"]
      })
    })
  })
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case TOGGLE_FOLDER:
    //   const toggledState = !state.getIn(action.path)
    //   const newState = state.setIn(action.path, toggledState);
    //   return newState
    default:
      return state;
  }
}

export default rootReducer
