import {combineReducers, configureStore} from '@reduxjs/toolkit'
import usersSlice from './usersSlice';
import filterSlice from './filterSlice';
import selectSlice from './selectSlice';
import sortSlice from './sortSlice';
import singleUserSlice from './singleUserSlice';
import paginationSlice from './paginationSlice';




const rootreducer = combineReducers({
    users: usersSlice,
    filter: filterSlice,
    select: selectSlice,
    sort: sortSlice,
    userId: singleUserSlice,
    pagination: paginationSlice,
});

export const store = configureStore({
    reducer: rootreducer
})