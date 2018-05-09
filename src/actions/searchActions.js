import { ADD_SAVED_PROPERTY, REMOVE_SAVED_PROPERTY, DISABLE_RESULT } from '../constants';

export const addSavedProperty = (propertyId) => ({
    type: ADD_SAVED_PROPERTY,
    propertyId
});

export const removeSavedProperty = (propertyId) => ({
    type: REMOVE_SAVED_PROPERTY,
    propertyId
});

export const disableResult = (propertyId) => ({
    type: DISABLE_RESULT,
    propertyId
});