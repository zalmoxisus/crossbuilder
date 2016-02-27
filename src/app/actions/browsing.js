import { findMatchingOffers } from './offers';

export function webRequestLaunched(details) {
    return dispatch => dispatch(findMatchingOffers(details));
}
