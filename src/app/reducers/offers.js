import * as _ from 'lodash'
import { ADD_OFFERS, REMOVE_ALL_OFFERS } from './../constants/ActionTypes'

const initialState = [
    {
        matchingContext: {
            url: "/framasoft.net/",
        },
        alternatives: [
            {
                url: 'http://alternativeto.net',
                title: 'D\'autre alternatives bien cool',
                description: "Alternative To est un annuaire d'alternatives",
                contributor: "pepe",
            }
        ],
        description: 'Framasoft est le leader des annuaires open sources francais, vous feriez bien de rester sur ce site'
    },
    {
        matchingContext: {
            url: "/alternativeto.net/"
        },
        alternatives: [
            {
                url: 'http://framasoft.net',
                title: 'Aller chez framasoft',
                description: "Alternatives open source",
                contributor: "bibi",
            }
        ],
        description: 'Allez voir des trucs open source'
    }
];

export default function offers(state = initialState, action) {
    switch (action.type) {
        case ADD_OFFERS:
            if(action.payload == null || action.payload == '') return state;
            return _.concat(state, JSON.parse(action.payload));
        case REMOVE_ALL_OFFERS:
            return [];
        default:
            return state;
    }
}
