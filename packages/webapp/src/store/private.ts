/**
 * Contains private atoms, which should not be accessed by frontend components, only by the store
 * update logic. Refer to the {@link module:store} module for information about the atoms.
 *
 * @module store/private
 */

// =================================================================================================

import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { Address, GameStatus, StaticGameData } from "src/types"
import { gameData, gameID, gameStatus, playerAddress } from "src/store"

// =================================================================================================
// PRIVATE ATOMS

/** cf. {@link playerAddress} */
export const playerAddress_ = atom(null as Address)

/** cf. {@link gameID} */
export const gameID_ = atomWithStorage("0xFable::gameID_", null as BigInt)

/** cf. {@link gameData} */
export const gameData_ = atom(null as StaticGameData)

/** cf. {@link gameStatus} */
export const gameStatus_ = atom(null as GameStatus)

// =================================================================================================
// DEBUG LABELS

playerAddress_.debugLabel = 'playerAddress_'
gameID_.debugLabel        = 'gameID_'
gameData_.debugLabel      = 'gameData_'
gameStatus_.debugLabel    = 'gameStatus_'

// =================================================================================================