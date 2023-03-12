enum Events {
  RowStandingMoveDownEvent = 'RowStandingMoveDownEvent',
  RowStandingMoveUpEvent = 'RowStandingMoveUpEvent',
  OpenAddPointsEvent = 'OpenAddPointsEvent',
  PointsAddedEvent = 'PointsAddedEvent'
}

export type RowStandingMoveUpEventData = {
  rowId: number,
  count: number
}

export type OpenAddPointsEventData = {
  playerId: number,
  positionX: number,
  positionY: number
}

export type PointsAddedEventData = {
  playerId: number,
  points: number,
  positionX: number,
  positionY: number
}


export default Events;