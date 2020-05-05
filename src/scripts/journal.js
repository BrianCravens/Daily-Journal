/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import API from "./data.js"
import addJournalToDom from "./entriesDOM.js"
import domHolder from "./entriesDOM.js"


API.getJournalEntries().then(domHolder.addJournalToDom)



