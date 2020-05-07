/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import API from "./data.js"
import addJournalToDom from "./entriesDOM.js"
import listEntries from "./entriesDOM.js"

API.getJournalEntries()
.then(entriesData => {listEntries.listEntries(entriesData.reverse())})

document.querySelector("#recordLog").addEventListener("click", (event) => {
    event.preventDefault();
    if (listEntries.checkLength()==false){}
        else if (document.querySelector("#journalDate").value !=='' &&
        document.querySelector("#concepts").value !=='' &&
        document.querySelector("#journalEntry").value !=='' &&
        document.querySelector("#mood").value !=='') {
        const date = document.querySelector("#journalDate").value;
        const title = document.querySelector("#concepts").value;
        const contents = document.querySelector("#journalEntry").value;
        const mood = document.querySelector("#mood").value;
        let newEntry = buildJournalEntry(date, title, contents, mood)
        API.addNewEntry(newEntry)
        .then( dataJS => 
        API.getJournalEntries()
        .then(entriesData => {listEntries.listEntries(entriesData.reverse())
        }))}
        else window.alert("Please fill out all fields")   
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
document.getElementsByName("radioMood").forEach(element => element.addEventListener("click",(event) =>{
    const moodSelected = event.target.value
    API.getJournalEntries()
    .then(entries => {
        const filteredList = entries.filter(entry=> entry.mood == moodSelected)
        listEntries.listEntries(filteredList.reverse())
    })

}))

const journalOutputContainer = document.getElementById("journalLog")

journalOutputContainer.addEventListener("click", (event) =>{
    if (event.target.id.startsWith("delete--")) {
        const entryId = event.target.id.split("--")[1]
        console.log(entryId)
        API.deleteEntry(entryId)
        API.getJournalEntries()
        .then(entriesData => {listEntries.listEntries(entriesData.reverse())
        })
    }
})