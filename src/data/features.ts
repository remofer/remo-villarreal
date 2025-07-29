export const features = [
    {
      title: "Checkout Banner with Conditional Shipping Override",
      description:
        "Added a conditional banner in the checkout using Shopify UI Extensions. When 'United States' is selected, the banner appears and lets users switch the shipping address to a Cayman Islands pickup point with one click.",
      mediaSrc: process.env.PUBLIC_URL + "/assets/checkout-validation.mov.gif",
    },
    {
      title: "Product Page Customization with Membership Redirect",
      description:
        "Customized product pages to hide the cart, search icon, and prices. Modified the 'Add to Cart' button to redirect users to a membership signup page instead.",
      mediaSrc: process.env.PUBLIC_URL + "/assets/storefront-customization.mov.gif",
    },
    {
      title: "Inventory Management App for JPaul Warehouse",
      description:
        "Built a private Shopify app to update inventory quantities specifically for the 'JPaul Warehouse' location. The app integrates with the Admin API to manage stock adjustments efficiently based on internal workflows.",
      mediaSrc: process.env.PUBLIC_URL + "/assets/inventory-app.mov.gif",
    },
    {
        title: "Shopify Store Performance, SEO & Accessibility Enhancements",
        description:
          "Performed a thorough audit and optimization of the Shopify storefront. Improvements included lazy loading for media, semantic HTML structure, ARIA labels, and meta tag enhancements. Resulted in better Lighthouse scores and an overall faster and more inclusive experience.",
        mediaSrc: process.env.PUBLIC_URL + "/assets/performance-seo-accessibility.gif",
    }
  ];
  