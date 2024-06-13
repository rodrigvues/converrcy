import styled from 'styled-components';

export const FooterBox = styled.div`
  background-color: #E0EEC6;
  color: black;
  padding: 0;
  margin-top: 125px;
  width: 100%;
`;

export const CtaSection = styled.div`
  background-color: black;
  color: #E0EEC6;
  padding: 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #E0EEC6;
  color: black;
  border: none;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  flex: 1;
  margin: 0 10px;

  h4 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 5px;
  }

  ul li a {
    color: black;
    text-decoration: none;
  }
`;

export const FooterEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Rights = styled.p`
  margin: 0;
`;

export const GitHubIcon = styled.a`
  img {
    width: 20px;
    margin-left: 10px;
    vertical-align: middle;
  }
`;
