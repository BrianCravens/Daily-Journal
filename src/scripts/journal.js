/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import API from "./data.js"
import addJournalToDom from "./entriesDOM.js"
// import domHolder from "./entriesDOM.js"
import listEntries from "./entriesDOM.js"


// getJournalEntries().then(domHolder.addJournalToDom)

API.getJournalEntries()
.then( (entriesData) => listEntries(entriesData))


document.querySelector("#recordLog").addEventListener("click", (event) => {
    event.preventDefault();
    const date = document.querySelector("#journalDate").value;
    const title = document.querySelector("#concepts").value;
    const contents = document.querySelector("#journalEntry").value;
    const mood = document.querySelector("#mood").value;
    console.log(date)
    
    let newEntry = buildJournalEntry(date, title, contents, mood)
    API.addNewEntry(newEntry)
    // .then( data => {
    //     return data.json()
    // })
    .then( dataJS => {
        console.log ("dataJS", dataJS)
        return API.getJournalEntries()
    })
    .then( entriesData => listEntries(entriesData))
})


function buildJournalEntry(date, title, contents, mood){
    return ({
        date: date,
        title: title,
        contents: contents,
        mood: mood
    }
    )
}
