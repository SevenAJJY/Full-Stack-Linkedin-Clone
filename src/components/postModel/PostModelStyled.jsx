import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 0.3s ease;
  transition: all 0.3s ease;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  background-color: #fff;
  overflow: initial;
  border-radius: 0.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-weight: 400;
  }
  button {
    width: 40px;
    height: 40px;
    min-width: auto;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.textColor};
    svg {
      pointer-events: none;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.bgHover};
    }
  }
`;
const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1rem 2rem;
  color: ${({ theme }) => theme.colors.textColor};
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border-radius: 50%;
    border: 2px solid transparent;
  }
  div {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-left: 5px;
    span {
      color: ${({ theme }) => theme.colors.textColorDark};
    }
  }
`;
const ShareState = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 20px;
  padding: 4px;
  & > p {
    margin: 0 5px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    font-size: ${({ theme }) => theme.fontSize.md};

    width: 100%;
    min-height: 120px;
    padding-left: 15px;
    resize: none;
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 0 15px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  }
`;
const UploadImage = styled.div`
  text-align: center;
  border: 1px dashed;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 100%;
  }
  &:hover {
    background: #003dff1a;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1.2rem 1.4rem 1.2rem 1.6rem;
`;
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
`;
const AssetButton = styled.button`
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
  margin-right: 8px;
  border-radius: 50%;
  border: none;
  outline: none;
  justify-content: center;
  background: transparent;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;
const Artdeco = styled(AssetButton)`
  margin-left: 10px;
  width: fit-content;
  padding: 0 10px;
  height: 40px;
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  ${AssetButton} {
    border-radius: 50px;
    padding: 5px 10px;
    span {
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      padding: 0 5px;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  padding: 0 16px;
  border-radius: 20px;
  background: ${(props) =>
    props.disabled ? "#ebebeb" : props.theme.colors.primary};
  color: ${(props) => (props.disabled ? "#5a5a5a" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: ${(props) => props.theme.fontSize.sm};

  letter-spacing: 1.1px;
  border: none;
  outline: none;
  &:hover {
    background: ${(props) => (props.disabled ? "#b8b8b8" : "#004182")};
  }
`;

export {
  Container,
  Content,
  Header,
  ShareContent,
  UserInfo,
  ShareState,
  Editor,
  UploadImage,
  ShareCreation,
  AttachAssets,
  AssetButton,
  ShareComment,
  PostButton,
  Artdeco,
};
