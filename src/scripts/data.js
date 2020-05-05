
    function getJournalEntries () {
        return fetch("http://localhost:8040/journalEntries")
        .then(journal => journal.json())
    }



  function addNewEntry(creation) {
      return fetch ("http://localhost:8040/journalEntries",{
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(creation)
      })
  }

export default {getJournalEntries, addNewEntry}