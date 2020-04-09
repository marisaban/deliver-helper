import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
    background-color: red;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    height: 250px;
    width: 65vw;
    padding-bottom: 75px;
`;

const SearchInput = styled.input`
    align-self: flex-end;
    background-color: white;
    height: 40px;
    width: 60%;
    border-radius: 5px;
`;

const Search = () => {
    return (
        <SearchBox>
            <SearchInput defaultValue="Type in your address" type="text"></SearchInput>
        </SearchBox>
    );
}

export default Search;