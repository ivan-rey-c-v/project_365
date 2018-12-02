import lookup from '../utils/lookup'
import getSearchParam from '../utils/getSearchParams'
import filterAcceptedItems from '../utils/filterAcceptedItems'
import setRandomIndex from '../utils/setRandomIndex'

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
			const acceptedItems = filterAcceptedItems(action.data.items)
			const newIndex = setRandomIndex(0, acceptedItems.length)
			return {
				...state,
				data: {
					...action.data,
					items: acceptedItems
				},
				config: lookup[state.cat],
				currentItemIndex: newIndex,
				currentItem: acceptedItems[newIndex]
			}
		}

		case 'SET_NEW_ITEM': {
			const newIndex = setRandomIndex(0, state.data.items.length, [
				state.currentItemIndex
			])
			const newItem = state.data.items[newIndex]
			console.log('rendering new item', {
				prevIndex: state.currentItemIndex,
				newIndex
			})
			return {
				...state,
				currentItem: newItem,
				currentItemIndex: newIndex
			}
		}

		default: {
			return state
		}
	}
}

export default storeReducer
