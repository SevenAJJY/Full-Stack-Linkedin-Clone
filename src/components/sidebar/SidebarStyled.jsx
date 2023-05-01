import styled from "styled-components";

const Container = styled.div`
  grid-area: sidebar;
`;
const IdentityCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBg = styled.div`
  background: url("/assets/55k1z8997gh8dwtihm11aajyq.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background: url(${({ img }) => img});
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Link = styled.div`
  cursor: pointer;
  line-height: 1.5;

  & > p {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.textColorDark};
    font-weight: 600;
  }
  & > span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

const Widget = styled.div`
cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 100%;
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        & > span:first-child {
          color: ${({ theme }) => theme.colors.textColor};
        }
        & > span:nth-child(2) {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
      span {
        font-size: 13px;
        line-height: 1.333;
        &:first-child {
          color: color: ${({ theme }) => theme.colors.primary};
        }
        &:nth-child(2) {
          font-weight: 600;
        }
      }
    }
  }
`;
const PreApp = styled.div`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  & > a {
    text-decoration: none;
    width: 100%;

    & > div {
      margin-right: 15px;
      line-height: 1.333;
      span {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }
      div {
        margin-left: 7px;
        display: flex;
        align-items: center;
        svg {
          height: 17px;
        }
        span {
          text-decoration: underline;
          font-weight: 600;
          font-size: ${({ theme }) => theme.fontSize.dm};
          margin-left: 3px;
        }
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
`;
const Item = styled.div`
  display: block;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.6);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  span {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
`;

const CommunityPanel = styled(IdentityCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: ${({ theme }) => theme.colors.primary};
    padding: 4px 12px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export {
  Container,
  IdentityCard,
  UserInfo,
  CardBg,
  Photo,
  Link,
  Widget,
  Item,
  PreApp,
  CommunityPanel,
};
