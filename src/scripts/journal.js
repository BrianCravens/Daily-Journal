fetch("http://localhost:8040/journalEntries")
  .then((journal) => journal.json())
  .then((parsedJournal) => {
    parsedJournal.forEach((journalEntries) => {
      const journalAsHtml = journalEntryComponent(journalEntries);
      addJournalToDom(journalAsHtml);
    });
  });

const addJournalAsHtml = document.querySelector("#journalLog");
const addJournalToDom = (journalEntries) => {
  document.querySelector("#journalLog").innerHTML += `${journalEntries}`;
};

const journalEntryComponent = (entry) => {
  return `
  <h1>${entry.title}</h1>
  <article>
    <section>${entry.date}</section>
    <section>${entry.contents}</section>
    <section>${entry.mood}</section>
  </article>`;
};