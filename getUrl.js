export default ( url, args ) => {
  const urlObj = new URL( url );
  for ( let [param, value ] of Object.entries( args )){
    urlObj.searchParams.append(param, value);
  }
  return urlObj
}