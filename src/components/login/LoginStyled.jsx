import styled, { css } from "styled-components";

const Container = styled.div``;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 10px 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  & > a {
    width: 130px;
    height: 35px;
    margin-right: auto;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Link = styled.a`
  height: min-content;
  min-height: 48px;
  margin-left: 5px;
  border-radius: 24px;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  &:hover {
    ${({ hover, theme }) => css`
      ${() => hover == "gray" && `background-color: ${theme.colors.hoverGray}`}
      ${() =>
        hover == "blue" && `background-color: ${theme.colors.hoverAltBlue}`}
    `}
  }
  ${({ border, theme }) => css`
    ${() => border == "blue" && `box-shadow: 0 0 0 1px ${theme.colors.primary}`}
  `}
`;

const Section = styled.section`
  overflow: hidden;
  max-width: 1128px;
  margin: auto;
  padding: 40px 10px 16px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  img {
    grid-column: span 6;
    max-width: 700px;
    height: auto;
    @media (max-width: 768px) {
      grid-column: span 12;
      max-width: 350px;
      margin: 0 auto;
    }
  }
`;
const Div = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans",
      Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial,
      sans-serif;
    font-size: 50px;
    font-weight: 200;
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;
const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-top: 12px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  & > div label {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 5px;
    font-weight: 600;
  }

  & > div input {
    padding: 15px 20px;
    border: 1px solid;
    border-radius: 5px;
    outline: none;
    background: transparent;
    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: 0 0 0 1px #000000e6;
      background: ${({ theme }) => theme.colors.hoverGray};
    }
  }

  & > div a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    margin: 10px 0;
  }

  & > div button {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    height: min-content;
    min-height: 48px;
    border-radius: 24px;
    padding: 12px 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 0px 16px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 50%;
    left: 0;
    top: 19px;
    z-index: -10;
    background-color: ${({ theme }) => theme.colors.textColor};
  }
  & > span {
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.textColor};
    z-index: 10;
    position: relative;
    background: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 50%;
    right: 0;
    top: 19px;
    z-index: -10;
    background-color: ${({ theme }) => theme.colors.textColor};
  }
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    height: 100%;
    width: 1px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
  }
  li a {
    width: 64px;
    margin-left: 8px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.textColor};
    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
  li a svg {
    height: 24px;
  }
`;
const Google = styled.button`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #dadce0;
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  svg {
    margin-right: 15px;
    height: 20px;
    width: 20px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export { Container, Google, List, Line, Form, Div, Section, Link, Nav };
