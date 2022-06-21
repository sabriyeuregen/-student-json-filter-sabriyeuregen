import data from "./data.json" assert {type:"json"};

function makeGroup(){

  let groupOrangeFilter=data.filter( member=>member.group=="OrangeRed")
  let groupPinkFilter=data.filter( member=>member.group=="DeepPink")
  let groupBlueFilter=data.filter( member=>member.group=="AliceBlue")
 
  console.log(groupBlueFilter)
  console.log(groupPinkFilter)
  console.log(groupOrangeFilter)

  let whoIsAssisnt=function(){
    let assisntBlueFilter=groupBlueFilter.filter(member=>member.assistant==true)
    let assisntPinkFilter=groupPinkFilter.filter(member=>member.assistant==true)
    let assisntOrangeFilter=groupOrangeFilter.filter(member=>member.assistant==true)

    console.log(assisntBlueFilter)
    console.log(assisntPinkFilter)
    console.log(assisntOrangeFilter)

  }
  whoIsAssisnt()
}

makeGroup()
