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
  margin-bottom: 8px;
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
const Content = styled.div`
  text-align: center;
  & > img {
    width: 70px;
  }
`;
const Article = styled(CommonBox)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 1.2rem 1.6rem 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      line-height: 1.4;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.textColor};
        }
        &:nth-child(n + 2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    cursor: pointer;
    position: absolute;
    top: 7px;
    right: 10px;
    border: none;
    outline: none;
    background: transparent;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    &:hover {
      background: ${({ theme }) => theme.colors.bgHover};
    }
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
`;

const ShareImg = styled.div`
  margin: 8px 0 0px;
  background-color: #f9fafb;
  img {
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;

  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9efdf;
  color: rgba(0, 0, 0, 0.6);
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      background: transparent;
      span {
        padding-left: 5px;
      }
    }
  }
`;

const SocialActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: initial;
  column-gap: 5px;
  padding: 0.4rem 1.2rem;
  margin: 4px 12px;
  min-height: 40px;
  ${"" /* padding-bottom: 5px; */}
  button {
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    padding: 8px;
    border: none;
    background: transparent;
    span {
      margin-left: 4px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }
  }
  button.active {
    span {
      color: #0a66c2;
      font-weight: 600;
    }
    svg {
      fill: #0a66c2;
    }
  }
`;

export {
  Container,
  ShareBox,
  Icon,
  Line,
  Content,
  Article,
  SharedActor,
  Description,
  ShareImg,
  SocialCounts,
  SocialActions,
};
