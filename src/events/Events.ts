enum Events {
  RowStandingMoveDownEvent = 'RowStandingMoveDownEvent',
  RowStandingMoveUpEvent = 'RowStandingMoveUpEvent',
}

export type RowStandingMoveUpEventData = {
  rowId: number
  count: number
}


export default Events;