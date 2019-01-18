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
import AbstractWeb3Module from '../AbstractWeb3Module';

/**
 * ES7 Decorator for an Web3 module.
 *
 * @method Module
 *
 * @returns {Function}
 */
export const Module = () => {
    /**
     * @param {Object} module
     *
     * @returns {Function}
     */
    return (module) => {
        return class extends Object.setPrototypeOf(module, AbstractWeb3Module) {
            constructor(provider, options = {}, methodFactory = null, accounts = null) {
                const abstractWeb3ModuleParameters = [
                    provider,
                    new ProvidersModuleFactory(),
                    new MethodModuleFactory(accounts),
                    methodFactory,
                    options
                ];

                const additionalParameters = [...arguments].slice(4, (arguments.length - 1));

                const constructorParameters = abstractWeb3ModuleParameters.concat(additionalParameters);

                super(...constructorParameters);
            }
        };
    };
};
