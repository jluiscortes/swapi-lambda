export async function renameProperties(
  json: any,
  propertyMap: any
): Promise<object> {
  for (const propertyName in json) {
    const newPropertyName = propertyMap[propertyName];
    const propertyValue = json[propertyName];
    json[newPropertyName] = propertyValue;
    delete json[propertyName];
  }

  return json;
}
