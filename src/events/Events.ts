enum Events {
  OpenAddPointsEvent = 'OpenAddPointsEvent',
  PointsAddedEvent = 'PointsAddedEvent',
  RowStandingMoveDownEvent = 'RowStandingMoveDownEvent',
  RowStandingMoveUpEvent = 'RowStandingMoveUpEvent',
  OpenAddPlayerEvent = 'OpenAddPlayerEvent',
  NewRoundEvent = 'NewRoundEvent',
  NewLeaderEvent = 'NewLeaderEvent'
}

export interface EventData {

}

export interface RowStandingMoveUpEventData extends EventData {
  rowId: number,
  count: number
}

export interface NewRoundEventData extends EventData {
  round: number
}

export interface OpenAddPointsEventData extends EventData {
  playerId: number,
  positionX: number,
  positionY: number
}

export interface OpenAddPlayerEventData extends EventData {
  playerId?: number
}


export interface PointsAddedEventData extends EventData {
  playerId: number,
  points: number,
  positionX: number,
  positionY: number
}


export default Events;