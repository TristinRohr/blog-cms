module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_url: (url) => {
      // Format URL to remove http://, https://, and www.
      return url
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .split('/')[0];
    },
    format_plural: (word, amount) => {
      // Pluralize words
      return amount !== 1 ? `${word}s` : word;
    },
  };