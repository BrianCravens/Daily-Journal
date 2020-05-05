const journalEntryComponent = (entry) => {
    return `
    <h1>${entry.title}</h1>
    <article>
      <section>${entry.date}</section>
      <section>${entry.contents}</section>
      <section>${entry.mood}</section>
    </article>`;
  };