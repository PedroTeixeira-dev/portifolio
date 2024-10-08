import styled from 'styled-components'
import { colors } from 'src/colors'

export const HomeS = styled.div`
  background-image: url('../../assets/images/background0.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.balckish};
  width: 100%;
  margin: 0 auto;
  height: 100%;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100vh;

  section {
    display: flex;
    flex-direction: row;
    margin-top: 40px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        width: 351px;
        height: 120px;
        margin-bottom: 42px;
      }

      p {
        color: ${colors.white};
        max-width: 880px;
        font-size: 18px;
        font-family: Kanit;
        margin-bottom: 42px;
      }

      .donwload-button {
        background-color: ${colors.blue};
        color: ${colors.balckish};
        width: fit-content;
        border: none;
        font-size: 16px;
        font-family: Kanit;
        padding: 8px 10px;
        cursor: pointer;
        transition: box-shadow 0.3s ease-in-out;
      }

      .donwload-button:hover {
        box-shadow: 0 0 24px rgba(0, 196, 255, 0.7);
      }
    }

    .profilePicture {
      width: 382px;
      height: 504px;
      margin-top: 16px;
    }

    .profileContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: end;
    }
  }

  .backgound {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    display: block;
  }
`
