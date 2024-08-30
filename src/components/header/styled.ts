import styled from 'styled-components'

import { colors } from '../../colors'

import { Props } from '.'

export const HeaderS = styled.header<Props>`
  background-color: ${(props) =>
    props.color == 'primary' ? colors.balckish : colors.white};
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
        color: ${(props) =>
          props.color == 'primary' ? colors.white : colors.balckish};
        font-family: Kanit;
        size: 16px;
      }
    }
  }

  .active {
    border-bottom: ${(props) =>
        props.color == 'primary' ? colors.white : colors.balckish}
      2px solid;
  }
`
