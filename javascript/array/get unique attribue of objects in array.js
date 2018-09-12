function getUniqueIpSrc() {
  var listIpSrc = this.items.map(function(element) {
    return element.ipSrc;
  })
  var uniqueIpSrc = listIpSrc.filter(function(item, index, array) {
    return array.indexOf(item) === index; 
  });

  return uniqueIpSrc;
}