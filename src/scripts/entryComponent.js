const journalEntryComponent = (entry) => {
    return `
    <h1>${entry.title}</h1>
      <section class = journalItems>${entry.date}</section>
      <section class = journalItems>${entry.contents}</section>
      <section class = journalItems>${entry.mood}</section>
      <button id="delete--${entry.id}" class = journalDelete>Delete</button>`;
  };
  export default journalEntryComponent