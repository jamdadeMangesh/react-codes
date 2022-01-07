import React, { useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Pagination } from "../../components/Pagination/Pagination";
import data from "./data.json";

let PageSize = 7;
export function PaginationView() {
    const [currentPage, setCurrentPage] = useState(1);
    const currenTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <>
            <PageHeader pageTitle="Pagination with JSON" />
            Current Page Size : {PageSize}
            <div className="table-responsive">
                <table className="table table-bordered mt-4 table-striped mb-0">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currenTableData.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
            />
        </>
    )
}