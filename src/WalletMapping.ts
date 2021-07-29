import {
  Created as CreatedEvent,
} from "../generated/Wallet/Wallet"
import {} from "../generated/Wallet/Wallet"  // 12918387
import {
  WalletCreatedEvent as WalletCreatedEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleCreatedEvent(event: CreatedEvent): void {
  let entity = new WalletCreatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.proxy = event.params.proxy
  entity.save()
}

