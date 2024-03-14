import { createReducer, on } from "@ngrx/store";
import { DashboardActions } from "./dashboard.actions";


export const FeatureName = 'Dashboard';

export interface DashboardState {
  dashboardData: any;
}

export const initialState: DashboardState = {
  dashboardData: [],
};

export const dashboardReducer = createReducer<DashboardState>(
  initialState,

  on(DashboardActions.getDashboardData, (state) => {
    console.log('DashboardActions.getDashboardData');
    console.log(state);
    return {
      ...state,
    };
  }),

  on(DashboardActions.setDashboardData, (state, { data }) => {
    console.log('DashboardActions.setDashboardData');
    console.log(state);
    console.log(data);
    return {
      ...state,
      dashboardData: data,
    };
  })
);
