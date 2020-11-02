import {Rate} from './rate';

export interface Exchange {
    base: string;
    date: string;
    rates: Rate[];

}

//     "rates": {
//         "CHF": 0.2314482281,
//         "EUR": 0.216347194,
//         "USD": 0.2530829475,
//         "GBP": 0.1951624767
// },
//     "base": "PLN",
//     "date": "2020-10-30"
