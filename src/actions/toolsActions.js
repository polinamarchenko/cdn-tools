"use strict"

export const getTools = () => {
  return {
          type: "GET_TOOLS"
        }
}

export const searchTools = (searchTerm) => {
  return {
    type: 'SEARCH_TOOLS',
    payload: {searchTerm}
  }
}

export const postTool = tool => {
  return {
          type: "POST_TOOL",
          payload: tool
        }
}

export const deleteTool = _id => {
  return {
          type: "DELETE_TOOL",
          payload: _id
        }
}

export const updateTool = tool => {
  return {
          type: "UPDATE_TOOL",
          payload: tool
        }
}
