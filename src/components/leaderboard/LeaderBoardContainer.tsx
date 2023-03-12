import styled from 'styled-components'

const LeaderBoardList = styled.div`
  width: 80%;
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