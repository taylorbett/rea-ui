import * as SearchActions from './searchActions';
import { ADD_SAVED_PROPERTY, REMOVE_SAVED_PROPERTY } from '../constants';

describe('searchActions', () => {
    it('should create an action to add a saved property', () => {
        const propertyId = '2';
        const expectedAction = {
            type: ADD_SAVED_PROPERTY,
            propertyId: '2'
        }
        expect(SearchActions.addSavedProperty(propertyId)).toEqual(expectedAction);
    });
    it('should create an action to remove a saved property', () => {
        const propertyId = '4';
        const expectedAction = {
            type: REMOVE_SAVED_PROPERTY,
            propertyId: '4'
        }
        expect(SearchActions.removeSavedProperty(propertyId)).toEqual(expectedAction);
    });
});