function average(values) {
  const sum = values.reduce((previous, current) => current += previous);
  return sum / values.length;
}

export { average };
