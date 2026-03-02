# Learning React 


# Parcel

- Dev Build
- Hosting on Local Server
- HMR = Hot Module replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimisation
- Minification of files
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different build for dev and production bundles


# Food Ordering App 
/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search Bar
 * - Restaurant Container
 *    - Restaurant Card
 *      - Image
 *     - Name
 *      - Rating
 *      - Cuisine
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */



 # Two types of export and import 
 - Default Export/Import 
    - export default Component;
    - import Component from "path";

- Name Export/Import
    - export const Component;
    - import {Component} from "path";

# React Hooks
    (Normal JS utility functions)
    - useState() - Super powerful React Variables - Whenever a State variable updates/changes react will re render the component
    - useEffect


# Reconciliation Algorithm (React Fibre => After React 16, New Algorithm)
- Virtual DOM is representation of an actual DOM, which is a JS Object 
- Documentation:  https://namastedev.com/blog/understanding-the-react-fiber-architecture-2/

# Diff Algorithm 
- OLD Virtual DOM / New Virtual DOM
- React tries to find the difference between new and old virtaul DOM
- it then updates the DOM 
- Why its faster ? Bec finding out the difference between 2 HTML is more difficult but finding out the difference between 2 objects is faster, so its able to do EFFICIENT DOM MANIPULATION