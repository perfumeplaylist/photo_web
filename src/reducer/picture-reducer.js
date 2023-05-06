export default function pictureReducer(picture, action) {
  switch (action.type) {
    case "add": {
      return [...picture, action.data];
    }
  }
}
