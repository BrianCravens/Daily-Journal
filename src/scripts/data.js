const apiURL = "http://localhost:8040/journalEntries"

function getJournalEntries () {
        return fetch(`${apiURL}?_expand=mood`)
        .then(journal => journal.json())
}



function addNewEntry(creation) {
      return fetch (`${apiURL}?_expand=mood`,{
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(creation)
    })
}

function deleteEntry(entryId){
      return fetch (`${apiURL}/${entryId}?_expand=mood`,{
          method: "DELETE"
    })
}
function updateEntry(entryObject, id) {
    return fetch (`${apiURL}/${id}?_expand=mood`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
}
function getEntryById (entryId){
    return fetch (`${apiURL}/${entryId}?_expand=mood`)
    .then(data => data.json())
}
  

export default {getJournalEntries, addNewEntry, deleteEntry, updateEntry, getEntryById}