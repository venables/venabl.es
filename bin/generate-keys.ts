import { Ed25519VerificationKey2020 } from "@digitalbazaar/ed25519-verification-key-2020"

async function generateDIDKeyPair() {
  // Generate a new key pair
  const key = await Ed25519VerificationKey2020.generate()

  // Get the public key in multibase format
  const publicKeyMultibase = key.publicKeyMultibase

  // The private key is available as key.privateKeyMultibase

  return {
    publicKeyMultibase,
    privateKeyMultibase: key.privateKeyMultibase
  }
}

// Usage
async function main() {
  const keyPair = await generateDIDKeyPair()
  console.log("Public Key:", keyPair.publicKeyMultibase)
  console.log("Private Key:", keyPair.privateKeyMultibase)
}

main().catch(console.error)
