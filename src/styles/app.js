import styled from 'styled-components';

export const StickerList = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap:20px;
`;

export const StickerItem = styled.li`
    cursor: pointer;
    width: 300px;
    height: 300px;
    border: 2px solid #ccc;
    border-radius: 10px;
    &:hover {
        border-color: #000;}
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
    `;
export const Choice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ff6565ff;
    & span{
        font-weight: bold;
        color: #fff;
    }
    `;