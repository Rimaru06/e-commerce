# E-commerce Tech using Next.js, Sanity, use-shopping-cart, and Stripe

This is a sample project showcasing an e-commerce application built with Next.js, Sanity, use-shopping-cart, and Stripe.

## Features

- Next.js: A React framework for building server-side rendered and static websites.
- Sanity: A headless CMS for managing content.
- use-shopping-cart: A library for handling shopping cart functionality in React applications.
- Stripe: A payment processing platform for accepting online payments.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Install dependencies:

    ```bash
    cd your-repo
    npm install
    ```

3. Configure environment variables:

    - Create a `.env.local` file in the root directory.
    - Add the following environment variables and replace the values with your own:

      ```plaintext
      NEXT_PUBLIC_STRIPE_API_KEY=your-stripe-api-key
      SANITY_PROJECT_ID=your-sanity-project-id
      SANITY_DATASET=your-sanity-dataset
      ```

## Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).