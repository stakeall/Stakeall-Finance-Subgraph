import {
  LogAccountCreated as LogAccountCreatedEvent,
} from "../generated/UserWallet/UserWallet"
import {} from "../generated/UserWallet/UserWallet"
import { Account } from "../generated/schema"
import {} from "../generated/schema"

export function handleLogAccountCreatedEvent(
  event: LogAccountCreatedEvent
): void {
  let entity = new Account(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.blockTimestamp = event.block.timestamp
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.account = event.params.account
  entity.origin = event.params.origin
  entity.save()
}

