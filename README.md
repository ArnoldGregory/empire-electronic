# Empire Electronics website

## Change products or prices
Open `products.js` and edit the list. Each line is one product:

    { name: "Redmi 15C 4G, 8GB/256GB", cat: "Phones", price: 24400, img: "redmi-15c.webp", icon: "phone" },

- `price`: number with no commas, or `null` to show "Ask for price".
- `img`: a photo in the `img` folder (optional). Without it an icon is shown.
- Update `pricesUpdated` at the top when you change prices.

Adding a photo: put the file (jpg, png or webp, ideally landscape 4:3, under 100 KB) in `img/` and set `img: "your-file.jpg"`.

## Put it online free with Vercel
Easiest (no coding tools):
1. Create a free account at vercel.com (sign up with GitHub or email).
2. Go to vercel.com/new, choose to deploy/upload a project, and drag in this whole folder.
   (Alternative: install the CLI with `npm i -g vercel`, open this folder in a terminal and run `vercel --prod`.)
3. Vercel gives you a link like `empire-electronics.vercel.app`.

To update later: edit the files and deploy again the same way (or connect a GitHub repo so every change goes live automatically).

Netlify works the same way: app.netlify.com/drop and drag the folder in.
