import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font: 20px Roboto, sans-serif;

  a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li span {
    margin-right: 20px;
  }

  img.avatar {
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
`;

export default Container;
