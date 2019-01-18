/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file Module.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {ProvidersModuleFactory} from 'web3-providers';
import {MethodModuleFactory} from 'web3-core-method';

/**
 * ES7 Decorator for an Web3 module.
 *
 * @method Module
 *
 * @returns {Function}
 */
export const Module = () => {
    /**
     * @param {AbstractWeb3Module} module
     *
     * @returns {Function}
     */
    return (module) => {
        return class extends module {
            constructor(provider, options, methodFactory, accounts) {
                super(provider, new ProvidersModuleFactory(), new MethodModuleFactory(accounts), methodFactory, options);
            }
        }
    };
};
