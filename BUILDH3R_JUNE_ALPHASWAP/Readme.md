# BUILDH3R JUNE APLHASWAP

Proof of task for Buildh3r June AlphaSwap workshop


## Task
- Complete a private swap transaction with `snarkos` command line.
- I will be doing this locally in my VM.

## Setting up VM
-  Install `rust` locally. Below command will install cli. [More deatils](https://www.rust-lang.org/tools/install)
    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```
- Install SnarkOS. [More Details](https://github.com/ProvableHQ/snarkOS):
    ```
    git clone https://github.com/AleoHQ/snarkOS.git --depth 1
    cd snarkOS
    ./build_ubuntu.sh
    cargo install --locked --path .
    ```
- Install SnarkVM. [More Details](https://github.com/ProvableHQ/snarkVM):
    ```
    cargo install snarkvm
    ```

- Make sure all the binaries are added in PATH.

### Step 1 Create new account and get some credits from faucet

```
snarkos account new
```
<img src=./images/step1-geneate-acc.png>

- Claim Aleo testnet Credits. Visit [https://faucetbeta.sotertech.io/](https://faucetbeta.sotertech.io/) to claim Aleo Testnet Credits. I have submitted requested [https://testnetbeta.aleo123.io/address/aleo1k93ktaumr3fuvd230hwqruenhp4yjs6u5l3jqse0r43kda3djvrsd3hhpa](https://testnetbeta.aleo123.io/address/aleo1k93ktaumr3fuvd230hwqruenhp4yjs6u5l3jqse0r43kda3djvrsd3hhpa).


### Step 2 Claim AlphaSwap Testnet USDT Token:

<img src=./images/step2.png>

### Step 3 Convert Public USDT to Private USDT:

<img src=./images/step3.png>

### Step 4: Get the private output record by Tx ID:
Visit: https://explorer.aleo.org

Search by  transcation ID TX ID: at1rzc3kzggl593470a4xxq95flecu4tj7fz2zvsaecq5qc8ucgsyxsl30tz6.

Below output can be seen:

<img src=./images/step-4.png>

### Step 5: Decrypt Record:

<img src=./images/step-5-verify.png>

### Step 6: Private Swap:
#### Transaction id: at1rl8cxsmpxxq8stlews92mpff0zrw3qh7a0ym50lfd8qq65sp9qrs658snk
<img src=./images/step-6.png>
<img src=./images/step-6-explorer.png>
