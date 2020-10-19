function echanger (tab, i, j) {
    let tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp ;
    }

function bubbleSorting(tab=[]) {
    
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab.length-1; j++) {            
            if (tab[j]>tab[j+1]) {
                echanger(tab,j+1,j)
            }
        }
    }
    return tab
}


console.log(bubbleSorting([5,1,4,2,8]));//renvoie [1,2,4,5,8]