#!/usr/bin/env node

// Import the required node modules
const fs = require('fs');
const path = require('path');

// Create the symbolic link to a file
const createLink = (file) => {

  // Resolve the paths for the file
  const package = path.resolve(__dirname, '../resources', file);
  const project = path.resolve(process.env.INIT_CWD, file);

  // Check that the file does not exists in the project folder
  if (!fs.existsSync(project)) {

    // Create a symbolic link to the file in the project folder
    fs.symlinkSync(package, project);
  }
}

// Copy a resource file to the project folder
const copyResource = (filename, output = filename) => {

  // Resolve the paths for the file
  const package = path.resolve(__dirname, '../resources/', filename);
  const project = path.resolve(process.env.INIT_CWD, output);

  // Check that the file does not exists in the project folder
  if (!fs.existsSync(project)) {

    // Attempt to copy the file to the project folder
    try { 

      // Write the file to the project folder
      fs.writeFileSync(project, fs.readFileSync(package));

    } catch (e) {}
  }
}

// Create the symbolic link to .eslintrc.js
createLink('.eslintrc.js');

// Copy the .eslintignore
copyResource('.eslintignore');