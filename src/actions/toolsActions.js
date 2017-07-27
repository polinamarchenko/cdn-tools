"use strict"

export function getTools(){
  return {
          type: "GET_TOOLS"
        }
}

export function postTool(tool){
  return {
          type: "POST_TOOL",
          payload: tool
        }
}

export function deleteTool(_id) {
  return {
          type: "DELETE_TOOL",
          payload: _id
        }
}

export function updateTool(book) {
  return {
          type: "UPDATE_TOOL",
          payload: book
        }
}
