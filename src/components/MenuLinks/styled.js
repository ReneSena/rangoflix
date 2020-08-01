import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListWrapper = styled.ul`
    display: flex;
    align-items: center;
`
export const ListItem = styled.li`
    margin: 0 20px;
`

export const ListLink = styled(Link)`
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
`