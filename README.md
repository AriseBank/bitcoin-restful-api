# Dogecoin Restful API 

![](https://arisebank.com/public-images/sunrise.png)

The unofficial, yet so official, Dogecoin Restful API for Dogecoind.
Built and released by AriseLabs, the developers behind AriseBank. 

## Test It For Yourself (With CURL)
```
curl -X GET http://dogex-001.arisebank.net:2500/aos/get_info
```
## Test It For Yourself (Over HTTP)
```
http://dogex-001.arisebank.net:2500/aos/get_info
```

## Usage

The endpoints follow closely with the cli command list [here](http://labs.arisebank.com/crypto-tools/bf-api/). 
They are structured like so.

/aos/:command?args=optional,arguments,seperated,by,comma
`

`aos` stands for Arise Operating System. You can easily change this for your own applications.

For example: `/aos/get_transaction?args=transaction_id`

Here's a non-exhaustive list of the available endpoints.

```
/aos/add_multi_sig_address
/aos/add_node
/aos/backup_wallet
/aos/create_multi_sig
/aos/create_raw_transaction
/aos/decode_raw_transaction
/aos/dump_priv_key
/aos/encrypt_wallet
/aos/get_account
/aos/get_account_address
/aos/get_added_node_info
/aos/get_addresses_by_account
/aos/get_balance
/aos/get_block
/aos/get_block_count
/aos/get_block_hash
/aos/get_block_template
/aos/get_connection_count
/aos/get_difficulty
/aos/get_generate
/aos/get_hashes_per_second
/aos/get_hashes_per_sec
/aos/get_info
/aos/get_mining_info
/aos/get_new_address
/aos/get_peer_info
/aos/get_raw_memo_pool
/aos/get_raw_transaction
/aos/get_received_by_account
/aos/get_received_by_address
/aos/get_transaction
/aos/get_tx_out
/aos/get_txt_out_set_info
/aos/get_work
/aos/help
/aos/import_priv_key
/aos/keypool_refill
/aos/key_pool_refill
/aos/list_accounts
/aos/list_address_groupings
/aos/list_lock_unspent
/aos/list_received_by_account
/aos/list_received_by_address
/aos/list_since_block
/aos/list_transactions
/aos/list_unspent
/aos/lock_unspent
/aos/move
/aos/send_from
/aos/send_many
/aos/send_raw_transaction
/aos/send_to_address
/aos/set_account
/aos/set_generate
/aos/set_tx_fee
/aos/sign_message
/aos/sign_raw_transaction
/aos/stop
/aos/submit_block
/aos/validate_address
/aos/verify_message
/aos/wallet_lock
/aos/wallet_passphrase
/aos/wallet_passphrase_change
```

## Installation

### Prerequisites

You need to have a `dogecoind` server that the API can talk to. You can easily install Dogecoin's core files using our EasyCoin Installer (Bitcoin Family Version) [here](http://lab.arisebank.com/crypto-tools/easycoin-btc/blob/master/easycoin-btc-v0.1.6.sh), with one line and no headaches.

### Development or Production Deployment 

Note: For development or production deployment, we recommend doing a git clone from our AriseLabs repository. You can also clone from GitHub, but our Labs may update before GitHub, between the time you install and the time the update is mirrored from our servers back to GitHub. 

```
git clone http://lab.arisebank.com/dogecoin/dogecoin-sunrise-api.git
cd dogecoin-sunrise-api
npm install
cp .env.example .env
```

Edit the contents of `.env` to match your local Dogecoin install and your application's dedicated IP address

### Start Your Dogecoin API Server
```
node app.js
```

## Copyright
(c) 2017 AriseBank North America, Inc. This file is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

