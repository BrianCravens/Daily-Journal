const API = {
    getJournalEntries () {
        return fetch("http://localhost:8040/journalEntries")
        .then(journal => journal.json())
    }

  }
export default API