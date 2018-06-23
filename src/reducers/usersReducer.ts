// import { CHANGE_PAGE_NAME, ChangePageNameAction, PAGE_VIEW, PageViewAction } from "../actions/page-actions";
// import { AnalyticsState } from "../store/store";

// type PageAction =
//   PageViewAction |
//   ChangePageNameAction;

// export const analyticsReducer = (state: AnalyticsState = null!, action: PageAction): AnalyticsState => {
//   switch (action.type) {
//     case PAGE_VIEW:
//       return {
//         pageName: action.pageName,
//         siteSection: action.siteSection
//       };

//     case CHANGE_PAGE_NAME:
//       return {
//         ...state,
//         pageName: action.pageName
//       };

//     default:
//       const _exhaustiveCheck: never = action;
//       return state;
//   }
// };