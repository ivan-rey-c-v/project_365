import lookup from '../utils/lookup'
import getSearchParam from '../utils/getSearchParams'

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
			return {
				...state,
				cat: getSearchParam(action.param)
			}
		}

		case 'SET_DATA': {
			return {
				...state,
				data: action.data,
				config: lookup[state.cat]
			}
		}

		default: {
			return state
		}
	}
}

export default storeReducer
