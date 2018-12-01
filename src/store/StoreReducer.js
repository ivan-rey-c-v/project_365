import lookup from '../utils/lookup'
import getSearchParam from '../utils/getSearchParams'
import filterAcceptedItems from '../utils/filterAcceptedItemss'

function storeReducer(state, action) {
	switch (action.type) {
		case 'SET_PERFORMANCE_MODE': {
			return {
				...state,
				performanceMode: action.mode,
				neverPerformant: action.mode === 'low' ? true : false
			}
		}

		case 'SEARCH_PARAM': {
			const cat = getSearchParam(action.param)
			return {
				...state,
				cat: cat ? cat : 'cnn'
			}
		}

		case 'SET_DATA': {
			let acceptedItems = filterAcceptedItems(action.data.items)

			return {
				...state,
				data: {
					...actions.data,
					items: acceptedItems
				},
				config: lookup[state.cat]
			}
		}

		case 'SET_ITEM': {
			const newItem = state.data.items[action.index]
			return {
				...state,
				currentItem: newItem
			}
		}

		default: {
			return state
		}
	}
}

export default storeReducer
