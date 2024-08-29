import styled from 'styled-components'

export const HeaderS = styled.header`
  background-color: #09090f;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 72px;
  border-left: 180px;
  margin: 0 auto;

  img {
    margin-left: 8px;
    width: 136px;
    height: 60px;
    margin-top: 72px;
    margin-bottom: 8px;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-top: 72px;

    li {
      margin-left: 72px;
      list-style: none;

      a {
        color: #ffffff;
        font-family: Kanit;
        size: 16px;
      }
    }
  }

  .active {
    border-bottom: #ffffff 2px solid;
  }

  .marginBottom {
    margin-bottom: 2px solid #ffff;
  }
`
