"use strict"

export const getTools = () => {
  return {
          type: "GET_TOOLS"
        }
}

export const searchTools = (value) => {
  return {
    type: 'SEARCH_TOOLS',
    value
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
