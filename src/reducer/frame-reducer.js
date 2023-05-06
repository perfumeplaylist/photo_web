export default function frameReducer(preFrame, action) {
  switch (action.type) {
    case "thema": {
      const { value } = action;
      return {
        ...preFrame,
        thema: value,
      };
    }
    case "url": {
      const { url } = action;
      return {
        ...preFrame,
        url,
      };
    }
    case "description": {
      const { descripition } = action;
      return {
        ...preFrame,
        descripition,
      };
    }
    default: {
      const { frame, blank, vertical, width, height } = action;
      return {
        ...preFrame,
        frame,
        blank,
        vertical,
        width,
        height,
      };
    }
  }
}
