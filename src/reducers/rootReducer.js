import { TOGGLE_FOLDER,
         SELECT_FOLDER } from '../actions/folderActions';
import { Map, List }     from 'immutable'

const initialState = new Map({
  body: new Map({
    name: "body",
    files: [],
    subFolders: new Map({
      h1: new Map ({
        name: "h1",
        subFolders: new Map({}),
        files: ["An Example Site"]
      }),
      h3: new Map ({
        name: "h3",
        subFolders: new Map({}),
        files: ["To Demonstrate what some nested nodes might look like"]
      }),
      ul: new Map ({
        name: "ul",
        files: [],
        subFolders: new Map ({
          li1: new Map ({
            name: "li",
            subFolders: new Map({}),
            files: ["One"]
          }),
          li2: new Map ({
            name: "li",
            subFolders: new Map({}),
            files: ["Two"]
          }),
          li3: new Map ({
            name: "li",
            subFolders: new Map({}),
            files: ["Three"]
          })
        }),
        p: new Map({
          name: "p",
          subFolders: new Map({}),
          files: ["Some Text", "More Text"]
        })
      })
    })
  })
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLDER:
      const toggledState = !state.getIn(action.path)
      const newState = state.setIn(action.path, toggledState);
      return newState
    default:
      return state;
  }
}

export default rootReducer
