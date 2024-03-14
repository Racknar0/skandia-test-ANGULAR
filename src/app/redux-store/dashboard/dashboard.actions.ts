import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    "getDashboardData": emptyProps(),
    "setDashboardData": props<{ data: any }>(),
  }
});
