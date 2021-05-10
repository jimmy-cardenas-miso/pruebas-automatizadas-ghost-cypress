export function sanitizeText(text) {
  return text.trimLeft().replaceAll('\n', '').trimRight();
}
