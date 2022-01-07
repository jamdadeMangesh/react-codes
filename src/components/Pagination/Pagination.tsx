import React from "react";
import { usePagination, DOTS } from "../../features/Pagination/usePagination";
import "./Pagination.scss";
export function Pagination(props: any) {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    })

    /*If there are less than 2 in pagination range, we will not load the component */
    if(currentPage === 0 || (paginationRange && paginationRange!.length < 2)){
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationRange ?  paginationRange[paginationRange.length - 1] : "";
    return(
        <ul className={`pagination-container ${className}`}>
            <li className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`} onClick={onPrevious}><div className="arrow left" />
            </li>
            {paginationRange && paginationRange.map(pageNumber => {
         
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                return <li key={pageNumber} className="pagination-item dots">&#8230;</li>;
                }
                
                // Render our Page Pills
                return (
                <li key={pageNumber}
                    className={`pagination-item ${pageNumber === currentPage ? "selected" : "" }`}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li className={`pagination-item ${currentPage === lastPage ? "disabled" : "" }`}
            onClick={onNext}
        >
                <div className="arrow right" />
            </li>
        </ul>
    )
}