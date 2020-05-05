
import journalEntryComponent from "./entryComponent.js"

const addJournalAsHtml = document.querySelector("#journalLog");
// const domHolder = {
//   addJournalToDom (journalEntries) {
//   for (let i = 0; i < journalEntries.length; i++){

//     addJournalAsHtml.innerHTML += journalEntryComponent(journalEntries[i]);
//   }
// }
// }



  function listEntries(entryArr) {
  
    addJournalAsHtml.innerHTML= ""

    entryArr.forEach( journalEntries => {
      addJournalAsHtml.innerHTML +=(journalEntryComponent(journalEntries))
      
    })
  }

  export default listEntries
