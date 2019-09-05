#!/usr/bin/env node

/* Post-install script for the linter */

// Import the node modules
const fs = require('fs');
const path = require('path');

// Create the symbolic link to a file
const createLink = (file) => {

  // Resolve the paths for the file
  const package = path.resolve(__dirname, file);
  const project = path.resolve(process.env.INIT_CWD, file);

  // Check that the file does not exists in the project folder
  if (!fs.existsSync(project)) {

    // Create a symbolic link to the file in the project folder
    fs.symlinkSync(package, project);
  }
}

// Create the symbolic links to the files
createLink('.eslintignore');
createLink('.eslintrc.js');