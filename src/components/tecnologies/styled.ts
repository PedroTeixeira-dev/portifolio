import styled from 'styled-components'
import { colors } from 'src/colors'

export const SectionS = styled.section`
  margin-top: 88px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;

  .text-info {
    width: 50%;
  }

  h1 {
    font-size: 40px;
    font-family: Kanit, sans-serif;
    margin-bottom: 24px;
    font-weight: 600;
  }

  p {
    font-family: Kanit;
    color: ${colors.balckish};
  }

  img {
    width: 340px;
    height: 54px;
    align-self: center;
    margin-left: 124px;
  }
`

export const SectionTec = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 56px;
  row-gap: 40px;
  margin-bottom: 160px;

  .tec-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 92px;
    border-radius: 10px;
    background-color: ${colors.blue};

    h3 {
      font-family: Kanit;
      font-weight: 400;
      font-size: 12px;
      color: ${colors.balckish};
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
    }

    img {
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
    }
  }
`
