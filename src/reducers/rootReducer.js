import { TOGGLE_FOLDER,
         SELECT_FOLDER } from '../actions/folderActions';
import { Map, List }     from 'immutable'

const initialState = new Map({
  body: new Map({
    name: "body",
    subFolders: new Map({
      h1: new Map ({
        name: "h1"
        path: ['body', 'h1', 'isExpanded']
        isExpanded: false
        subFolders: new Map({}),
        files: new List(["An Example Site"])
      }),
      h3: new Map ({
        name: "h3"
        path: ['body', 'h3', 'isExpanded']
        isExpanded: false
        subFolders: new Map({}),
        files: new List(["To Demonstrate what some nested nodes might look like"])
      })
      ul: new Map ({
        name: "ul"
        path: ['body', 'ul', 'isExpanded']
        isExpanded: false
        subFolders: new Map ({
          li1: new Map ({
            name: "li"
            path: ['body', 'ul', 'li1', 'isExpanded']
            isExpanded: false
            subFolders: new Map({}),
            files: new List(["One"])
          })
          li2: new Map ({
            name: "li"
            path: ['body', 'ul', 'li2', 'isExpanded']
            isExpanded: false
            subFolders: new Map({}),
            files: new List(["Two"])
          })
          li3: new Map ({
            name: "li"
            path: ['body', 'ul', 'li3', 'isExpanded']
            isExpanded: false
            subFolders: new Map({}),
            files: new List(["Three"])
          })
        }),
        p: new Map({
          name: "p",
          path: ['body', 'p', 'isExpanded'],
          isExpanded: false,
          subFolders: new Map({})
          files: new List(["Some Text", "More Text"])
        })
      })
    })
  })
})

export default rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLDER:
      const toggledState = !state.getIn(action.path)
      return state.setIn(action.path, toggledState);
    default:
      return state;
  }
}
