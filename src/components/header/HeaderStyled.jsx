import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1001;
  border: 1px solid #00000014;
  padding: 0px 20px;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.a`
  display: flex;
  overflow: hidden;
  margin-right: 8px;
  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  z-index: 100;
  position: relative;
  @media (max-width: 768px) {
    flex-grow: unset;
  }
  & > div {
    position: relative;
    max-width: 280px;
    div {
      display: block;
      width: 100%;
      z-index: 0;
      input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 0.4rem;
        color: rgba(0, 0, 0, 0.9);
        width: 218px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        vertical-align: text-top;
        border-color: #dce6f1;
        @media (max-width: 768px) {
          width: 140px;
        }
      }
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 12px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  justify-content: space-between;
  .active {
    span::after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      position: absolute;
      left: 0;
      bottom: 0;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      text-align: center;
    }
    @media (max-width: 768px) {
      min-width: 50px;
      font-size: 9px;
      span > img {
        width: 40%;
      }
    }
  }
  &:hover,
  &:active {
    a {
      svg,
      span {
        color: ${({ theme }) => theme.colors.textHover};
      }
    }
  }
`;

const SignOut = styled(ListItem)`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  transition-duration: 167ms;
  display: none;
  z-index: 15;
  cursor: pointer;
`;

const User = styled(ListItem)`
  a > img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const Work = styled(ListItem)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  padding-left: 12px;
  cursor: pointer;

  & > a {
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export {
  Container,
  Content,
  Logo,
  Search,
  SearchIcon,
  Nav,
  List,
  ListItem,
  User,
  SignOut,
  Work,
};
