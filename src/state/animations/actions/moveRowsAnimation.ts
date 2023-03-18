import { isAnimatingAtom, isAnimatingMoveRowsAtom } from "../AnimationState";
import { atom, useSetAtom } from 'jotai';
import { sortLeaderboardAction } from "../../leaderboard/actions/sortLeaderboardAction";
import { selectRowsToAnimateToBottom } from "../../leaderboard/selectors/selectRowsToAnimateToBottom";
import { emitCustomEvent } from "react-custom-events";
import Events, { RowStandingMoveUpEventData } from "../../../events/Events";
import { currentLeaderId, leaderboardAtom } from "../../leaderboard/LeaderboardState";


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
    set(isAnimatingMoveRowsAtom, true);
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
      set(isAnimatingMoveRowsAtom, false);

      const leaderBoard = get(leaderboardAtom);
      const potentialNewLeader = leaderBoard[0].id;
      const currentLeader = get(currentLeaderId);

      if(leaderBoard.length) {
        set(currentLeaderId, potentialNewLeader);
        if(currentLeader > 0 && potentialNewLeader != currentLeader) {
          setTimeout(() => {
            emitCustomEvent(Events.NewLeaderEvent);
          }, 100);
          
        }
      }

    }, moveRowsAnimationDuration);
  
  });

  return useSetAtom(moveRowsAnimationAction);

}