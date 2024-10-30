import React, { Fragment, useState } from 'react';
import "./Search.css";

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/product/${keyword}`);
        } else {
            history.push("/product");
        }
    }

    return (
        <Fragment>
            <form className='search' onSubmit={searchSubmitHandler}>
                <input className='input'
                    type='text'
                    placeholder='search anything here'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input className='rono' type='submit' value='search' />
            </form>
        </Fragment>
    );
}

export default Search;
