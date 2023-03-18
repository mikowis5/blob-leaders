import styled from 'styled-components'

const LeaderBoardList = styled.div`
  width: 80%;
  overflow-y: auto;
  direction: rtl;

  > div {
    direction: ltr;
  }

`;

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const LeaderBoardContainer: React.FC<Props> = ({children} : Props) => {

  return (
    <LeaderBoardList>
      {children}
    </LeaderBoardList>
  )

}

export default LeaderBoardContainer;