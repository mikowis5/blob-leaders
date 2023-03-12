import { isAnimatingAtom } from "../AnimationState";
import { atom, useSetAtom } from 'jotai';
import { sortLeaderboardAction } from "../../leaderboard/actions/sortLeaderboardAction";
import { selectRowsToAnimateToBottom } from "../../leaderboard/selectors/selectRowsToAnimateToBottom";
import { emitCustomEvent } from "react-custom-events";
import Events, { RowStandingMoveUpEventData } from "../../../events/Events";


export const moveRowsAnimationDuration = 1000;

/**
 * Returns a method that gets row by id and moves it up in leader
 * and moves other rows with less points below it.
 * 
 * Menat to be used after points has been added to a row.
 */
export const useMoveRowsAnimation = () => {

  const sortLeaderboard = useSetAtom(sortLeaderboardAction);
  const moveRowsAnimationAction = atom(null, async (get, set, rowId: number) => {

    set(isAnimatingAtom, true);
    const rows = get(selectRowsToAnimateToBottom)(rowId);

    rows.forEach((rowId) => {
      emitCustomEvent(Events.RowStandingMoveDownEvent, rowId);
    });

    const eventData: RowStandingMoveUpEventData = {
      rowId,
      count: rows.length
    }
    emitCustomEvent(Events.RowStandingMoveUpEvent, eventData);

    sortLeaderboard();
    setTimeout(() => {
      set(isAnimatingAtom, false);
    }, moveRowsAnimationDuration);
  
  });

  return useSetAtom(moveRowsAnimationAction);

}