function firstParagraph(content) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  const para = doc.querySelector("p");
  const extractedText = para ? para.textContent : null;

  return extractedText;
}

export default firstParagraph;
