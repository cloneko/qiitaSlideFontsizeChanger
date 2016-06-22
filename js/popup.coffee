window.onload = ->
  #sizeChange(80)
  size = document.getElementById("size")
  btn = document.getElementById("btn")
  btn.addEventListener("click", ->
    sizeChange(size.value)
  )
  return

sizeChange = (number) ->
  console.log(number)
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) ->
    chrome.tabs.sendMessage(tabs[0].id, {size: parseInt(number)}) 
  )
  return true

