import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardState, FeatureName } from "./dashboard.reducers";


export const selectDashboardState = createFeatureSelector<DashboardState>(FeatureName);
export const selectDashboardData = createSelector(selectDashboardState, (state) => state.dashboardData);
