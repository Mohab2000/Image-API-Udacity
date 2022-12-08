# Image-API-Udacity

# Scripts:     
    "start": "nodemon src/index.ts",
    "build": "npx tsc",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine",
    "lint": "eslint . --ext .ts",
    "prettier": "prettier --config .prettierrc.json 'src' --write"
    
# Localhost: 
     Listening 8080
     
# Example:
        http://localhost:8080/image?filename=fjord&height=100&width=100
        This will return fjord image in a new folder with the given width and height
        
 If the parameters aren't sent correctly, it will make a validation error according to validations done
 
