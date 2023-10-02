This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```
yarn create next-app --typescript
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## API used
- The API changed, now you must check the CORS according to the browser. Last update
```
https://api.exchangerate.host/
```

## Testing
Add dev dependencies
```
yarn add --dev @testing-library/jest-dom @testing-library/react @testing-library/user-event jest jest-environment-jsdom ts-jest
yarn add --dev eslint-plugin-jest-dom eslint-plugin-testing-library
```
Add Scripts
```
"test":"jest",
"test:watch":"jest --watchAll"
```
Add jest.config.js
Add jest.setup.js

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
