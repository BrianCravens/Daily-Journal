
import journalEntryComponent from "./entryComponent.js"

const domHolder = {
  addJournalToDom (journalEntries) {
  for (let i = 0; i < journalEntries.length; i++){
    const addJournalAsHtml = document.querySelector("#journalLog");

    addJournalAsHtml.innerHTML += journalEntryComponent(journalEntries[i]);
  }
}

}
  export default domHolder
