export function createPages(pages, pagesCount, currentPage) {
    if(pagesCount > 10) {
        if(currentPage > 5) {
            for (let i = currentPage-5; i <= currentPage+5; i++) {
                pages.push(i)
                if(i == pagesCount -1) break
            }
        }
        else {
            for (let i = 0; i <= 9; i++) {
                pages.push(i)
                if(i == pagesCount -1) break
            }
        }
    }  else {
        for (let i = 0; i <= pagesCount -1; i++) {
            pages.push(i)
        }
    }
}