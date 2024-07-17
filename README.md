# Gulp.js Demo

This project demonstrates the use of Gulp.js to automate common development tasks such as linting JavaScript files, compiling Sass to CSS, transpiling and minifying JavaScript, optimizing images, and watching for changes.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gulp-demo.git
   cd gulp-demo

2. Install dependencies:

bash

npm install

### Usage
To run the default Gulp task, which lints JavaScript files, compiles Sass, transpiles and minifies JavaScript, optimizes images, and watches for changes, use the following command:

    gulp

### Gulp Tasks

styles

Compiles Sass files to CSS.

Source: src/scss/*.scss
Destination: dist/css
scripts

Transpiles JavaScript files with Babel and minifies them.

Source: src/js/*.js
Destination: dist/js
images

Optimizes image files.

Source: src/images/*
Destination: dist/images
lint

Lints JavaScript files using ESLint and fixes issues automatically.

Source: src/js/*.js
watch

Watches for changes in source files and re-runs the appropriate tasks.
default

Runs the lint task, then runs styles, scripts, and images in parallel, and finally starts watch.

### Project Structure

gulp-demo
│   package.json
│   gulpfile.mjs
│   .eslintrc.json
└───src
    ├───scss
    │       style.scss
    ├───js
    │       app.js
    └───images

### Dependencies

    gulp: The streaming build system.
    gulp-sass: Compiles Sass to CSS.
    sass: The Dart Sass compiler.
    gulp-babel: Transpiles ES6+ JavaScript to ES5.
    @babel/core: Babel core library.
    @babel/preset-env: Smart preset that allows you to use the latest JavaScript.
    gulp-uglify: Minifies JavaScript files.
    gulp-imagemin: Optimizes image files.
    gulp-eslint: Lints JavaScript files.
    eslint: The pluggable linting utility for JavaScript.

### Notes

Ensure you have Node.js and npm installed on your system.
The gulp-imagemin task may not optimize any images if the source directory is empty or if the images are already optimized.
The lint task will automatically fix issues if possible. Manually fix any remaining issues reported by ESLint.

### License
This project is licensed under the MIT License.
