import { ADD_SAVED_PROPERTY, REMOVE_SAVED_PROPERTY } from '../constants';

export const addSavedProperty = (propertyId) => ({
    type: ADD_SAVED_PROPERTY,
    propertyId
});

export const removeSavedProperty = (propertyId) => ({
    type: REMOVE_SAVED_PROPERTY,
    propertyId
});