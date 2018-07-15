import { combineReducers } from 'redux'
import UserInterfaceReducer from './UserInterface';
import ConversionDataReducer from './ConversionData';

export default combineReducers({
	userInterface: UserInterfaceReducer,
	conversionData: ConversionDataReducer
});
