function insertion(tab=[]) {
    for (let i = 0; i < tab.length; i++) {
        tmp = tab[i]
        j = i - 1
        while (j >= 0 && tab[j] > tmp) {
          tab[j+1] = tab[j]
          j--
        }
        tab[j+1] = tmp
    }
      return tab      
}

console.log(insertion([5,1,4,2,8]));//renvoie [1,2,4,5,8]