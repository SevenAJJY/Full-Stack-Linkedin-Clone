import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
  background: ${({ theme }) => theme.colors.bodyBg};
`;
const Layout = styled.div`
  min-height: 100%;
  max-width: 1128px;
  margin: 2.4rem auto;
  display: grid;
  grid-template-areas: "sidebar main aside";
  grid-template-columns: minmax(0, 235px) minmax(0, auto) minmax(0, 300px);
  gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  @media screen and (min-width: 992px) {
    grid-template-areas: "sidebar main aside";
    grid-template-columns: minmax(0, 235px) minmax(0, auto) minmax(0, 300px);
  }
  @media screen and (max-width: 992px) {
    grid-template-areas:
      "sidebar main"
      "sidebar aside";
    grid-template-columns: minmax(0, 235px) minmax(0, auto);
  }
`;

export { Container, Layout };
