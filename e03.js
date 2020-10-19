function echanger (tab, i, min) {
    let tmp = tab[i];
    tab[i] = tab[min];
    tab[min] = tmp ;
    }
function selection(tab=[]) {
   len=tab.length
   let min
   for (let i = 0; i < len; i++) {
       min=i
       for (let j = i+1; j < len; j++) {
            if (tab[j] < tab[min]) {
                min=j
            } 
       }
       if (min!=i) {
        echanger(tab,i,min)
        }
   }
   return tab 
}


console.log(selection([5,1,4,2,8]));//renvoie [1,2,4,5,8]