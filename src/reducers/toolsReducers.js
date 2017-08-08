"use strict"

const toolsReducers = (state={tools:[
  {
    _id: 1,
    title: "First",
    type: "plugin",
    description: "description",
    link: "first url",
    keywords: "plugin, go",
    platform: "Go",
    cdn: "fastly"
  },
  {
    _id: 2,
    title: "Second",
    type: "plugin",
    description: "description",
    link: "first url",
    keywords: "plugin, go",
    platform: "Go",
    cdn: "firebase"
  },
  {
    _id: 3,
    title: "Third",
    type: "plugin",
    description: "description",
    link: "first url",
    keywords: "plugin, go",
    platform: "Go",
    cdn: "fibase"
  }
], value: '', filtered: []}, action) => {
  switch(action.type){
    case "GET_TOOLS":
      return {...state, tools: [...state.tools], filtered: [...state.tools]}
      break;
    case "POST_TOOL":
      return {tools: [...state.tools, ...action.payload], filtered: [...state.tools, ...action.payload]}
      break;
    case "DELETE_TOOL":
      const indexToDelete = state.tools.findIndex((tool) => tool._id === action.payload._id);
      let tools = [...state.tools];
      return {tools: [...tools.slice(0, indexToDelete), ...tools.slice(indexToDelete + 1)]}
      break;
    case "UPDATE_TOOL":
      const indexToUpdate = state.tools.findIndex((tool) => tool._id === action.payload._id);
      const currentTools = [...state.tools];
      const toolToUpdate = {
        ...currentTools[indexToUpdate],
        cdn: action.payload.cdn
      }
      if (indexToUpdate !== -1) {
        return {tools: [...currentTools.slice(0, indexToUpdate), toolToUpdate, ...currentTools.slice(indexToUpdate + 1)]}
      }
      break;
    case "SEARCH_TOOLS":
      const {value} = action;
      let filtered = state.tools.filter((tool) => {
        return tool.cdn.includes(value) || tool.title.toLowerCase().includes(value);
      });
      return {...state, value, filtered};

      break;
  }
  return state;
}

export {toolsReducers};
