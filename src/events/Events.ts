enum Events {
  RowStandingMoveDownEvent = 'RowStandingMoveDownEvent',
  RowStandingMoveUpEvent = 'RowStandingMoveUpEvent',
  OpenAddPointsEvent = 'OpenAddPointsEvent'
}

export type RowStandingMoveUpEventData = {
  rowId: number
  count: number
}

export type OpenAddPointsEventData = {
  playerId: number,
  positionX: number,
  positionY: number
}


export default Events;