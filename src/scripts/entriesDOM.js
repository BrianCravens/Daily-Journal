
import journalEntryComponent from "./entryComponent.js"

const addJournalAsHtml = document.querySelector("#journalLog");

  function listEntries (entryArr) {
    addJournalAsHtml.innerHTML= ""
    entryArr.forEach( journalEntries => {
      addJournalAsHtml.innerHTML +=(journalEntryComponent(journalEntries))
      
    })
  }

  function checkLength(){
    var title = document.querySelector("#concepts");
    var textbox = document.querySelector("#journalEntry");

    if (textbox.value.length > 20 || textbox.value.length < 5){
      alert("Make sure the Journal Entry is between 5-20 characters long")
      return false;
    }
      else if (title.value.length > 10 || title.value.length < 5){
        alert("Make sure the Title is between 5-10 characters long")
        return false;
    }
      else
    {
      return true;
    }
    
  }

  export default {listEntries, checkLength}
