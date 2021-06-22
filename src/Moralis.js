import React from 'react'

function Moralis() {
  return async function listenToUpdate() {
    let query = new Moralis.query(
      'EthTransactions'
    )
    let subscription = await query.subscribe()
    subscription.on('create', (object) => {
      console.log('New Trnsaction')
      console.log(object)
    })
  }
}

export default Moralis
