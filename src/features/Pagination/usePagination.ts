import { useMemo } from "react"

export const DOTS = '...';

const range = (start: any, end: any) => {
    let length = end - start + 1;
    /* Create an array of certain length and set the elements within it from start value to end value.*/
    return Array.from({length}, (_,idx) => idx + start);
}

interface PaginationValues {
    totalCount: any,
    pageSize: any,
    siblingCount:any,
    currentPage: any
}
export const usePagination =({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}: PaginationValues) => {
    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /* If the number of pages is less than page numbers we want to show in Pagination component we return range [1..totalPageCount]*/
        if(totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        /* Hide the Dots(...) if there is only one position left after/before the page count */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if(!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }

        if(shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount =  3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if(shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return  [firstPageIndex, DOTS, ...middleRange, DOTS,lastPageIndex];
        }
    },[totalCount, pageSize, siblingCount, currentPage]);
    return paginationRange;
}