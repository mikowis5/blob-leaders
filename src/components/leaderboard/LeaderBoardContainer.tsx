type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const LeaderBoardContainer: React.FC<Props> = ({children} : Props) => {

  return (
    <div className="leader-board-container">{children}</div>
  )

}

export default LeaderBoardContainer;