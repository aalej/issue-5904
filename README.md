### Repro for 5904

### Steps to reproduce

1. Run `npm install`
2. Run `npm run test`

### Notes

The function [initializeTestEnvironment](https://github.com/firebase/firebase-js-sdk/blob/2ccc9ddb0ee875cf5a14bbc1ca473b576b9105bf/packages/rules-unit-testing/src/initialize.ts#L55) calls [loadStorageRules](https://github.com/firebase/firebase-js-sdk/blob/2ccc9ddb0ee875cf5a14bbc1ca473b576b9105bf/packages/rules-unit-testing/src/impl/rules.ts#L71). Issue is that loadStorageRules makes a call to the `/internal/setRules` endpoint.
