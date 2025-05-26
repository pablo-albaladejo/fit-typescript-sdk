# Using fit-typescript-sdk

This guide shows how to install and use the FIT TypeScript SDK from another project.

## Installation

Install the package using npm:

```bash
npm install fit-typescript-sdk
```

## Basic example

The snippet below creates a FIT file with a simple header and then reads it back.

```typescript
import { FileEncoder } from 'fit-typescript-sdk/dist/FileEncoder';
import FileDecoder from 'fit-typescript-sdk/dist/FileDecoder';
import ProtocolVersion from 'fit-typescript-sdk/dist/ProtocolVersion';
import FileIdMesg from 'fit-typescript-sdk/dist/FileIdMesg';

const path = './example.fit';
const encoder = new FileEncoder(path, ProtocolVersion.V1_0);
encoder.writeMesg(new FileIdMesg());
encoder.close();

const decoder = new FileDecoder(path);
const header = decoder.readHeader();
console.log(header.dataType, header.dataSize);
```

Type definitions are bundled with the package so the SDK can be used directly from TypeScript.
