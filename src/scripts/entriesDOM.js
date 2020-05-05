
const addJournalToDom = (journalEntries) => {
  for (i = 0; i < journalEntries.length; i++){
    const addJournalAsHtml = document.querySelector("#journalLog");

    addJournalAsHtml.innerHTML += journalEntryComponent(journalEntries[i]);
  }
  };
