const apiURL = "http://localhost:8040/journalEntries"

function getJournalEntries () {
        return fetch(`${apiURL}`)
        .then(journal => journal.json())
}



function addNewEntry(creation) {
      return fetch (`${apiURL}`,{
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(creation)
    })
}

function deleteEntry(entryId){
      return fetch (`${apiURL}/${entryId}`,{
          method: "DELETE"
    })
}
  

export default {getJournalEntries, addNewEntry, deleteEntry}