const journalEntryComponent = (entry) => {
    return `
    <div class= journalItemsContainer>
    <h1 class= entryTitle>${entry.title}</h1>
      <section class = journalItems>${entry.date}</section>
      <section class = journalItems>${entry.contents}</section>
      <section class = journalItems>Mood: ${entry.mood.label}</section>
      <div class= journalEditDiv>
      <button id="edit--${entry.id}" class = journalEdit>Edit</button>
      <button id="delete--${entry.id}" class = journalDelete>Delete</button>
      </div>
      <div class= journalDeleteDiv>
      </div>
    </div>`;
  
    };
  export default journalEntryComponent