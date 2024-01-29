import {Keypair, Connection} from '@solana/web3.js';
import {mnemonicToSeedSync} from 'bip39';
import {derivePath} from 'ed25519-hd-key';
import nacl from 'tweetnacl';

const path = "m/44'/501'/0'/0'";

export const solanaConnect = async (mnemonic: string) => {
  try {
    const solana = new Connection('https://api.mainnet-beta.solana.com');

    // Convert the mnemonic to a seed
    const seed = mnemonicToSeedSync(mnemonic, '').slice(0, 32);

    // Derive a seed from the given path
    const derivedSeed = derivePath(path, Buffer.from(seed).toString('hex')).key;

    // Generate a keypair from the derived seed using tweetnacl (NaCl = Networking and Cryptography library)
    const derivedUint8Keypair = nacl.sign.keyPair.fromSeed(derivedSeed);

    // This is a Uint8Array, not a Solana web3.js Keypair object, so you will need to convert it
    const customPathKeypair = Keypair.fromSecretKey(
      Uint8Array.from(derivedUint8Keypair.secretKey),
    );

    console.log(
      'Custom Path Keypair address:',
      customPathKeypair.publicKey.toBase58(),
    );
  } catch (e) {
    console.log('error', e);
  }
};
