# A Modular Next.js, GSAP, and SCSS Mocked Landing Page

**[Live Demo](https://www.davidbautista.co/demos/smk-landing-page)**

## Table of Contents

- [Building Process](#building-process)
- [Tech Stack](#tech-stack)
- [How to Run Locally](#how-to-run-locally)

This project aims to deliver reusable, re-orderable components that achieve a pixel-perfect match with the Figma design. This README covers the details of this project—a dynamic landing page for a fictional use case—built using Next.js, GSAP, and SCSS modules. The page is dynamically rendered based on data fetched from an API endpoint that defines the structure of each page block and its components. The primary focus was on performance, visual fluidity, and creating sleek animations to enhance user experience.

## Building Process

![GIF Demo](https://github.com/user-attachments/assets/ba8978dc-0531-4383-bd0b-4f8f267deb5f)

The building process was straightforward, thanks to the Figma design provided, which made the implementation process much smoother. My main focus was on faithfully translating the design into a functional application while ensuring the user experience felt smooth, enjoyable, and modern.

One of the key challenges was optimizing animations to keep them **silky smooth** while ensuring that **page load speed** stayed optimal. This is where GSAP really excelled—enabling me to manage animation timelines precisely without sacrificing performance.

### Page Structure

This landing page is divided into three main blocks:

- **Block 1**: A simple text component.
- **Block 2**: A fullscreen component including:
  - A centered floating card.
  - A background that can be an image or a looping autoplay video.
- **Block 3**: A fullscreen component that remains fixed at the top (sticky) as the scroll progresses. This block includes an effect where the color of the text changes from gray to another color, letter by letter, as the user scrolls.

## Tech Stack

- **Next.js** (React Framework)
- **GSAP** (Animation Library)
- **SCSS Modules** (Scoped Styles)

### Why This Stack?

I chose this stack to ensure the perfect combination of **dynamic interactions** and **excellent performance**. Next.js provided server-side rendering capabilities, while **GSAP** delivered smooth, high-quality animations. The **SCSS Modules** kept styles clean and isolated, preventing class collisions and ensuring maintainable, scoped styles.

### A Quick Note on GSAP vs. Framer Motion

Initially, I planned to use **Framer Motion** for the animations due to its simplicity and React-native-like syntax. However, as I integrated it with sticky divs (using SCSS modules), I encountered unexpected compatibility issues with **sticky positioning**. After some trial and error and a lot of research, I decided to switch to **GSAP**. This change paid off as GSAP offered great flexibility and worked perfectly with the sticky elements, allowing me to achieve the desired effect without compromise.

## How to Run Locally

Ready to run this project locally? Follow these steps:

1. **Clone the repository**

   ```sh
   git clone https://github.com/djbautista/smk-landing-page.git
   cd smk-landing-page
   ```

2. **Install dependencies**

   - Run either `npm ci` (recommended) or `npm i` (if you prefer).
   - Ensure you're using **Node 18.20.\*** or higher.

   ```sh
   npm ci
   ```

3. **Set up environment variables**

   - Create a `.env.local` file at the root of your project and add the following variable:

   ```sh
   COMPONENTS_API_URL=https://components-api-url.com
   ```

   This variable should point to the API endpoint that fetches the data for the page components.

4. **Run the development server**

   ```sh
   npm run dev
   ```

   You should now be able to see the app in your browser at [http://localhost:3000](http://localhost:3000).

---

I hope this README gives you a solid understanding of how the app was built and how to get it running on your own machine. If you have any questions, feel free to reach out or open an issue in the repository.

Happy coding!
