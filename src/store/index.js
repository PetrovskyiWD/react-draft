import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

export const configureStore = preloadedStore => {
	const middlewares = []
	const middlewareEnhancer = applyMiddleware(...middlewares)
	const storeEnhancers = [middlewareEnhancer]
	const composedEnhancer = composeWithDevTools(...storeEnhancers)
	const store = createStore(rootReducer, preloadedStore, composedEnhancer)

	return store
}
