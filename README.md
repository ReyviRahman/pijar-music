# Pijar Music

React + Vite implementation of the Pijar Music Figma design.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:5173. Build with `npm run build`.

Routes: `#home`, `#discover`, `#store`, `#about`, `#concert/synchronize`, `#buy-ticket`, `#ticket-success`, `#donate`.

Images and fonts are local. The interface includes concert search, city/price filters, product categories, account menu, and detail dialogs. Mobile layouts adapt the desktop Figma frames.

The Synchronize flow follows Figma prototype reactions: Discover (4:137/5:1293) → Detail Concert (4:245) → Buy Ticket (4:285) → Ticket Successful (4:621) → Donate (4:962) → Home. Only Synchronize has a detail connection in the source prototype. Its detail date is August 2024, while the catalog shows February 2023; each screen preserves the source text. Seat selection and donation are local demonstrations, with no real payment or booking. Authentication, account ticket history, and payment services are not connected. Jacket and equipment categories have empty states.

## Verify

With the development server running and Chrome installed:

```sh
node verify.mjs
node verify-flow.mjs
```

Checks navigation, search, filter reset, dialogs, loaded images, mobile overflow, and browser errors. Screenshots are saved in the project root.
