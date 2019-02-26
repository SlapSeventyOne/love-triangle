/**
 * @param pref - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(pref = []) {
  let res = 0;
  pref.unshift(0);  
    for(let i = 0; i < pref.length ; i++ ){
      if((pref[pref[pref[i]]] == i) && 
      (pref[i]!=pref[pref[i]] && pref[pref[i]]!=pref[pref[pref[i]]]))
      
      {
      res++;
    }
  }
  return res/3;
};
