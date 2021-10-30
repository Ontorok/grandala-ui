import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
/* **************************************************************
 *                    Left Side of Navbar (Start)
 ************************************************************** */

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
`;

export const Input = styled.input`
    border: none;
`;
export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
/* **************************************************************
 *                    Left Side of Navbar (End)
 ************************************************************** */

/* **************************************************************
 *                    Center Side of Navbar (Start)
 ************************************************************** */
export const Center = styled.div`
    flex: 1;
    text-align: center;
`;
export const Logo = styled.h1`
    font-weight: bold;
`;
/* **************************************************************
 *                    Center Side of Navbar (End)
 ************************************************************** */

/* **************************************************************
 *                    Right Side of Navbar (Start)
 ************************************************************** */
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;
/* **************************************************************
 *                    Right Side of Navbar (End)
 ************************************************************** */
