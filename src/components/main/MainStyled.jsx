import styled from "styled-components";

const Container = styled.main`
  grid-area: main;
`;
const CommonBox = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 0.8rem;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonBox)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: #717171;
      font-size: 14px;
      line-height: 1.5;
      min-height: 50px;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      font-weight: 600;
      cursor: pointer;
      border-radius: 0.4rem;
      padding: 0 10px;
      &:hover {
        background: ${({ theme }) => theme.colors.bgHover};
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
    }
  }
`;
const Icon = styled.span`
  margin: 0 4px 0 -2px;
  color: ${({ color }) => color};
  svg {
    height: 100%;
    margin-top: 4px;
    margin-right: 5px;
  }
`;
const Line = styled.div`
  width: 100%;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    & > hr {
      background: rgba(0, 0, 0, 0.08);
      flex-grow: 1;
      border: 0;
      display: block;
      height: 1px;
      padding: 0;
      border-color: rgba(0, 0, 0, 0.15);
      border-top: 1px solid rgba(0, 0, 0, 0.15);
    }
    & > div {
      padding-left: 10px;
      span {
        font-size: ${({ theme }) => theme.fontSize.sm};
        &:first-child {
          color: ${({ theme }) => theme.colors.textColor};
        }
      }
    }
  }
`;
const Content = styled.div``;

export { Container, ShareBox, Icon, Line, Content };
