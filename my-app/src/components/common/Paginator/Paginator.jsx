import React from 'react';
import style from './Paginator.module.css';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount / 100; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={currentPage === page && style.selectedPage}
                        onClick={(e) => { onPageChanged(page) }}>
                        {page}
                    </span>
                })}
            </div>
           
        </div>
    )
}

export default Paginator;